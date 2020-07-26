import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const isProduction = process.env.NODE_ENV = 'production'

console.log(isProduction)

function buildJS(input, output, format) {
  const defaultOutputConfig = {
    format,
    exports: 'named',
    sourcemap: true,
  };
  const esOutputConfig = {
    ...defaultOutputConfig,
    dir: output,
  };
  const cjsOutputConfig = {
    ...defaultOutputConfig,
    file: output,
  };

  return {
    input,
    output: [
      format === 'es' ? esOutputConfig : cjsOutputConfig,
    ],
    plugins: [
      resolve({
        extensions,
      }),
      peerDepsExternal(),
      commonjs(),
      babel({
        extensions,
        runtimeHelpers: true,
        rootMode: 'upward',
      }),
      json(),
      url(),
    ],
    preserveModules: format === 'es',
  };
}

export default [
  buildJS('index.ts', 'dist/index.js', 'cjs'),
  buildJS('index.ts','dist/esm', 'es'),
];
