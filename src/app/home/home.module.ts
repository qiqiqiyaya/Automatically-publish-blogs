import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialUiFrameworkModule } from '../core/material-ui-framework.module';
import { HomeRoutes } from './home.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    MaterialUiFrameworkModule,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
