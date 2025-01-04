import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {path: 'libs1', loadChildren: () => import('@ng-bundler-benchmark/libentry').then(m => m.libEntryRoutes)},
  {path: 'libs2', loadChildren: () => import('@ng-bundler-benchmark/libentry2').then(m => m.libEntry2Routes)},
  {path: 'libs3', loadChildren: () => import('@ng-bundler-benchmark/libentry3').then(m => m.libEntry3Routes)}
];
