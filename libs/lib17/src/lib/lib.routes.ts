import { Route } from '@angular/router';
import { Lib17Component } from './lib17/lib17.component';
import { lib1017Routes } from '@ng-bundler-benchmark/lib1017';

export const lib17Routes: Route[] = [
    { path: 'lib1017', children: lib1017Routes },
  { path: '', component: Lib17Component }
];
