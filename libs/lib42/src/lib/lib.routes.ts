import { Route } from '@angular/router';
import { Lib42Component } from './lib42/lib42.component';
import { lib1042Routes } from '@ng-bundler-benchmark/lib1042';

export const lib42Routes: Route[] = [
    { path: 'lib1042', children: lib1042Routes },
  { path: '', component: Lib42Component }
];
