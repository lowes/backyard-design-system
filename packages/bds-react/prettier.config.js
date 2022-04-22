module.exports = {
    jsxBracketSameLine: false,
    printWidth: 100,
    singleQuote: true,
    semi: false,
    trailingComma: 'all',
    tabWidth: 4,
    overrides: [
        {
            files: '*.d.ts',
            options: {
                // This is needed for TypeScript 3.2 support
                trailingComma: 'es5',
            },
        },
    ],
}