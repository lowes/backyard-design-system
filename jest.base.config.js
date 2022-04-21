const modulesBase = require('./modules.base')
const { root } = require('./workspace.base')

// Convert `modules` format to `moduleNameMapper` regex
// See: https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring
const modules = Object
    .entries(modulesBase)
    .reduce((mods, [name, path]) => ({
        ...mods,
        [`^${name}/(.*)$`]: `${path}/$1`
    }), {})

module.exports = {
    rootDir: root,
    moduleNameMapper: modules,
    testPathIgnorePatterns: [
        '/node_modules/',
        '/dist/',
        '/build/',
        '/src/package.json',
        '/bds-docs/',
    ],
    modulePathIgnorePatterns: [
        '/build/',
        '/dist/',
        '/src/package.json',
        '/bds-docs/',
    ],
    transformIgnorePatterns: [
        '/node_modules/(?!(@lowes-tech|.pnpm)/)'
    ],
    collectCoverage: true,
    coverageReporters: [
        'json',
        'text-summary',
        'clover',
        'html',
    ],
    verbose: false,
    testEnvironment: "jsdom",
}
