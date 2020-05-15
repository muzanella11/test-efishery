module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: true
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    'standard',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow console
    "no-console": "off",
    // allow v-html
    'vue/no-v-html': [0],
    // allow paren-less arrow functions
    'arrow-parens': [2, 'as-needed'],
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],
    'nuxt/no-cjs-in-config': 'off'
  },
  globals: {}
}
