import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CupInfoComponent } from './cup-info/cup-info.component';
import { SystemRoutes } from './system.routing';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutes
  ],
  declarations: [
    CupInfoComponent
  ]
})
export class SystemModule { }
