import { Route } from '@angular/router';
import { Lib65Component } from './lib65/lib65.component';
import { lib1065Routes } from '@ng-bundler-benchmark/lib1065';

export const lib65Routes: Route[] = [
    { path: 'lib1065', children: lib1065Routes },
  { path: '', component: Lib65Component }
];
