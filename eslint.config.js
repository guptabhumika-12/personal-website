import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import typescriptEslint from '@typescript-eslint'

const eslintConfig = {
  ignores: ['dist'],
  extends: [
    js.configs.recommended,
    typescriptEslint.configs.recommended,
    reactHooks.configs.recommended,
  ],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: [
    reactHooks,
    reactRefresh,
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};

export default eslintConfig;
