import { Route } from '@angular/router';
import { Lib80Component } from './lib80/lib80.component';
import { lib1080Routes } from '@ng-bundler-benchmark/lib1080';

export const lib80Routes: Route[] = [
    { path: 'lib1080', children: lib1080Routes },
  { path: '', component: Lib80Component }
];
