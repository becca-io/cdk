---
to: packages/<%= path %>/package.json
---
{
  "name": "<%= name %>",
  "description": "<%= h.reverseTrim(description) %>",
  "version": "0.0.1",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "module": "dist/esm/index.js",
  "scripts": {
    "build": "rm -rf dist/ && rm -rf esm/ && tsc --emitDeclarationOnly --declarationDir dist && rollup -c ../../rollup.config.js",
    "test": "echo No test here!",
    "lint": "eslint -c .eslintrc.js 'src/**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "yarn lint --fix",
    "typecheck": "tsc"
  },
  "license": "MIT"
}
