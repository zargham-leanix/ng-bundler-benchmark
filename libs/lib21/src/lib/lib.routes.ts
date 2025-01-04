import { Route } from '@angular/router';
import { Lib21Component } from './lib21/lib21.component';
import { lib1021Routes } from '@ng-bundler-benchmark/lib1021';

export const lib21Routes: Route[] = [
    { path: 'lib1021', children: lib1021Routes },
  { path: '', component: Lib21Component }
];
