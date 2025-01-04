import { Route } from '@angular/router';
import { Lib75Component } from './lib75/lib75.component';
import { lib1075Routes } from '@ng-bundler-benchmark/lib1075';

export const lib75Routes: Route[] = [
    { path: 'lib1075', children: lib1075Routes },
  { path: '', component: Lib75Component }
];
