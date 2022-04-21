import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DesktopCapturerSource } from 'electron';
import { MediaRecorderContext } from '../../../core/services/media-devices/media-recorder-context';
import { RecordScreenService } from '../../../core/services/media-devices/record-screen.service';
import { ScreenSource } from '../../../core/services/media-devices/screen-source';
import { MaterIalSelectItem } from '../../../models/materIal-select';

@Component({
  selector: 'app-capturer-screen',
  templateUrl: './capturer-screen.component.html',
  styleUrls: ['./capturer-screen.component.css'],
  providers: [RecordScreenService]
})
export class CapturerScreenComponent implements OnInit {

  @ViewChild("camera") camera: ElementRef;
  selectedValue: string = "";
  selectData: MaterIalSelectItem<DesktopCapturerSource>[] = [];
  selectedOption: MaterIalSelectItem<DesktopCapturerSource> | null;
  duration="";
  beginTime: number = 0;
  isStart: boolean = false;
  isStop: boolean = false;
  videoContext: MediaRecorderContext;
  constructor(private recordScreenservice: RecordScreenService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getSelectedOption(): MaterIalSelectItem<DesktopCapturerSource> {
    const source = this.selectData.find(x => x.value === this.selectedValue);
    return source;
  }

  ngAfterViewInit() {
    this.recordScreenservice.CapturerSource.subscribe(res => this.selectData = res);
  }

  async changeSource() {
    if (this.selectedValue) {
      const item = this.getSelectedOption();
      const config: ScreenSource = {
        source: item.source,
        videoElement: this.camera,
      }
      this.selectedOption = item;
      this.videoContext = await this.recordScreenservice.changeSource(config);
      this.isStart = false;
      this.isStop = false;

    } else {
      this.selectedOption = null;
      this.camera.nativeElement.srcObject = null;
    }
  }

  getDuration() {
    const dur = new Date().getTime() - this.beginTime;
    return " " + this.formatDuration(dur);
  }

  start() {
    if (this.beginTime == 0) this.beginTime = new Date().getTime();
    this.isStart = true;
    this.isStop = false;

    if (this.videoContext) this.videoContext.start();
  }

  stop() {
    this.duration=this.getDuration();
    this.isStop = true;
    this.isStart = false;

    if (this.videoContext) this.videoContext.stop();
  }

  async save() {
    if (this.videoContext && this.videoContext.recordedChunks.length > 0) {
      const filePath= await this.recordScreenservice.saveVideo(this.videoContext.recordedChunks);
      this.openSnackBar(`Successfully saved.`);
      return;
    };

    this.openSnackBar('Please record video first.');
  }

  delete() {
    this.duration=" " + 0;
    this.beginTime = 0;
    this.isStop = true;
    this.isStart = false;
    debugger;
    if (this.videoContext) this.videoContext.delete();
    this.openSnackBar('The video is delete.');
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

  openSnackBar(msg:string,label:string='') {
    this._snackBar.open(msg, label, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}

