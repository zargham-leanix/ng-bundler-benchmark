import { Route } from '@angular/router';
import { Lib30Component } from './lib30/lib30.component';
import { lib1030Routes } from '@ng-bundler-benchmark/lib1030';

export const lib30Routes: Route[] = [
    { path: 'lib1030', children: lib1030Routes },
  { path: '', component: Lib30Component }
];
