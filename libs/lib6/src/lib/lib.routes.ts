import { Route } from '@angular/router';
import { Lib6Component } from './lib6/lib6.component';
import { lib1006Routes } from '@ng-bundler-benchmark/lib1006';

export const lib6Routes: Route[] = [
    { path: 'lib1006', children: lib1006Routes },
  { path: '', component: Lib6Component }
];
