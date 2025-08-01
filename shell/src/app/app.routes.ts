import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'app2',
    loadChildren: () => import('app2/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'app1',
    loadChildren: () => import('app1/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
