/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecordScreenService } from './record-screen.service';

describe('Service: Overview', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordScreenService]
    });
  });

  it('should ...', inject([RecordScreenService], (service: RecordScreenService) => {
    expect(service).toBeTruthy();
  }));
});
