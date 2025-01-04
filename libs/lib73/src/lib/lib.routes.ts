import { Route } from '@angular/router';
import { Lib73Component } from './lib73/lib73.component';
import { lib1073Routes } from '@ng-bundler-benchmark/lib1073';

export const lib73Routes: Route[] = [
    { path: 'lib1073', children: lib1073Routes },
  { path: '', component: Lib73Component }
];
