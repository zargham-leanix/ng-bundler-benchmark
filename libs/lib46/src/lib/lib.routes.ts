import { Route } from '@angular/router';
import { Lib46Component } from './lib46/lib46.component';
import { lib1046Routes } from '@ng-bundler-benchmark/lib1046';

export const lib46Routes: Route[] = [
    { path: 'lib1046', children: lib1046Routes },
  { path: '', component: Lib46Component }
];
