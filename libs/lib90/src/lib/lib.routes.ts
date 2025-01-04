import { Route } from '@angular/router';
import { Lib90Component } from './lib90/lib90.component';
import { lib1090Routes } from '@ng-bundler-benchmark/lib1090';

export const lib90Routes: Route[] = [
    { path: 'lib1090', children: lib1090Routes },
  { path: '', component: Lib90Component }
];
