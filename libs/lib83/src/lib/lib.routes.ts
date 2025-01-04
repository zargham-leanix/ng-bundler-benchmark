import { Route } from '@angular/router';
import { Lib83Component } from './lib83/lib83.component';
import { lib1083Routes } from '@ng-bundler-benchmark/lib1083';

export const lib83Routes: Route[] = [
    { path: 'lib1083', children: lib1083Routes },
  { path: '', component: Lib83Component }
];
