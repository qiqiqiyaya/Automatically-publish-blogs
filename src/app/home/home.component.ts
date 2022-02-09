import { Component, OnInit } from '@angular/core';
import { PuppeteerHelperService } from '../core/services/puppeteer/puppeteer-helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private puppeteer:PuppeteerHelperService) { }

  async ngOnInit() {
  }
  
}