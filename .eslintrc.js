module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-undef': 'error',
    'no-else-return': 'warn',
    'no-unused-vars': 'warn',
    'no-unreachable': 'warn',
    'no-control-regex': 'warn',
    'no-empty': 'off',
    'vue/order-in-components': 'warn',
    'vue/this-in-template': 'warn',
    'vue/no-unused-vars': 'warn',
    'vue/no-v-html': 'off',
    'vue/space-infix-ops': 1,
    'quotes': [1, 'single'],
    'semi': [2, 'never'],
    'no-trailing-spaces': 1,
    'no-spaced-func': 2,
    'object-curly-spacing': [0, 'never'],
    'space-infix-ops': 1,
    'keyword-spacing': [2, { before: true, after: true }],
    'space-before-blocks': [2, 'always'],
    'vue/no-unused-components': 'warn',
    'indent': [2, 2, { SwitchCase: 1 }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {}
}
