import { Route } from '@angular/router';
import { Lib15Component } from './lib15/lib15.component';
import { lib1015Routes } from '@ng-bundler-benchmark/lib1015';

export const lib15Routes: Route[] = [
    { path: 'lib1015', children: lib1015Routes },
  { path: '', component: Lib15Component }
];
