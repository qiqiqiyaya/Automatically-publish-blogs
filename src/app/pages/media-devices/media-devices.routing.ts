import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'overview', component: OverviewComponent },
];

export const MediaDevicesRoutes = RouterModule.forChild(routes);
