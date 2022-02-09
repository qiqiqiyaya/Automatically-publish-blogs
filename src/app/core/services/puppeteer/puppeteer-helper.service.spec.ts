/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PuppeteerHelperService } from './puppeteer-helper.service';

describe('Service: PuppeteerHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuppeteerHelperService]
    });
  });

  it('should ...', inject([PuppeteerHelperService], (service: PuppeteerHelperService) => {
    expect(service).toBeTruthy();
  }));
});
