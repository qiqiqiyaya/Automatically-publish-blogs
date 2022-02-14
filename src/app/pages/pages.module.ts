import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { PageRoutes } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    PageRoutes
  ],
})
export class PageModule { }
