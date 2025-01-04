import { Route } from '@angular/router';
import { Lib49Component } from './lib49/lib49.component';
import { lib1049Routes } from '@ng-bundler-benchmark/lib1049';

export const lib49Routes: Route[] = [
    { path: 'lib1049', children: lib1049Routes },
  { path: '', component: Lib49Component }
];
