import { defineConfig } from 'eslint-define-config';
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  // Базовые правила ESLint
  {
    ...js.configs.recommended,
    ignores: ['**/dist', '**/node_modules'],
  },

  // Глобальные переменные
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      ecmaVersion: 'latest',
    },
  },

  // TypeScript конфиг
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { 
          jsx: true,
          experimentalObjectRestSpread: true,
        },
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      'simple-import-sort': simpleImportSort,
      'import': importPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      'no-multiple-empty-lines': ['error', {
        max: 1,
        maxEOF: 1,
        maxBOF: 0
      }],
        ...ts.configs['recommended'].rules,
        ...ts.configs['strict-type-checked'].rules,
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_+$',
          varsIgnorePattern: '^_+$',
        },
      ],
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      
      // Правила форматирования
      'indent': ['error', 2, {
        'SwitchCase': 1,
        'ignoredNodes': [
          'PropertyDefinition[decorators]',
          'TSUnionType',
          'TSTypeParameterInstantiation'
        ],
        'offsetTernaryExpressions': true
      }],
      'semi': ['error', 'always'],
      
      'no-unused-vars': 'off',
      'no-shadow': 'off',
      'no-use-before-define': 'off',
      'default-param-last': 'off',
      
      // Сортировка импортов
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/no-cycle': 'error',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
      
      'guard-for-in': 'off',
      'max-len': [
        'warn',
        {
          code: 130,
        },
      ],
      'max-params': [
        'error',
        {
          max: 5,
        },
      ],
      'no-restricted-syntax': [
        'error',
        'BinaryExpression[operator="in"]',
      ],
      'function-paren-newline': ['error', 'multiline-arguments'],
      
      'comma-dangle': ['error', 'always-multiline'],
      'comma-style': ['error', 'last'],
      'quote-props': ['error', 'as-needed'],
    },
  },

  // React конфиг
  {
    ...reactRecommended,
    files: ['**/*.jsx', '**/*.tsx'],
    settings: {
      react: {
        version: 'detect',
        pragma: 'React',
        fragment: 'Fragment',
      },
      'import/resolver': {
        alias: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          map: [
            ['@src', './src'],
          ],
        },
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/destructuring-assignment': 'off',
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      'react/jsx-props-no-spreading': [
        'error',
        {
          custom: 'ignore',
        },
      ],
      'react/no-array-index-key': 'off',
      'react/no-unsafe': [
        'warn',
        {
          checkAliases: true,
        },
      ],
      'react/no-unused-prop-types': [
        'warn',
        {
          skipShapeProps: false,
        },
      ],
      'react/require-default-props': 'off',
      'react/static-property-placement': [
        'error',
        'static public field',
      ],
      'react/function-component-definition': 'off',
      'react/sort-comp': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // Общие правила для всех файлов
  {
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'arrow-parens': ['error', 'as-needed'],
      'linebreak-style': ['error', 'windows'],
      'quotes': ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            consistent: true,
          },
          ObjectPattern: {
            multiline: true,
            consistent: true,
          },
          ImportDeclaration: 'never',
          ExportDeclaration: {
            multiline: true,
            consistent: true,
          },
        },
      ],
    },
  },

  // Переопределения для конкретных файлов
  {
    files: ['*.tsx', '*.jsx'],
    rules: {
      'react/jsx-max-props-per-line': [
        'error',
        {
          maximum: 1,
          when: 'always',
        },
      ],
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
    },
  },
  {
    files: ['src/redux/slices/**.ts'],
    rules: {
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsForRegex: ['^mutable'],
        },
      ],
    },
  },
]);