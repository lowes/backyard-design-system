const globCallback = require('glob')
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const { promisify } = require('util')
const { merge } = require('webpack-merge')

const { packages } = require('../../../../workspace.base')

const baseConfig = require('../../../../webpack.base.config')

const glob = promisify(globCallback)

const workspaceRoot = packages['bds-react']

async function getSizeLimitBundles() {
    const componentsPath = path.join(workspaceRoot, 'dist/esm')
    const components = (await glob(path.join(componentsPath, '[A-Z]*'))).map((componentPath) => {
        const componentName = path.basename(componentPath)

        return {
            name: componentName,
            webpack: true,
            path: path.relative(workspaceRoot, componentPath),
        }
    })

    return [
        ...components
    ]
}

module.exports = async function webpackConfig() {
    const entries = await getSizeLimitBundles()
    const entry = entries.reduce((acc, bundle) => {
        acc[bundle.name] = `${path.join(workspaceRoot, bundle.path)}/`

        return acc
    }, {})

    const config = {
        entry,
        // Peer dependencies go here
        externals: /^(react|react-dom|prop-types|styled-components)$/,
        mode: 'production',
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'build'),
        },
        plugins: [
            new CompressionPlugin({
                filename: "[path][base].gz",
                algorithm: "gzip",
                test: /\.(js|css|html)$/,
                threshold: 0,
                minRatio: 1
            })
        ],
    }

    return merge(
        baseConfig,
        config,
    )
}
