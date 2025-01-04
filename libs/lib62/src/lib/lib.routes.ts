import { Route } from '@angular/router';
import { Lib62Component } from './lib62/lib62.component';
import { lib1062Routes } from '@ng-bundler-benchmark/lib1062';

export const lib62Routes: Route[] = [
    { path: 'lib1062', children: lib1062Routes },
  { path: '', component: Lib62Component }
];
