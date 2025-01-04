import { Route } from '@angular/router';
import { Lib58Component } from './lib58/lib58.component';
import { lib1058Routes } from '@ng-bundler-benchmark/lib1058';

export const lib58Routes: Route[] = [
    { path: 'lib1058', children: lib1058Routes },
  { path: '', component: Lib58Component }
];
