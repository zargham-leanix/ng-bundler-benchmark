import { Route } from '@angular/router';
import { Lib38Component } from './lib38/lib38.component';
import { lib1038Routes } from '@ng-bundler-benchmark/lib1038';

export const lib38Routes: Route[] = [
    { path: 'lib1038', children: lib1038Routes },
  { path: '', component: Lib38Component }
];
