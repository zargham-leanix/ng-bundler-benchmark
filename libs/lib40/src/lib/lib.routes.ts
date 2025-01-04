import { Route } from '@angular/router';
import { Lib40Component } from './lib40/lib40.component';
import { lib1040Routes } from '@ng-bundler-benchmark/lib1040';

export const lib40Routes: Route[] = [
    { path: 'lib1040', children: lib1040Routes },
  { path: '', component: Lib40Component }
];
