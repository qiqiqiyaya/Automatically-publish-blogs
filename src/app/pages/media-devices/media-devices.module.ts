import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaDevicesComponent } from './media-devices.component';
import { MediaDevicesRoutes } from './media-devices.routing';
import { MaterialUiFrameworkModule } from '../../core/material-ui-framework.module';
import { OverviewComponent } from './overview/overview.component';
import { CapturerScreenComponent } from './capturer-screen/capturer-screen.component';

@NgModule({
  imports: [
    CommonModule,
    MediaDevicesRoutes,
    MaterialUiFrameworkModule
  ],
  declarations: [
    MediaDevicesComponent,
    OverviewComponent,
    CapturerScreenComponent
  ]
})
export class MediaDevicesModule { }
