const {execSync} = require("child_process");
const DRY_RUN = false;
const NUMBER_OF_LIBS = 1000;
const NUMBER_OF_COMPONENTS = 10;
const LIBRARY_COMMAND = (i, parent = undefined) => `npx nx g @nx/angular:lib libs/lib${i} --routing=true  ${parent ? `--parent=${parent}` : ''} --skipFormat=true --skipPackageJson=true --skipTests=true --unitTestRunner=none --no-interactive --dryRun=${DRY_RUN}`;

const COMPONENT_COMMAND = (i, parent) => `npx nx g @nx/angular:component ${parent}/comp${i}/comp${i}.ts --export --skipFormat --no-interactive --dryRun=${DRY_RUN}`

function main() {
  console.log("Generating...")
  for(let i =0; i<NUMBER_OF_LIBS;i++) {
    console.log(`Library ${i}`)
    const parentRoutePath = `libs/lib${i}/src/lib/lib.routes.ts`;
    const parentCompPath = `libs/lib${i}/src/lib`
    const childLibI = NUMBER_OF_LIBS+i;
    const childCompPath = `libs/lib${childLibI}/src/lib`

    execSync(LIBRARY_COMMAND(i));
    execSync(LIBRARY_COMMAND(childLibI, parentRoutePath));

    for(let j =0; j<NUMBER_OF_COMPONENTS;j++) {
      execSync(COMPONENT_COMMAND(j, parentCompPath))
      execSync(COMPONENT_COMMAND(j, childCompPath))
    }
  }
  console.log("Done.")
}
try {
  main();
} catch(e) {
  console.error(e)
}
