import { Route } from '@angular/router';
import { Lib79Component } from './lib79/lib79.component';
import { lib1079Routes } from '@ng-bundler-benchmark/lib1079';

export const lib79Routes: Route[] = [
    { path: 'lib1079', children: lib1079Routes },
  { path: '', component: Lib79Component }
];
