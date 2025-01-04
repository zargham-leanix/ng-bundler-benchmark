import { Route } from '@angular/router';
import { Lib8Component } from './lib8/lib8.component';
import { lib1008Routes } from '@ng-bundler-benchmark/lib1008';

export const lib8Routes: Route[] = [
    { path: 'lib1008', children: lib1008Routes },
  { path: '', component: Lib8Component }
];
