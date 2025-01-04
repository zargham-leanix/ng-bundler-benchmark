import { Route } from '@angular/router';
import { Lib41Component } from './lib41/lib41.component';
import { lib1041Routes } from '@ng-bundler-benchmark/lib1041';

export const lib41Routes: Route[] = [
    { path: 'lib1041', children: lib1041Routes },
  { path: '', component: Lib41Component }
];
