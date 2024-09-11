import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          'newlines-between': 'never',
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
        },
      ],
      'no-console': [
        'error',
        {
          allow: ['info', 'error'],
        },
      ],
      'no-duplicate-imports': 'error',
    },
  },
  {
    ...prettier,
    rules: {
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all',
          singleQuote: true,
        },
      ],
    },
  },
);
