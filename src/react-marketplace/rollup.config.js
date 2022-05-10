import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';

const packageJson = require('./package.json');

export default [
  {
    external: ['react'],
    input: 'index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'iife',
        name: 'Fusebit',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      typescript({ tsconfig: '../../tsconfig.json' }),
      postcss({ modules: true }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
