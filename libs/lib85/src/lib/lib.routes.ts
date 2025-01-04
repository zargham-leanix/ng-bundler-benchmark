import { Route } from '@angular/router';
import { Lib85Component } from './lib85/lib85.component';
import { lib1085Routes } from '@ng-bundler-benchmark/lib1085';

export const lib85Routes: Route[] = [
    { path: 'lib1085', children: lib1085Routes },
  { path: '', component: Lib85Component }
];
