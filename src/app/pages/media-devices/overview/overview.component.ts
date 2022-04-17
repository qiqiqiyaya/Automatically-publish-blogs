import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DesktopCapturerSource } from 'electron';
import { MaterIalSelectItem } from '../../../models/materIal-select';
import { OverviewService } from '../../../core/services/media-devices/overview.service';
import { SourceConfiguration } from '../../../core/services/media-devices/source-configuration';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [OverviewService]
})
export class OverviewComponent implements OnInit {

  @ViewChild("camera") camera: ElementRef;
  selectedValue: string = "";
  selectData: MaterIalSelectItem<DesktopCapturerSource>[] = [];
  constructor(private overview: OverviewService) { }

  ngOnInit() {
  }

  getConfig(): SourceConfiguration {
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
