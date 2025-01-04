const {execSync} = require("child_process");
const {writeFileSync} = require('fs');
// const DRY_RUN = false;
// const NUMBER_OF_LIBS = 1000;
// const NUMBER_OF_COMPONENTS = 10;
// const LIBRARY_COMMAND = (i, parent = undefined) => `npx nx g @nx/angular:lib libs/lib${i} --routing=true  ${parent ? `--parent=${parent}` : ''} --skipFormat=true --skipPackageJson=true --skipTests=true --unitTestRunner=none --no-interactive --dryRun=${DRY_RUN}`;
//
// const COMPONENT_COMMAND = (i, parent) => `npx nx g @nx/angular:component ${parent}/comp${i}/comp${i}.ts --export --skipFormat --no-interactive --dryRun=${DRY_RUN}`
//
// function main() {
//   console.log("Generating...")
//   for(let i =0; i<NUMBER_OF_LIBS;i++) {
//     console.log(`Library ${i}`)
//     const parentRoutePath = `libs/lib${i}/src/lib/lib.routes.ts`;
//     const parentCompPath = `libs/lib${i}/src/lib`
//     const childLibI = NUMBER_OF_LIBS+i;
//     const childCompPath = `libs/lib${childLibI}/src/lib`
//
//     execSync(LIBRARY_COMMAND(i));
//     execSync(LIBRARY_COMMAND(childLibI, parentRoutePath));
//
//     for(let j =0; j<NUMBER_OF_COMPONENTS;j++) {
//       execSync(COMPONENT_COMMAND(j, parentCompPath))
//       execSync(COMPONENT_COMMAND(j, childCompPath))
//     }
//   }
//   console.log("Done.")
// }
// try {
//   main();
// } catch(e) {
//   console.error(e)
// }

// const str = (i) => `import { lib${i}Routes } from '@ng-bundler-benchmark/lib${i}';`
// let finalStr = '';
//
// for(let i = 0; i <91; i++) {
//   finalStr = finalStr + '\n' + str(i);
// }
//
// console.log(finalStr);

const routesStr = (i, j) => `import { Route } from '@angular/router';
import { Lib${i}Component } from './lib${i}/lib${i}.component';
import { lib${j}Routes } from '@ng-bundler-benchmark/lib${j}';
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

export const lib${i}Routes: Route[] = [
    { path: 'lib${j}', children: lib${j}Routes },
  { path: '', component: Lib${i}Component },
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
`

const pathToLibRoutes = (i) => `libs/lib${i}/src/lib/lib.routes.ts`;

for(let i =0; i<91;i++) {
  const p = pathToLibRoutes(i);
  const r = routesStr(i, 1000+i);
  writeFileSync(p, r);
}
