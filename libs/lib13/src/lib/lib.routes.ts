import { Route } from '@angular/router';
import { Lib13Component } from './lib13/lib13.component';
import { lib1013Routes } from '@ng-bundler-benchmark/lib1013';

export const lib13Routes: Route[] = [
    { path: 'lib1013', children: lib1013Routes },
  { path: '', component: Lib13Component }
];
