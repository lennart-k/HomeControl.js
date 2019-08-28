import babel from 'rollup-plugin-babel'
import { eslint } from 'rollup-plugin-eslint'
import typescript from 'rollup-plugin-typescript'

export default {
    input: 'src/index.ts',
    plugins: [
        typescript(),
        eslint(),
        babel({
            exclude: 'node_modules/**',
            presets: [require('@babel/preset-env')]
        })
    ],
    sourceMap: true,
    moduleName: 'ES6lib',
    output: [
        { name: "homeControl", file: 'dist/lib.js', format: 'cjs' },
        { name: "homeControl", file: 'dist/lib.mjs', format: 'es' },
        { name: "homeControl", file: 'dist/lib.umd.js', format: 'umd' },
    ],
}