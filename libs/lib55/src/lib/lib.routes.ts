import { Route } from '@angular/router';
import { Lib55Component } from './lib55/lib55.component';
import { lib1055Routes } from '@ng-bundler-benchmark/lib1055';

export const lib55Routes: Route[] = [
    { path: 'lib1055', children: lib1055Routes },
  { path: '', component: Lib55Component }
];
