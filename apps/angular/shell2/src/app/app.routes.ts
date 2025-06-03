import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'rsremote3',
    loadChildren: () => import('rsremote3/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'rsremote2',
    loadChildren: () => import('rsremote2/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'rsremote1',
    loadChildren: () => import('rsremote1/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
