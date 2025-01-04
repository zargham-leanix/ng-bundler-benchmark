import { Route } from '@angular/router';
import { Lib10Component } from './lib10/lib10.component';
import { lib1010Routes } from '@ng-bundler-benchmark/lib1010';

export const lib10Routes: Route[] = [
    { path: 'lib1010', children: lib1010Routes },
  { path: '', component: Lib10Component }
];
