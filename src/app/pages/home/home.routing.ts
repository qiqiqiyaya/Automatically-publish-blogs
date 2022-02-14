import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../../layout/default-layout/default-layout.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

export const HomeRoutes = RouterModule.forChild(routes);
