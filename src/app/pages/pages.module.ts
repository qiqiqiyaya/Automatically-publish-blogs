import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { PageRoutes } from './pages.routing';
import { Esp32CamVideoComponent } from './esp32-cam-video/esp32-cam-video.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    PageRoutes
  ],
  declarations:[
    Esp32CamVideoComponent
  ]
})
export class PageModule { }
