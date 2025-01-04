import { Route } from '@angular/router';
import { Lib7Component } from './lib7/lib7.component';
import { lib1007Routes } from '@ng-bundler-benchmark/lib1007';

export const lib7Routes: Route[] = [
    { path: 'lib1007', children: lib1007Routes },
  { path: '', component: Lib7Component }
];
