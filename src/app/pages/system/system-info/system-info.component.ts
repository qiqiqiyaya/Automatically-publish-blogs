import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OsInfoService } from '../../../core/services/system/os-info.service';
import { ThemeService } from '../../../layout/services/theme.service';

@Component({
  selector: 'app-system-info',
  templateUrl: './system-info.component.html',
  styleUrls: ['./system-info.component.css'],
  providers: [OsInfoService]
})
export class SystemInfoComponent implements OnInit, OnDestroy {

  colorSchem = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cpuData: LineChartDataFormat[] = [];
  unCpuData: Subscription;
  diskData: LineChartDataFormat[] = [];
  unDiskData: Subscription;
  memData: LineChartDataFormat[] = [];
  unMemData: Subscription;

  dividerColorStyle = {
    "border-top-color": "",
    margin: "15px 0"
  };
  unColorStyle: Subscription;

  arch: string;
  homeDir: string;
  platform: string;
  tmpDir: string;
  hostname: string;
  type: string;
  constructor(public osInfo: OsInfoService,
    private theme: ThemeService) {
    this.arch = this.osInfo.arch;
    this.homeDir = this.osInfo.homeDir;
    this.platform = this.osInfo.platform;
    this.hostname = this.osInfo.hostname;
    this.tmpDir = this.osInfo.tmpDir;
    this.type = this.osInfo.type;
  }

  ngOnDestroy(): void {
    this.unColorStyle.unsubscribe();
    this.unCpuData.unsubscribe();
    this.unDiskData.unsubscribe();
    this.unMemData.unsubscribe();
  }

  ngOnInit() {
    this.unColorStyle = this.theme.theme.subscribe(res => {
      this.dividerColorStyle['border-top-color'] = res.primaryColor;
    });
    this.osInfo.start();
    this.cpuData.push({ name: 'Cpu Usage', series: [{ "name": "0", "value": 0 }] });
    this.diskData.push({ name: 'Disk Usage', series: [{ "name": "0", "value": 0 }] });
    this.memData.push({ name: 'Memory Usage', series: [{ "name": "0", "value": 0 }] });
    this.getChartData();
  }

  getChartData() {
    this.unCpuData = this.osInfo.cpu.subscribe(res => {
      this.maxLengthHandle(this.cpuData[0].series);
      const x = (new Date()).toTimeString().split(' ')[0];
      this.cpuData[0].series.push({
        "name": x,
        "value": res
      });
      this.cpuData = [...this.cpuData];
    });

    this.unDiskData = this.osInfo.disk.subscribe(res => {
      this.maxLengthHandle(this.diskData[0].series);
      const x = (new Date()).toTimeString().split(' ')[0];
      this.diskData[0].series.push({
        "name": x,
        "value": res
      });
      this.diskData = [...this.diskData];
    });

    this.unMemData = this.osInfo.mem.subscribe(res => {
      this.maxLengthHandle(this.memData[0].series);
      const x = (new Date()).toTimeString().split(' ')[0];
      this.memData[0].series.push({
        "name": x,
        "value": res
      });
      this.memData = [...this.memData];
    });
  }

  maxLengthHandle(array: any[]) {
    if (array.length === 10) {
      array.shift();
    }
  }
}
export interface LineChartDataFormat {
  name: string;
  series: { name?: string, value: number }[]
}
