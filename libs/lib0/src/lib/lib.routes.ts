import { Route } from '@angular/router';
import { Lib0Component } from './lib0/lib0.component';
import { lib1000Routes } from '@ng-bundler-benchmark/lib1000';

export const lib0Routes: Route[] = [
    { path: 'lib1000', children: lib1000Routes },
  { path: '', component: Lib0Component }
];
