module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
    'max-len': ['error', 120],
    'new-cap': ['off'],
    'object-curly-spacing': ['error', 'always'],
  },
};
