import { Route } from '@angular/router';
import { Lib18Component } from './lib18/lib18.component';
import { lib1018Routes } from '@ng-bundler-benchmark/lib1018';

export const lib18Routes: Route[] = [
    { path: 'lib1018', children: lib1018Routes },
  { path: '', component: Lib18Component }
];
