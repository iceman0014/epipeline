/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: false }],
    'vue/multi-word-component-names': 'off',
    'no-var': 'error',
    'no-alert': 'error',
  },
  overrides: [
    {
      files: ['deploy/snap-dev/k8s/app.yaml'],
      rules: {
        quotes: 'off',
      },
    },
  ],
}
