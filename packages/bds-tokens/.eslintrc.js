const baseConfig = require('../../.eslintrc.base')

module.exports = {
    ...baseConfig,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
}
