import { Route } from '@angular/router';
import { Lib70Component } from './lib70/lib70.component';
import { lib1070Routes } from '@ng-bundler-benchmark/lib1070';

export const lib70Routes: Route[] = [
    { path: 'lib1070', children: lib1070Routes },
  { path: '', component: Lib70Component }
];
