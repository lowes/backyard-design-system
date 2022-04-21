import { mkdirp, statSync } from 'fs-extra'
import { fromPairs } from 'lodash'
import { join } from 'path'
import { promisify } from 'util'
import webpackCallbackBased from 'webpack'
import createWebpackConfig from './webpack.config'

const webpack = promisify(webpackCallbackBased)

/**
 * creates size snapshot for every bundle that built with webpack
 */
async function getWebpackSizes() {
    await mkdirp(join(__dirname, 'build'))

    // webpack --config $configPath --json > $statsPath
    // will create a 300MB big json file which sometimes requires up to 1.5GB
    // memory. This will sometimes crash node in azure pipelines with "heap out of memory"
    const webpackStats = await webpack(await createWebpackConfig())
    const stats = webpackStats.toJson()

    return Object.entries(stats.assetsByChunkName).map(([chunkName, assetName]) => {
        const name = assetName[0]
        const parsed = statSync(join(__dirname, 'build', name))
        const gzip = statSync(join(__dirname, 'build', `${name}.gz`))
        
        return [chunkName, { parsed: parsed?.size, gzip: gzip?.size }]
    })
}

async function get() {
    return fromPairs([
        ...(await getWebpackSizes())
    ])
}

export default get
