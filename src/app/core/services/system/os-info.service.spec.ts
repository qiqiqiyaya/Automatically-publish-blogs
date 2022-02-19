/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OsInfoService } from './os-info.service';

describe('Service: OsInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OsInfoService]
    });
  });

  it('should ...', inject([OsInfoService], (service: OsInfoService) => {
    expect(service).toBeTruthy();
  }));
});
