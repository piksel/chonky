import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import sass from 'rollup-plugin-sass';
// import sass from 'sass';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

import {} from 'rollup'

const packageJson = require('./package.json');

const config = [
    {
        input: 'src/lib.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                name: 'react-ts-lib'
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            },
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.lib.json' }),
            // postcss({
            //     preprocessor: (content, id) => new Promise(r => r({ code: sass.compileString(content) })),
            // }),
            sass(),
            // sass({
            //     processor: css => postcss().transform.process(css).then(r => r.css),
            // }),
            terser()
        ],
    },
    {
        input: 'dist/esm/lib.d.ts',
        output: [{ file: 'dist/index.d.ts', format: "esm" }],
        external: [/\.s?css$/],
        plugins: [dts()],
    },
]

export default config;