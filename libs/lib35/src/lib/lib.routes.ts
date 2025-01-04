import { Route } from '@angular/router';
import { Lib35Component } from './lib35/lib35.component';
import { lib1035Routes } from '@ng-bundler-benchmark/lib1035';

export const lib35Routes: Route[] = [
    { path: 'lib1035', children: lib1035Routes },
  { path: '', component: Lib35Component }
];
