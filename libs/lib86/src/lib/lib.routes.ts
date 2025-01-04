import { Route } from '@angular/router';
import { Lib86Component } from './lib86/lib86.component';
import { lib1086Routes } from '@ng-bundler-benchmark/lib1086';

export const lib86Routes: Route[] = [
    { path: 'lib1086', children: lib1086Routes },
  { path: '', component: Lib86Component }
];
