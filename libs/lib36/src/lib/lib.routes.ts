import { Route } from '@angular/router';
import { Lib36Component } from './lib36/lib36.component';
import { lib1036Routes } from '@ng-bundler-benchmark/lib1036';

export const lib36Routes: Route[] = [
    { path: 'lib1036', children: lib1036Routes },
  { path: '', component: Lib36Component }
];
