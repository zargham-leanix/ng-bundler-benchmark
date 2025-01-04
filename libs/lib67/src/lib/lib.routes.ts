import { Route } from '@angular/router';
import { Lib67Component } from './lib67/lib67.component';
import { lib1067Routes } from '@ng-bundler-benchmark/lib1067';

export const lib67Routes: Route[] = [
    { path: 'lib1067', children: lib1067Routes },
  { path: '', component: Lib67Component }
];
