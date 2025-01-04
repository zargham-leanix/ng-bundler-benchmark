import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {path: 'libs', loadChildren: () => import('@ng-bundler-benchmark/libentry').then(m => m.libEntryRoutes)}
];
