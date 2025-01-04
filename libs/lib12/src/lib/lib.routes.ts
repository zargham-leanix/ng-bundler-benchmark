import { Route } from '@angular/router';
import { Lib12Component } from './lib12/lib12.component';
import { lib1012Routes } from '@ng-bundler-benchmark/lib1012';

export const lib12Routes: Route[] = [
    { path: 'lib1012', children: lib1012Routes },
  { path: '', component: Lib12Component }
];
