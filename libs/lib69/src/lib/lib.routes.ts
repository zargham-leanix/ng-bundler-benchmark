import { Route } from '@angular/router';
import { Lib69Component } from './lib69/lib69.component';
import { lib1069Routes } from '@ng-bundler-benchmark/lib1069';

export const lib69Routes: Route[] = [
    { path: 'lib1069', children: lib1069Routes },
  { path: '', component: Lib69Component }
];
