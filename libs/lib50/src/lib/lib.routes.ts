import { Route } from '@angular/router';
import { Lib50Component } from './lib50/lib50.component';
import { lib1050Routes } from '@ng-bundler-benchmark/lib1050';

export const lib50Routes: Route[] = [
    { path: 'lib1050', children: lib1050Routes },
  { path: '', component: Lib50Component }
];
