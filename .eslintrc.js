module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: [
        '@typescript-eslint',
        'no-autofix',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        // Use the no-autofix plugin to disable prefer-const's autofix. The autofix can
        // mask more serious bugs: https://github.com/eslint/eslint/issues/15943
        'prefer-const': 'off',
        'no-autofix/prefer-const': 'warn',
    },
};
