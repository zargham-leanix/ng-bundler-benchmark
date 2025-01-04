import { Route } from '@angular/router';
import { Lib64Component } from './lib64/lib64.component';
import { lib1064Routes } from '@ng-bundler-benchmark/lib1064';

export const lib64Routes: Route[] = [
    { path: 'lib1064', children: lib1064Routes },
  { path: '', component: Lib64Component }
];
