import { Route } from '@angular/router';
import { Lib3Component } from './lib3/lib3.component';
import { lib1003Routes } from '@ng-bundler-benchmark/lib1003';

export const lib3Routes: Route[] = [
    { path: 'lib1003', children: lib1003Routes },
  { path: '', component: Lib3Component }
];
