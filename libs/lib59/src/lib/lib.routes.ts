import { Route } from '@angular/router';
import { Lib59Component } from './lib59/lib59.component';
import { lib1059Routes } from '@ng-bundler-benchmark/lib1059';

export const lib59Routes: Route[] = [
    { path: 'lib1059', children: lib1059Routes },
  { path: '', component: Lib59Component }
];
