import { Route } from '@angular/router';
import { Lib389Component } from './lib389/lib389.component';
import { lib1389Routes } from '@ng-bundler-benchmark/lib1389';
import { Comp0Component } from './comp0/comp0';
import { Comp1Component } from './comp1/comp1';
import { Comp2Component } from './comp2/comp2';
import { Comp3Component } from './comp3/comp3';
import { Comp4Component } from './comp4/comp4';
import { Comp5Component } from './comp5/comp5';
import { Comp6Component } from './comp6/comp6';
import { Comp7Component } from './comp7/comp7';
import { Comp8Component } from './comp8/comp8';
import { Comp9Component } from './comp9/comp9';

export const lib389Routes: Route[] = [
    { path: 'lib1389', children: lib1389Routes },
  { path: '', component: Lib389Component },
  { path: 'lib0', component: Comp0Component },
  { path: 'lib1', component: Comp1Component },
  { path: 'lib2', component: Comp2Component },
  { path: 'lib3', component: Comp3Component },
  { path: 'lib4', component: Comp4Component },
  { path: 'lib5', component: Comp5Component },
  { path: 'lib6', component: Comp6Component },
  { path: 'lib7', component: Comp7Component },
  { path: 'lib8', component: Comp8Component },
  { path: 'lib9', component: Comp9Component }
];
