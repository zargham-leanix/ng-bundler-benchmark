import { Route } from '@angular/router';
import { Lib27Component } from './lib27/lib27.component';
import { lib1027Routes } from '@ng-bundler-benchmark/lib1027';

export const lib27Routes: Route[] = [
    { path: 'lib1027', children: lib1027Routes },
  { path: '', component: Lib27Component }
];
