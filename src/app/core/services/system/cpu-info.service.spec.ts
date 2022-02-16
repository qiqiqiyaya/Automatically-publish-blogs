/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CpuInfoService } from './cpu-info.service';

describe('Service: CpuInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CpuInfoService]
    });
  });

  it('should ...', inject([CpuInfoService], (service: CpuInfoService) => {
    expect(service).toBeTruthy();
  }));
});
