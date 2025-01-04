import { Route } from '@angular/router';
import { Lib22Component } from './lib22/lib22.component';
import { lib1022Routes } from '@ng-bundler-benchmark/lib1022';

export const lib22Routes: Route[] = [
    { path: 'lib1022', children: lib1022Routes },
  { path: '', component: Lib22Component }
];
