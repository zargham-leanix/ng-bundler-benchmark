import { Route } from '@angular/router';
import { Lib78Component } from './lib78/lib78.component';
import { lib1078Routes } from '@ng-bundler-benchmark/lib1078';

export const lib78Routes: Route[] = [
    { path: 'lib1078', children: lib1078Routes },
  { path: '', component: Lib78Component }
];
