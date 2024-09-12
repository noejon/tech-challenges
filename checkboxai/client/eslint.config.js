import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import jestDom from 'eslint-plugin-jest-dom';
import prettier from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import testingLibrary from 'eslint-plugin-testing-library';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    files: ['**/*.{test,spec}.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...jestDom.configs['flat/recommended'],
  },
  {
    files: ['**/*.{test,spec}.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      'testing-library': fixupPluginRules({
        rules: testingLibrary.rules,
      }),
    },
    rules: {
      ...testingLibrary.configs['flat/react'].rules,
      'testing-library/no-container': 'off',
      'testing-library/no-node-access': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat['jsx-runtime'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
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
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
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
