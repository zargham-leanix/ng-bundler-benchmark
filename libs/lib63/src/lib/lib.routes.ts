import { Route } from '@angular/router';
import { Lib63Component } from './lib63/lib63.component';
import { lib1063Routes } from '@ng-bundler-benchmark/lib1063';

export const lib63Routes: Route[] = [
    { path: 'lib1063', children: lib1063Routes },
  { path: '', component: Lib63Component }
];
