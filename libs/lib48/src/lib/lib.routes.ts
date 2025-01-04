import { Route } from '@angular/router';
import { Lib48Component } from './lib48/lib48.component';
import { lib1048Routes } from '@ng-bundler-benchmark/lib1048';

export const lib48Routes: Route[] = [
    { path: 'lib1048', children: lib1048Routes },
  { path: '', component: Lib48Component }
];
