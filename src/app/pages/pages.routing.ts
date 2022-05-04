import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';
import { Esp32CamVideoComponent } from './esp32-cam-video/esp32-cam-video.component';

const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent, children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(x => x.HomeModule) },
      { path: 'test', loadChildren: () => import('./test1/test1.module').then(x => x.Test1Module) },
      { path: 'system', loadChildren: () => import('./system/system.module').then(x => x.SystemModule) },
      { path: 'media-devices', loadChildren: () => import('./media-devices/media-devices.module').then(x => x.MediaDevicesModule) },
      { path: 'esp32-cam', component: Esp32CamVideoComponent },
    ]
  },
];

export const PageRoutes = RouterModule.forChild(routes);
