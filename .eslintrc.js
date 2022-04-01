module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/eslint-config-typescript/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  // off warn error
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 注释的斜线或 * 后必须有空格
    'spaced-comment': ['error', 'always'],
    // 强制使用单引号
    quotes: ['error', 'single'],
    // 行尾分号是否加分号,默认加 always,不加never
    semi: ['warn', 'never'],

    // https://github.com/johnsoncodehk/volar/issues/47
    '@typescript-eslint/no-unused-vars': 'off',
    // 禁止 types
    '@typescript-eslint/ban-types': 'warn',
    // 禁止 require()
    '@typescript-eslint/no-var-requires': 'off',
    // 禁止 any
    '@typescript-eslint/no-explicit-any': ['off'],
    // template 必须由一个根元素包含
    'vue/no-multiple-template-root': 'off',
    // Enable vue/script-setup-uses-vars rule
    'vue/script-setup-uses-vars': 'error',
  },
}
