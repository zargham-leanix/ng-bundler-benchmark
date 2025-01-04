const {createConfig} = require("@ng-rspack/build/rspack");

module.exports = createConfig({
  root: __dirname,
  outputPath: "dist/server",
  name: 'esbuild',
  main: './src/server.ts',
  index: './src/index.html',
  tsConfig: './tsconfig.app.json',
  polyfills: ["zone.js/node"],
  assets: ["./public"],
}, true);
