import { Route } from '@angular/router';
import { Lib88Component } from './lib88/lib88.component';
import { lib1088Routes } from '@ng-bundler-benchmark/lib1088';

export const lib88Routes: Route[] = [
    { path: 'lib1088', children: lib1088Routes },
  { path: '', component: Lib88Component }
];
