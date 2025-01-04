import { Route } from '@angular/router';
import { Lib60Component } from './lib60/lib60.component';
import { lib1060Routes } from '@ng-bundler-benchmark/lib1060';

export const lib60Routes: Route[] = [
    { path: 'lib1060', children: lib1060Routes },
  { path: '', component: Lib60Component }
];
