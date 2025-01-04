import { Route } from '@angular/router';
import { Lib2Component } from './lib2/lib2.component';
import { lib1002Routes } from '@ng-bundler-benchmark/lib1002';

export const lib2Routes: Route[] = [
    { path: 'lib1002', children: lib1002Routes },
  { path: '', component: Lib2Component }
];
