import { Route } from '@angular/router';
import { Lib11Component } from './lib11/lib11.component';
import { lib1011Routes } from '@ng-bundler-benchmark/lib1011';

export const lib11Routes: Route[] = [
    { path: 'lib1011', children: lib1011Routes },
  { path: '', component: Lib11Component }
];
