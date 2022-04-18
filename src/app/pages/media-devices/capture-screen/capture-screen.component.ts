import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DesktopCapturerSource } from 'electron';
import { OverviewService } from '../../../core/services/media-devices/overview.service';
import { SourceConfiguration } from '../../../core/services/media-devices/source-configuration';
import { MaterIalSelectItem } from '../../../models/materIal-select';

@Component({
  selector: 'app-capture-screen',
  templateUrl: './capture-screen.component.html',
  styleUrls: ['./capture-screen.component.css'],
  providers: [OverviewService]
})
export class CaptureScreenComponent implements OnInit {

  @ViewChild("camera") camera: ElementRef;
  selectedValue: string = "";
  selectData: MaterIalSelectItem<DesktopCapturerSource>[] = [];
  selectedOption: MaterIalSelectItem<DesktopCapturerSource> | null;
  duration = "";
  beginTime: number;
  isStart: boolean = false;
  isStop: boolean = false;
  constructor(private overview: OverviewService) { }

  ngOnInit() {

  }

  getSelectedOption(): MaterIalSelectItem<DesktopCapturerSource> {
    const source = this.selectData.find(x => x.value === this.selectedValue);
    return source;
  }

  ngAfterViewInit() {
    this.overview.CapturerSource.subscribe(res => this.selectData = res);
  }

  changeSource() {
    if (this.selectedValue) {
      const item = this.getSelectedOption();
      const config = {
        source: item.source,
        videoElement: this.camera
      }
      this.selectedOption = item;
      this.overview.changeSource(config);
      this.isStart = false;
      this.isStop = false;

    } else {
      this.selectedOption = null;
      this.camera.nativeElement.srcObject = null;
    }
  }

  start() {
    this.beginTime = new Date().getTime();
    this.isStart = true;
    this.isStop = false;
  }

  stop() {
    const dur = new Date().getTime() - this.beginTime;
    this.duration = " " + this.formatDuration(dur);
    this.isStop = true;
    this.isStart = false;
  }

  formatDuration = (timestamp: number) => {
    if (timestamp < 0) timestamp = -timestamp;
    const time = {
      hour: Math.floor(timestamp / 3600000) % 24,
      minute: Math.floor(timestamp / 60000) % 60,
      second: Math.floor(timestamp / 1000) % 60,
    };
    return Object.entries(time).filter(val => val[1] != 0).map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`).join('1');
  }
}

