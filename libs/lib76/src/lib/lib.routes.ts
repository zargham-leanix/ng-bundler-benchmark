import { Route } from '@angular/router';
import { Lib76Component } from './lib76/lib76.component';
import { lib1076Routes } from '@ng-bundler-benchmark/lib1076';

export const lib76Routes: Route[] = [
    { path: 'lib1076', children: lib1076Routes },
  { path: '', component: Lib76Component }
];
