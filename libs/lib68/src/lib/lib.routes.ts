import { Route } from '@angular/router';
import { Lib68Component } from './lib68/lib68.component';
import { lib1068Routes } from '@ng-bundler-benchmark/lib1068';

export const lib68Routes: Route[] = [
    { path: 'lib1068', children: lib1068Routes },
  { path: '', component: Lib68Component }
];
