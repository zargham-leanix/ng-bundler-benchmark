import { Route } from '@angular/router';
import { Lib25Component } from './lib25/lib25.component';
import { lib1025Routes } from '@ng-bundler-benchmark/lib1025';

export const lib25Routes: Route[] = [
    { path: 'lib1025', children: lib1025Routes },
  { path: '', component: Lib25Component }
];
