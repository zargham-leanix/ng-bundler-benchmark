import { Route } from '@angular/router';
import { Lib56Component } from './lib56/lib56.component';
import { lib1056Routes } from '@ng-bundler-benchmark/lib1056';

export const lib56Routes: Route[] = [
    { path: 'lib1056', children: lib1056Routes },
  { path: '', component: Lib56Component }
];
