import { Route } from '@angular/router';
import { Lib23Component } from './lib23/lib23.component';
import { lib1023Routes } from '@ng-bundler-benchmark/lib1023';

export const lib23Routes: Route[] = [
    { path: 'lib1023', children: lib1023Routes },
  { path: '', component: Lib23Component }
];
