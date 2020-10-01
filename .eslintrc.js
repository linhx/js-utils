module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },

  parser: 'babel-eslint',

  rules: {
    'semi': 'error',
    'no-var': 'error',
    'prefer-const': 'warn',
    'prefer-arrow-callback': 'warn',
    'object-shorthand': 'warn',
    'no-unused-vars': 'off'
  },

  extends: [
    'eslint:recommended',
  ],
}
