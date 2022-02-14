import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { MaterialUiFrameworkModule } from '../core/material-ui-framework.module';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialUiFrameworkModule,
    RouterModule
  ],
  declarations: [
    DefaultLayoutComponent,
    SidenavMenuComponent,
    HeaderComponent,
  ],
  exports:[
    DefaultLayoutComponent,
  ]
})
export class LayoutModule { }
