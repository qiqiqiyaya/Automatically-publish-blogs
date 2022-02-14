import { Routes, RouterModule } from '@angular/router';
import * as path from 'path/posix';
import { DefaultLayoutComponent } from '../../layout/default-layout/default-layout.component';
import { Test1Component } from './test1.component';

const routes: Routes = [
  { path: '', component: Test1Component }
];

export const Test1Routes = RouterModule.forChild(routes);
