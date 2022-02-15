import { Component, OnInit } from '@angular/core';
import { Theme } from '../models/theme';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  siderStyle: {} = {};

  constructor(private theme: ThemeService) { }

  ngOnInit() {
    this.theme.theme.subscribe(res => {
      this.siderStyle = res.getSiderNavStyle()
    })
  }

}
