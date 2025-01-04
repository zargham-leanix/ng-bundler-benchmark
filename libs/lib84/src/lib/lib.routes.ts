import { Route } from '@angular/router';
import { Lib84Component } from './lib84/lib84.component';
import { lib1084Routes } from '@ng-bundler-benchmark/lib1084';

export const lib84Routes: Route[] = [
    { path: 'lib1084', children: lib1084Routes },
  { path: '', component: Lib84Component }
];
