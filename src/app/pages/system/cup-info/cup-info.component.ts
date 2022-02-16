import { Component, OnInit } from '@angular/core';
import { CpuInfoService } from '../../../core/services/system/cpu-info.service';

@Component({
  selector: 'app-cup-info',
  templateUrl: './cup-info.component.html',
  styleUrls: ['./cup-info.component.css'],
  providers:[CpuInfoService]
})
export class CupInfoComponent implements OnInit {

  constructor(private cpu:CpuInfoService) { }

  ngOnInit() {
  }

}
