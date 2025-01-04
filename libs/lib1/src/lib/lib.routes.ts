import { Route } from '@angular/router';
import { Lib1Component } from './lib1/lib1.component';
import { lib1001Routes } from '@ng-bundler-benchmark/lib1001';

export const lib1Routes: Route[] = [
    { path: 'lib1001', children: lib1001Routes },
  { path: '', component: Lib1Component }
];
