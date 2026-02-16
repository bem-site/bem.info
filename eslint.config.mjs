import js from '@eslint/js';
import globals from 'globals';

export default [
    {
        ignores: [
            '**/*.deps.js',
            'libs/**',
            'lib/gorshochek/**',
            '**/bundles/**',
            'output/**',
            '.cache/**',
            'scripts/**',
            'node_modules/**'
        ]
    },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'commonjs',
            globals: {
                ...globals.node,
                ...globals.browser,
                // YModules
                modules: 'readonly',
                // BEM XJST
                block: 'readonly',
                elem: 'readonly',
                elemMod: 'readonly',
                mod: 'readonly',
                match: 'readonly',
                oninit: 'readonly',
                content: 'readonly',
                replace: 'readonly',
                wrap: 'readonly',
                attrs: 'readonly',
                addAttrs: 'readonly',
                tag: 'readonly',
                cls: 'readonly',
                addMix: 'readonly',
                mix: 'readonly',
                js: 'readonly',
                addJs: 'readonly',
                bem: 'readonly',
                def: 'readonly',
                mode: 'readonly',
                applyNext: 'readonly',
                applyCtx: 'readonly',
                apply: 'readonly',
                once: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'no-console': 'off',
            'no-irregular-whitespace': ['error', { skipComments: true }],
            'quotes': ['error', 'single', { avoidEscape: true }],
            'semi': ['error', 'always'],
            'indent': ['error', 4, { SwitchCase: 1 }],
            'comma-dangle': ['error', 'never'],
            'no-trailing-spaces': 'error',
            'eol-last': 'error',
            'no-multiple-empty-lines': ['error', { max: 1 }],
            'space-before-blocks': 'error',
            'keyword-spacing': 'error',
            'space-infix-ops': 'error',
            'comma-spacing': 'error',
            'brace-style': ['error', '1tbs', { allowSingleLine: true }],
            'curly': ['error', 'multi-line'],
            'eqeqeq': ['error', 'always', { null: 'ignore' }],
            'no-var': 'off',
            'prefer-const': 'off'
        }
    },
    {
        files: ['**/*.mjs'],
        languageOptions: {
            sourceType: 'module'
        }
    }
];
