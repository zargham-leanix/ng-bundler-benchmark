import { Route } from '@angular/router';
import { Lib74Component } from './lib74/lib74.component';
import { lib1074Routes } from '@ng-bundler-benchmark/lib1074';

export const lib74Routes: Route[] = [
    { path: 'lib1074', children: lib1074Routes },
  { path: '', component: Lib74Component }
];
