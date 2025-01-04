import { Route } from '@angular/router';
import { Lib89Component } from './lib89/lib89.component';
import { lib1089Routes } from '@ng-bundler-benchmark/lib1089';

export const lib89Routes: Route[] = [
    { path: 'lib1089', children: lib1089Routes },
  { path: '', component: Lib89Component }
];
