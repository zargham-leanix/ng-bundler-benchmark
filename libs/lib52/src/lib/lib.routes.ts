import { Route } from '@angular/router';
import { Lib52Component } from './lib52/lib52.component';
import { lib1052Routes } from '@ng-bundler-benchmark/lib1052';

export const lib52Routes: Route[] = [
    { path: 'lib1052', children: lib1052Routes },
  { path: '', component: Lib52Component }
];
