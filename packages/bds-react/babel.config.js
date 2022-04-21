let defaultPresets

// We release an ES version of Backyard.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
if (process.env.BABEL_ENV === 'es') {
    defaultPresets = []
} else {
    defaultPresets = [
        [
            '@babel/preset-env',
            {
                bugfixes: true,
                modules: ['esm'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
            },
        ],
    ]
}

const productionPlugins = [
    '@babel/plugin-transform-react-constant-elements',
    'babel-plugin-transform-dev-warning',
    [
        'babel-plugin-transform-react-remove-prop-types',
        {
            mode: 'unsafe-wrap',
        },
    ],
    'babel-plugin-styled-components',
]

module.exports = {
    presets: ['@babel/preset-typescript', '@babel/preset-react', ...defaultPresets],
    plugins: [
        'babel-plugin-typescript-to-proptypes',
        'babel-plugin-optimize-clsx', // works for classnames
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        // any package needs to declare 7.4.4 as a runtime dependency. default is ^7.0.0
        ['@babel/plugin-transform-runtime', { version: '^7.4.4' }],
        // for IE 11 support
        '@babel/plugin-transform-object-assign',
    ],
    // ignore: [/@babel[\\|/]runtime/],
    env: {
        cjs: {
            plugins: productionPlugins,
        },
        coverage: {
            plugins: ['babel-plugin-istanbul'],
        },
        development: {
            plugins: [],
        },
        esm: {
            plugins: [
                ...productionPlugins,
                ['@babel/plugin-transform-runtime', { useESModules: true }],
            ],
        },
        es: {
            plugins: [
                ...productionPlugins,
                ['@babel/plugin-transform-runtime', { useESModules: true }],
            ],
        },
        production: {
            plugins: [
                ...productionPlugins,
                ['@babel/plugin-transform-runtime', { useESModules: true }],
            ],
        },
        test: {
            ignore: [/node_modules\/(?!(@lowes-tech|.pnpm)\/)/],
            plugins: ['@babel/plugin-transform-modules-commonjs'],
        },
        benchmark: {
            plugins: [...productionPlugins],
        },
    },
}
