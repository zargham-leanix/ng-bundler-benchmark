import { Route } from '@angular/router';
import { Lib33Component } from './lib33/lib33.component';
import { lib1033Routes } from '@ng-bundler-benchmark/lib1033';

export const lib33Routes: Route[] = [
    { path: 'lib1033', children: lib1033Routes },
  { path: '', component: Lib33Component }
];
