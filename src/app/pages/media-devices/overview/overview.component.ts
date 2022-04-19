import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DesktopCapturerSource } from 'electron';
import { MaterIalSelectItem } from '../../../models/materIal-select';
import { RecordScreenService } from '../../../core/services/media-devices/record-screen.service';
import { ScreenSource } from '../../../core/services/media-devices/screen-source';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [RecordScreenService]
})
export class OverviewComponent implements OnInit {

  @ViewChild("camera") camera: ElementRef;
  selectedValue: string = "";
  selectData: MaterIalSelectItem<DesktopCapturerSource>[] = [];
  constructor(private overview: RecordScreenService) { }

  ngOnInit() {
  }

  getConfig(): ScreenSource {
    const source = this.selectData.find(x => x.value === this.selectedValue).source;
    return {
      source: source,
      videoElement: this.camera
    }
  }

  ngAfterViewInit() {
    this.overview.CapturerSource.subscribe(res => this.selectData = res);
  }

  changeSource() {
    if (this.selectedValue) {
      this.overview.changeSource(this.getConfig());
    } else {
      this.camera.nativeElement.srcObject = null;
    }
  }
}
