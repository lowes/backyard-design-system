const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const modules = require('./modules.base')
const { root } = require('./workspace.base')

/**
 * Base Webpack Configuration for Backyard Design System
 *
 * Extend from these settings in each local package
 */
module.exports = {
    context: root,
    resolve: {
        modules: [root, 'node_modules'],
        alias: {
            ...modules,
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
    },
    plugins: [
        // Webpack 5 no longer automatically polyfills
        // See: https://github.com/Richienb/node-polyfill-webpack-plugin#aliases
        new NodePolyfillPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: [/node_modules\/(?!(@lowes-tech|.pnpm)\/)/],
                loader: 'babel-loader',
            },
        ],
    },
}
