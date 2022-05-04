/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Esp32CamVideoComponent } from './esp32-cam-video.component';

describe('Esp32CamVideoComponent', () => {
  let component: Esp32CamVideoComponent;
  let fixture: ComponentFixture<Esp32CamVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Esp32CamVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Esp32CamVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
