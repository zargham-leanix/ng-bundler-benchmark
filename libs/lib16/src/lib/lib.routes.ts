import { Route } from '@angular/router';
import { Lib16Component } from './lib16/lib16.component';
import { lib1016Routes } from '@ng-bundler-benchmark/lib1016';

export const lib16Routes: Route[] = [
    { path: 'lib1016', children: lib1016Routes },
  { path: '', component: Lib16Component }
];
