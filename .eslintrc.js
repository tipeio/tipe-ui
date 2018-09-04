module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue-types/strongly-recommended',
    'plugin:jest/recommended'
  ],
  settings: {
    'vue-types/namespace': ['vueTypes']
  },
  plugins: ['vue', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': 'error',
    'promise/catch-or-return': 'error',
    'max-lines': [
      'error',
      { max: 250, skipBlankLines: true, skipComments: true }
    ],
    semi: [2, 'never']
  },
  globals: {
    ENV: true
  }
}
