import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent, children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(x => x.HomeModule) },
      { path: 'test', loadChildren: () => import('./test1/test1.module').then(x => x.Test1Module) },
      { path: 'system', loadChildren: () => import('./system/system.module').then(x => x.SystemModule) },
      { path: 'media-devices', loadChildren: () => import('./media-devices/media-devices.module').then(x => x.MediaDevicesModule) },
    ]
  },
];

export const PageRoutes = RouterModule.forChild(routes);
