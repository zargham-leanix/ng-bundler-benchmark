import { Route } from '@angular/router';
import { Lib47Component } from './lib47/lib47.component';
import { lib1047Routes } from '@ng-bundler-benchmark/lib1047';

export const lib47Routes: Route[] = [
    { path: 'lib1047', children: lib1047Routes },
  { path: '', component: Lib47Component }
];
