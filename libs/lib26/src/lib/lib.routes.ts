import { Route } from '@angular/router';
import { Lib26Component } from './lib26/lib26.component';
import { lib1026Routes } from '@ng-bundler-benchmark/lib1026';

export const lib26Routes: Route[] = [
    { path: 'lib1026', children: lib1026Routes },
  { path: '', component: Lib26Component }
];
