import { Route } from '@angular/router';
import { Lib406Component } from './lib406/lib406.component';
import { lib1406Routes } from '@ng-bundler-benchmark/lib1406';

export const lib406Routes: Route[] = [
    { path: 'lib1406', children: lib1406Routes },
  { path: '', component: Lib406Component }
];
