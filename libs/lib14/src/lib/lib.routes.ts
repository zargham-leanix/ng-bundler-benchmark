import { Route } from '@angular/router';
import { Lib14Component } from './lib14/lib14.component';
import { lib1014Routes } from '@ng-bundler-benchmark/lib1014';

export const lib14Routes: Route[] = [
    { path: 'lib1014', children: lib1014Routes },
  { path: '', component: Lib14Component }
];
