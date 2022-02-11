import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { MaterialUiFrameworkModule } from '../core/material-ui-framework.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialUiFrameworkModule,
    RouterModule
  ],
  declarations: [
    SidenavMenuComponent
  ],
  exports:[
    SidenavMenuComponent
  ]
})
export class LayoutModule { }
