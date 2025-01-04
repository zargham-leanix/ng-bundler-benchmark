import { Route } from '@angular/router';
import { Lib24Component } from './lib24/lib24.component';
import { lib1024Routes } from '@ng-bundler-benchmark/lib1024';

export const lib24Routes: Route[] = [
    { path: 'lib1024', children: lib1024Routes },
  { path: '', component: Lib24Component }
];
