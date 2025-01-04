import { Route } from '@angular/router';
import { Lib28Component } from './lib28/lib28.component';
import { lib1028Routes } from '@ng-bundler-benchmark/lib1028';

export const lib28Routes: Route[] = [
    { path: 'lib1028', children: lib1028Routes },
  { path: '', component: Lib28Component }
];
