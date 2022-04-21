const { rules, ...baseConfig } = require('../../.eslintrc.base')

module.exports = {
    ...baseConfig,
    rules: {
        ...rules,

        // Max length of a line
        "max-len": "off",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
}
