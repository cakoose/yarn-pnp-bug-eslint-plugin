import noAutofix from 'eslint-plugin-no-autofix';

export default [
    {
        plugins: {
            'no-autofix': noAutofix,
        },
        rules: {
            // Use the no-autofix plugin to disable prefer-const's autofix. The autofix can
            // mask more serious bugs: https://github.com/eslint/eslint/issues/15943
            'prefer-const': 'off',
            'no-autofix/prefer-const': 'warn',
        },
    },
];
