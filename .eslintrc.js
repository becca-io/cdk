module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2020': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module',
    'ecmaFeatures': {
      jsx: true,
    },
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'no-multiple-empty-lines': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'semi': 2,
    'quotes': ['error', 'single'],
    'no-tabs': 'error',
    'padding-line-between-statements': [
        'error',
        { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
    ],
  },
  'settings': {
    react: {
      version: 'detect',
    },
  },
};
