const modules = require('./modules.base')
const { root } = require('./workspace.base')

const aliases = modules

module.exports = {
    presets: [
        [
            '@babel/env',
            {
                targets: {
                    browsers: 'Last 2 Chrome versions, Firefox ESR',
                    node: '8.9',
                },
            },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
    plugins: [
        'dynamic-import-node',
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
    ],
    env: {
        build: {
            ignore: [
                '**/*.test.tsx',
                '**/*.test.ts',
                '**/*.stories.tsx',
                '__snapshots__',
                '__tests__',
                '__stories__',
            ],
        },
        coverage: {
            plugins: [
                'babel-plugin-istanbul',
                [
                    'babel-plugin-module-resolver',
                    {
                        root: [root],
                        alias: aliases,
                    },
                ],
            ],
        },
        development: {},
        test: {
            sourceMaps: 'both',
            plugins: [
                [
                    'babel-plugin-module-resolver',
                    {
                        root: [root],
                        alias: aliases,
                    },
                ],
            ],
        },
    },
    ignore: [/@babel[\\|/]runtime/, /node_modules\/(?!(@lowes-tech|.pnpm)\/)/],
}
