import { Routes, RouterModule } from '@angular/router';
import { CupInfoComponent } from './cup-info/cup-info.component';

const routes: Routes = [
  { path: '', redirectTo: "cup-info" },
  { path: 'cup-info', component: CupInfoComponent },
];

export const SystemRoutes = RouterModule.forChild(routes);
