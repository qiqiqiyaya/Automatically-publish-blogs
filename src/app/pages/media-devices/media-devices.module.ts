import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaDevicesComponent } from './media-devices.component';
import { MediaDevicesRoutes } from './media-devices.routing';

@NgModule({
  imports: [
    CommonModule,
    MediaDevicesRoutes
  ],
  declarations: [MediaDevicesComponent]
})
export class MediaDevicesModule { }
