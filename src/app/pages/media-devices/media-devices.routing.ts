import { Routes, RouterModule } from '@angular/router';
import { CaptureScreenComponent } from './capture-screen/capture-screen.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'capture-screen', component: CaptureScreenComponent },
];

export const MediaDevicesRoutes = RouterModule.forChild(routes);
