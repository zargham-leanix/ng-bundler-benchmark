const {createConfig} = require("@ng-rspack/build/rspack");

module.exports = createConfig({
  root: __dirname,
  outputPath: "dist/browser",
  name: 'esbuild',
  main: './src/main.ts',
  index: './src/index.html',
  tsConfig: './tsconfig.app.json',
  styles: ["./src/styles.css"],
  polyfills: ["zone.js"],
  assets: ["./public"],
});
