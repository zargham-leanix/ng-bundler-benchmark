import { Route } from '@angular/router';
import { Lib54Component } from './lib54/lib54.component';
import { lib1054Routes } from '@ng-bundler-benchmark/lib1054';

export const lib54Routes: Route[] = [
    { path: 'lib1054', children: lib1054Routes },
  { path: '', component: Lib54Component }
];
