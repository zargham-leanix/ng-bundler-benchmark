import { Route } from '@angular/router';
import { Lib44Component } from './lib44/lib44.component';
import { lib1044Routes } from '@ng-bundler-benchmark/lib1044';

export const lib44Routes: Route[] = [
    { path: 'lib1044', children: lib1044Routes },
  { path: '', component: Lib44Component }
];
