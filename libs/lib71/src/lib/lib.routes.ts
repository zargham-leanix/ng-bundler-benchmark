import { Route } from '@angular/router';
import { Lib71Component } from './lib71/lib71.component';
import { lib1071Routes } from '@ng-bundler-benchmark/lib1071';

export const lib71Routes: Route[] = [
    { path: 'lib1071', children: lib1071Routes },
  { path: '', component: Lib71Component }
];
