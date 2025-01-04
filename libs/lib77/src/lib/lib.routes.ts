import { Route } from '@angular/router';
import { Lib77Component } from './lib77/lib77.component';
import { lib1077Routes } from '@ng-bundler-benchmark/lib1077';

export const lib77Routes: Route[] = [
    { path: 'lib1077', children: lib1077Routes },
  { path: '', component: Lib77Component }
];
