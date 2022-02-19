import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemInfoComponent } from './system-info/system-info.component';
import { SystemRoutes } from './system.routing';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialUiFrameworkModule } from '../../core/material-ui-framework.module';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutes,
    NgxChartsModule,
    MaterialUiFrameworkModule
  ],
  declarations: [
    SystemInfoComponent
  ]
})
export class SystemModule { }
