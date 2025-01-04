import { Route } from '@angular/router';
import { Lib81Component } from './lib81/lib81.component';
import { lib1081Routes } from '@ng-bundler-benchmark/lib1081';

export const lib81Routes: Route[] = [
    { path: 'lib1081', children: lib1081Routes },
  { path: '', component: Lib81Component }
];
