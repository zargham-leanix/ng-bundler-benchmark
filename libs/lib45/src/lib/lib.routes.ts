import { Route } from '@angular/router';
import { Lib45Component } from './lib45/lib45.component';
import { lib1045Routes } from '@ng-bundler-benchmark/lib1045';

export const lib45Routes: Route[] = [
    { path: 'lib1045', children: lib1045Routes },
  { path: '', component: Lib45Component }
];
