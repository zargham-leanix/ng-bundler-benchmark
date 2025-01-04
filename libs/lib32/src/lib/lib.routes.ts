import { Route } from '@angular/router';
import { Lib32Component } from './lib32/lib32.component';
import { lib1032Routes } from '@ng-bundler-benchmark/lib1032';

export const lib32Routes: Route[] = [
    { path: 'lib1032', children: lib1032Routes },
  { path: '', component: Lib32Component }
];
