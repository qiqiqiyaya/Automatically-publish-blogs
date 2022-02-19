import { Routes, RouterModule } from '@angular/router';
import { SystemInfoComponent } from './system-info/system-info.component';

const routes: Routes = [
  { path: '', redirectTo: "cup-info" },
  { path: 'cup-info', component: SystemInfoComponent },
];

export const SystemRoutes = RouterModule.forChild(routes);
