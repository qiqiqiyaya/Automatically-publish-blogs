import { Routes, RouterModule } from '@angular/router';
import { CapturerScreenComponent } from './capturer-screen/capturer-screen.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'capture-screen', component: CapturerScreenComponent },
];

export const MediaDevicesRoutes = RouterModule.forChild(routes);
