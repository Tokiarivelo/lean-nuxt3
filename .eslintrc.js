module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: ['unused-imports'],
  extends: [
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'unused-imports/no-unused-imports-ts': 2,
    'unused-imports/no-unused-vars': 'error',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
    },
  },
};
