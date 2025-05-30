import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'myremote3',
    loadChildren: () => import('myremote3/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'myremote2',
    loadChildren: () => import('myremote2/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'myremote1',
    loadChildren: () => import('myremote1/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
