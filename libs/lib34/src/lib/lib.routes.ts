import { Route } from '@angular/router';
import { Lib34Component } from './lib34/lib34.component';
import { lib1034Routes } from '@ng-bundler-benchmark/lib1034';

export const lib34Routes: Route[] = [
    { path: 'lib1034', children: lib1034Routes },
  { path: '', component: Lib34Component }
];
