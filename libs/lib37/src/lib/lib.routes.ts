import { Route } from '@angular/router';
import { Lib37Component } from './lib37/lib37.component';
import { lib1037Routes } from '@ng-bundler-benchmark/lib1037';

export const lib37Routes: Route[] = [
    { path: 'lib1037', children: lib1037Routes },
  { path: '', component: Lib37Component }
];
