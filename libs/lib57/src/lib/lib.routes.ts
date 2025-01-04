import { Route } from '@angular/router';
import { Lib57Component } from './lib57/lib57.component';
import { lib1057Routes } from '@ng-bundler-benchmark/lib1057';

export const lib57Routes: Route[] = [
    { path: 'lib1057', children: lib1057Routes },
  { path: '', component: Lib57Component }
];
