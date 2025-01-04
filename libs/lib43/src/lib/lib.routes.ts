import { Route } from '@angular/router';
import { Lib43Component } from './lib43/lib43.component';
import { lib1043Routes } from '@ng-bundler-benchmark/lib1043';

export const lib43Routes: Route[] = [
    { path: 'lib1043', children: lib1043Routes },
  { path: '', component: Lib43Component }
];
