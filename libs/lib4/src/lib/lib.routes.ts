import { Route } from '@angular/router';
import { Lib4Component } from './lib4/lib4.component';
import { lib1004Routes } from '@ng-bundler-benchmark/lib1004';

export const lib4Routes: Route[] = [
    { path: 'lib1004', children: lib1004Routes },
  { path: '', component: Lib4Component }
];
