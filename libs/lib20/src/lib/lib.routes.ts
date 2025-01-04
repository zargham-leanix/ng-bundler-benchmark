import { Route } from '@angular/router';
import { Lib20Component } from './lib20/lib20.component';
import { lib1020Routes } from '@ng-bundler-benchmark/lib1020';

export const lib20Routes: Route[] = [
    { path: 'lib1020', children: lib1020Routes },
  { path: '', component: Lib20Component }
];
