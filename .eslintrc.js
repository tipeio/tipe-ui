module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@tipe/eslint-config-tipe/vue'],
  settings: {
    'vue-types/namespace': ['vueTypes']
  },
  rules: {
    'vue/require-default-prop': [
      'warning',
      {
        required: false,
        'non-required': true
      }
    ]
  }
}
