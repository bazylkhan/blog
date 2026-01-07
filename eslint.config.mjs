import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import i18nextPlugin from 'eslint-plugin-i18next';

export default defineConfig([
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js, prettier: prettierPlugin, i18next: i18nextPlugin },
        extends: ['js/recommended', prettierConfig],
        languageOptions: { globals: { ...globals.browser, __IS_DEV__: true, ...globals.jest } },
        rules: {
            ...prettierPlugin.configs.recommended.rules,
            'no-console': 'warn',
            eqeqeq: 'warn',
            curly: 'warn',
            'no-else-return': 'warn',
            'no-unused-vars': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'react/no-deprecated': 'off',
            'i18next/no-literal-string': ['error', { markupOnly: true }],
        },
    },
]);
