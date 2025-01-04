import { Route } from '@angular/router';
import { Lib82Component } from './lib82/lib82.component';
import { lib1082Routes } from '@ng-bundler-benchmark/lib1082';

export const lib82Routes: Route[] = [
    { path: 'lib1082', children: lib1082Routes },
  { path: '', component: Lib82Component }
];
