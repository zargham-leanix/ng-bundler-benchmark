import { Route } from '@angular/router';
import { Lib51Component } from './lib51/lib51.component';
import { lib1051Routes } from '@ng-bundler-benchmark/lib1051';

export const lib51Routes: Route[] = [
    { path: 'lib1051', children: lib1051Routes },
  { path: '', component: Lib51Component }
];
