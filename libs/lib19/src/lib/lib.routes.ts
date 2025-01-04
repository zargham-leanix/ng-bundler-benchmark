import { Route } from '@angular/router';
import { Lib19Component } from './lib19/lib19.component';
import { lib1019Routes } from '@ng-bundler-benchmark/lib1019';

export const lib19Routes: Route[] = [
    { path: 'lib1019', children: lib1019Routes },
  { path: '', component: Lib19Component }
];
