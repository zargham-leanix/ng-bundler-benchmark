import { Route } from '@angular/router';
import { Lib31Component } from './lib31/lib31.component';
import { lib1031Routes } from '@ng-bundler-benchmark/lib1031';

export const lib31Routes: Route[] = [
    { path: 'lib1031', children: lib1031Routes },
  { path: '', component: Lib31Component }
];
