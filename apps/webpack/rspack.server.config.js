const {SwcJsMinimizerRspackPlugin} = require('@rspack/core');
const { NgRspackPlugin } = require('@ng-rspack/build/rspack');
const {join} = require("path");
const { workspaceRoot } = require('nx/src/utils/workspace-root');

const isProduction = process.env['NODE_ENV'] === 'production';
const root =  join(workspaceRoot, "apps/esbuild")
module.exports = {
  context: root,
  target: 'node',
  mode: isProduction ? 'production' : 'development',
  entry: {
    server: {
      import: ["./src/server.ts"],
    },
  },
  output: {
    uniqueName: 'ngrspack',
    hashFunction: isProduction ? 'xxhash64' : undefined,
    publicPath: 'auto',
    clean: true,
    path: join(root, 'dist/server'),
    cssFilename: isProduction ? '[name].[contenthash].css' : '[name].css',
    filename: isProduction ? '[name].[contenthash].js' : '[name].js',
    chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].js',
    crossOriginLoading: false,
    trustedTypes: { policyName: 'angular#bundler' },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js'],
    modules: ['node_modules'],
    mainFields: ['es2020', 'es2015', 'browser', 'module', 'main'],
    conditionNames: ['es2020', 'es2015', '...'],
    tsConfig: {
      configFile: "./tsconfig.app.json",
    },
  },
  optimization: isProduction
    ? {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        minChunks: 1,
        minSize: 20000,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
      minimizer: [new SwcJsMinimizerRspackPlugin()],
    }
    : {
      minimize: false,
      minimizer: [],
    },
  experiments: {
    css: true,
  },
  module: {
    parser: {
      javascript: {
        requireContext: false,
        url: false,
      },
      'css/auto': {
        esModule: true,
      },
    },
    rules: [
      {
        test: /\.?(sa|sc|c)ss$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              api: 'modern-compiler',
              implementation: require.resolve('sass-embedded'),
            },
          },
        ],
        type: 'css/auto',
      },
      { test: /[/\\]rxjs[/\\]add[/\\].+\.js$/, sideEffects: true },
      {
        test: /\.[cm]?[jt]sx?$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                },
              },
            },
          },
          {
            loader: require.resolve(
              '@ng-rspack/build/rspack/loaders/angular-loader'
            ),
          },
        ],
      },
      {
        test: /\.[cm]?js$/,
        use: [
          {
            loader: require.resolve(
              '@ng-rspack/build/rspack/loaders/js-loader'
            ),
          },
        ],
      },
    ],
  },
  plugins: [new NgRspackPlugin({
    main: './src/server.ts',
    assets: ["./public"],
    index: "./src/index.html",
    name: 'ngrspack',
    outputPath: join(root, "dist/server"),
    polyfills: ["zone.js"],
    tsConfig: "./tsconfig.app.json",
    root,
    styles: ["./src/styles.css"]
  })],
};
