import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1.component';
import { Test1Routes } from './test1.routing';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    Test1Routes,
    LayoutModule
  ],
  declarations: [Test1Component]
})
export class Test1Module { }
