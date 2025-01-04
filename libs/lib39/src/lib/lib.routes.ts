import { Route } from '@angular/router';
import { Lib39Component } from './lib39/lib39.component';
import { lib1039Routes } from '@ng-bundler-benchmark/lib1039';

export const lib39Routes: Route[] = [
    { path: 'lib1039', children: lib1039Routes },
  { path: '', component: Lib39Component }
];
