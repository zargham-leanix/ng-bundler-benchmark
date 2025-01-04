import { Route } from '@angular/router';
import { Lib87Component } from './lib87/lib87.component';
import { lib1087Routes } from '@ng-bundler-benchmark/lib1087';

export const lib87Routes: Route[] = [
    { path: 'lib1087', children: lib1087Routes },
  { path: '', component: Lib87Component }
];
