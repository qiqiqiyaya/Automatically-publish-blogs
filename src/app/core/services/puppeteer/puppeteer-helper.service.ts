import { Injectable } from '@angular/core';
import { Browser } from 'puppeteer';
import { launchConfiguration } from './puppeteer-configuration';

@Injectable({
  providedIn: 'root'
})
export class PuppeteerHelperService {

  constructor() { }

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  async test() {
    debugger;
    if (this.isElectron) {
      const puppeteer = window.require('puppeteer');
      const browser = await puppeteer.launch(launchConfiguration) as Browser;

      // const browser = new Puppeteer({isPuppeteerCore:false});
      const page = await browser.newPage();
      await page.goto('https://www.google.com');

    }
  }
}
