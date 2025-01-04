import { Route } from '@angular/router';
import { Lib61Component } from './lib61/lib61.component';
import { lib1061Routes } from '@ng-bundler-benchmark/lib1061';

export const lib61Routes: Route[] = [
    { path: 'lib1061', children: lib1061Routes },
  { path: '', component: Lib61Component }
];
