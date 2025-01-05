# Angular Bundler Benchmark Repo

## Results

M3 Macbook Pro

| Build/Bundler | Prod SSR (s) | Prod (s) | Dev (s) |
|---------------|--------------|----------|---------|
| Webpack       | 348.707        | 224.226   | 234.449    |
| esbuild       | 28.509         | 24.521     | 18.719    |
| Rsbuild       | 24.690         | 20.490     | 19.675    |
| Rspack        | 19.974         | 18.239     | 16.477    |

### Raw Results 
M3 Macbook Pro

**Dev Benchmark**
```
Benchmark 1: NODE_OPTIONS="--max-old-space-size=8192" pnpm nx run esbuild:browser-webpack --configuration=development --skip-nx-cache
Time (mean ± σ):     234.449 s ± 26.689 s    [User: 375.234 s, System: 32.785 s]
Range (min … max):   189.102 s … 257.536 s    5 runs

Benchmark 2: pnpm nx run esbuild:browser-esbuild --configuration=development --skip-nx-cache
Time (mean ± σ):     18.719 s ±  0.683 s    [User: 28.403 s, System: 4.507 s]
Range (min … max):   18.203 s … 19.854 s    5 runs

Benchmark 3: NODE_ENV=development pnpm nx run esbuild:browser-rspack --skip-nx-cache
Time (mean ± σ):     16.684 s ±  0.197 s    [User: 29.222 s, System: 5.873 s]
Range (min … max):   16.477 s … 16.921 s    5 runs

Benchmark 4: NODE_ENV=development pnpm nx run esbuild:build-rsbuild --environment=browser --skip-nx-cache
Time (mean ± σ):     19.675 s ±  0.266 s    [User: 33.638 s, System: 6.511 s]
Range (min … max):   19.499 s … 20.141 s    5 runs

Summary
NODE_ENV=development pnpm nx run esbuild:browser-rspack --skip-nx-cache ran
1.12 ± 0.04 times faster than pnpm nx run esbuild:browser-esbuild --configuration=development --skip-nx-cache
1.18 ± 0.02 times faster than NODE_ENV=development pnpm nx run esbuild:build-rsbuild --environment=browser --skip-nx-cache
14.05 ± 1.61 times faster than NODE_OPTIONS="--max-old-space-size=8192" pnpm nx run esbuild:browser-webpack --configuration=development --skip-nx-cache

```

**Prod Benchmark**
```
Benchmark 1: NODE_OPTIONS="--max-old-space-size=8192" pnpm nx run esbuild:browser-webpack --skip-nx-cache
Time (mean ± σ):     224.226 s ± 43.112 s    [User: 372.578 s, System: 36.206 s]
Range (min … max):   191.755 s … 299.733 s    5 runs

Benchmark 2: pnpm nx run esbuild:browser-esbuild --skip-nx-cache
Time (mean ± σ):     24.521 s ±  0.853 s    [User: 39.717 s, System: 5.550 s]
Range (min … max):   23.527 s … 25.373 s    5 runs

Benchmark 3: NODE_ENV=production pnpm nx run esbuild:browser-rspack --skip-nx-cache
Time (mean ± σ):     18.992 s ±  0.596 s    [User: 31.540 s, System: 6.110 s]
Range (min … max):   18.239 s … 19.831 s    5 runs

Benchmark 4: NODE_ENV=production pnpm nx run esbuild:build-rsbuild --environment=browser --skip-nx-cache
Time (mean ± σ):     20.490 s ±  0.505 s    [User: 34.328 s, System: 6.533 s]
Range (min … max):   19.869 s … 20.931 s    5 runs

Summary
NODE_ENV=production pnpm nx run esbuild:browser-rspack --skip-nx-cache ran
1.08 ± 0.04 times faster than NODE_ENV=production pnpm nx run esbuild:build-rsbuild --environment=browser --skip-nx-cache
1.29 ± 0.06 times faster than pnpm nx run esbuild:browser-esbuild --skip-nx-cache
11.81 ± 2.30 times faster than NODE_OPTIONS="--max-old-space-size=8192" pnpm nx run esbuild:browser-webpack --skip-nx-cache

```

**Prod SSR Benchmark**
```
Benchmark 1: NODE_OPTIONS="--max-old-space-size=8192" pnpm nx run esbuild:build-webpack --skip-nx-cache
Time (mean ± σ):     348.707 s ± 60.735 s    [User: 892.480 s, System: 225.305 s]
Range (min … max):   293.157 s … 446.738 s    5 runs

Benchmark 2: pnpm nx run esbuild:build-esbuild --skip-nx-cache
Time (mean ± σ):     28.509 s ±  1.937 s    [User: 58.441 s, System: 7.859 s]
Range (min … max):   26.407 s … 31.547 s    5 runs

Benchmark 3: pnpm nx run esbuild:build-rspack --skip-nx-cache
Time (mean ± σ):     19.974 s ±  0.441 s    [User: 65.574 s, System: 12.888 s]
Range (min … max):   19.377 s … 20.427 s    5 runs

Benchmark 4: pnpm nx run esbuild:build-rsbuild --skip-nx-cache
Time (mean ± σ):     24.690 s ±  0.262 s    [User: 64.060 s, System: 12.495 s]
Range (min … max):   24.442 s … 25.095 s    5 runs

Summary
pnpm nx run esbuild:build-rspack --skip-nx-cache ran
1.24 ± 0.03 times faster than pnpm nx run esbuild:build-rsbuild --skip-nx-cache
1.43 ± 0.10 times faster than pnpm nx run esbuild:build-esbuild --skip-nx-cache
17.46 ± 3.07 times faster than NODE_OPTIONS="--max-old-space-size=8192" pnpm nx run esbuild:build-webpack --skip-nx-cache
```
