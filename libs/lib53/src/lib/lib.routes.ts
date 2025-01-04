import { Route } from '@angular/router';
import { Lib53Component } from './lib53/lib53.component';
import { lib1053Routes } from '@ng-bundler-benchmark/lib1053';

export const lib53Routes: Route[] = [
    { path: 'lib1053', children: lib1053Routes },
  { path: '', component: Lib53Component }
];
