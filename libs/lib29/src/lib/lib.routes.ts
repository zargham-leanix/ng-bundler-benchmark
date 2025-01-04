import { Route } from '@angular/router';
import { Lib29Component } from './lib29/lib29.component';
import { lib1029Routes } from '@ng-bundler-benchmark/lib1029';

export const lib29Routes: Route[] = [
    { path: 'lib1029', children: lib1029Routes },
  { path: '', component: Lib29Component }
];
