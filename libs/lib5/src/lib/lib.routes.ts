import { Route } from '@angular/router';
import { Lib5Component } from './lib5/lib5.component';
import { lib1005Routes } from '@ng-bundler-benchmark/lib1005';

export const lib5Routes: Route[] = [
    { path: 'lib1005', children: lib1005Routes },
  { path: '', component: Lib5Component }
];
