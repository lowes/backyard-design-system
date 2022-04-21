const productionPlugins = [
    'babel-plugin-transform-react-constant-elements',
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
    presets: [
        '@babel/preset-typescript',
        [
            '@babel/preset-env',
            {
                modules: ['esm', 'production-umd'].includes(process.env.BABEL_ENV)
                    ? false
                    : 'commonjs',
            },
        ],
        '@babel/preset-react',
    ],
    plugins: [
        'babel-plugin-typescript-to-proptypes',
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-object-assign',
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    '~components': './src/components',
                },
            },
        ],
    ],
    ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
    env: {
        cjs: {
            plugins: productionPlugins,
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
    },
}
