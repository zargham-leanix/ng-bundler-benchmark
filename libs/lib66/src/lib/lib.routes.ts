import { Route } from '@angular/router';
import { Lib66Component } from './lib66/lib66.component';
import { lib1066Routes } from '@ng-bundler-benchmark/lib1066';

export const lib66Routes: Route[] = [
    { path: 'lib1066', children: lib1066Routes },
  { path: '', component: Lib66Component }
];
