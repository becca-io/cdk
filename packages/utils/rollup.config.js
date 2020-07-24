import path from "path";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import packageJson from "./package.json";

const external = (pkg) => {
  const externals = Object.keys({
    ...packageJson.dependencies,
    ...packageJson.peerDependencies,
  });

  return externals.some((externalPkg) => {
    return pkg.startsWith(externalPkg);
  });
};

const extensions = [".js", ".jsx", ".ts", ".tsx"];

function buildJS(input, output, format) {
  return {
    input,
    external,
    output: [
      {
        file: output,
        format,
      },
    ],
    plugins: [
      resolve({
        extensions,
      }),
      commonjs(),
      babel({
        extensions,
        runtimeHelpers: true,
      }),
      json(),
      url(),
    ],
  };
}

function buildCJS(input) {
  const filename = path.parse(input).name;
  return buildJS(input, `dist/${filename}.js`, "cjs");
}

function buildESM(input) {
  const filename = path.parse(input).name;
  return buildJS(input, `esm/${filename}.esm.js`, "es");
}

export default [buildCJS("src/index.ts"), buildESM("src/index.ts")];
