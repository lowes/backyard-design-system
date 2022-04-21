require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    plugins: ['react-hooks'],
    extends: ['airbnb-typescript', 'prettier'],
    env: {
        node: true,
        browser: true,
        jest: true,
    },
    rules: {
        // Don't use semi colons unless needed
        semi: ['error', 'never'],
        '@typescript-eslint/semi': ['error', 'never'],

        // Encourage using the best name for any needed default import
        'import/no-named-as-default': 'off',

        // No preference on arrow callbacks vs. function expressions
        // In some cases, the function expression is better (like as a functional component) to include the name in a `forwardRef`
        // In other cases, the arrow callback can make sense to make sure scope is defined in a correct order
        'prefer-arrow-callback': 'off',

        // Max length of a line
        'max-len': ['error', 140],

        // Prop types are defined by TS interfaces instead of using prop-types
        'react/prop-types': 'off',

        // Prop spreading is hugely beneficial for extending components in a library
        'react/jsx-props-no-spreading': 'off',

        // Requiring destructuring is just dumb
        'react/destructuring-assignment': 'off',

        // Function parenthesis on newline makes the `ref` show up easier in `forwardRef` components
        'function-paren-newline': 'off',

        // `isNan`, `isInteger`, etc. are required for IE11 compatibility
        'no-restricted-globals': 'off',

        // Avoid nesting deep ternaries
        'no-nested-ternary': 'off',

        // The default is to use an array of indexed keys
        'react/no-array-index-key': 'off',

        // This really isn't as confusing as the documentation makes it out to be
        'arrow-body-style': 'off',

        // Doesn't apply to us since we convert types to prop-types
        'react/require-default-props': 'off',

        // We don't prefer fragments over React.Fragment
        'react/jsx-fragments': 'off',

        // @todo we don't want to shadow in v3
        '@typescript-eslint/no-shadow': 'off',

        // peer/dev dependencies are not extraneous for us
        'import/no-extraneous-dependencies': 'off',

        // Whether extensions need to be included or not
        'import/extensions': 'off',

        // Causes errors
        'react/jsx-filename-extension': 'off',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    ignorePatterns: ['**/*.ignore.*', '**/*.test.*', '**/*.spec.*', '**/*.stories.*'],
}
