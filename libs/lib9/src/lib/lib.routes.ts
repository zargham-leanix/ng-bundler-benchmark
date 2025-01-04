import { Route } from '@angular/router';
import { Lib9Component } from './lib9/lib9.component';
import { lib1009Routes } from '@ng-bundler-benchmark/lib1009';

export const lib9Routes: Route[] = [
    { path: 'lib1009', children: lib1009Routes },
  { path: '', component: Lib9Component }
];
