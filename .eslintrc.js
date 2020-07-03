/*
 * @Author: Alexander
 * @Date: 2020-07-03 11:03:56
 * @LastEditors: Alexander
 * @LastEditTime: 2020-07-03 13:27:26
 * @Description:
 */

const { resolve } = require;

const OFF = 0;
const ERROR = 2;

module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:eslint-comments/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/recommended',
        'prettier',
        // 专门支持了 eslint-plugin-react
        'prettier/react',
        // 专门支持了 @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'import/extensions': [
            ERROR,
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                json: 'never',
                js: 'never',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                // 指定 eslint-plugin-import 解析的后缀名
                extensions: ['.ts', '.tsx', '.js', '.json'],
            },
            typescript: {},
        },
    },
    overrides: [
        {
            files: ['**/*.d.ts'],
            rules: {
                'import/no-duplicates': OFF,
            },
        },
        {
            files: ['scripts/**/*.ts'],
            rules: {
                'import/no-extraneous-dependencies': OFF,
            },
        },
    ],
};
