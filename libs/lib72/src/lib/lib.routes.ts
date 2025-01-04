import { Route } from '@angular/router';
import { Lib72Component } from './lib72/lib72.component';
import { lib1072Routes } from '@ng-bundler-benchmark/lib1072';

export const lib72Routes: Route[] = [
    { path: 'lib1072', children: lib1072Routes },
  { path: '', component: Lib72Component }
];
