const { merge } = require('webpack-merge')

const baseConfig = require('../webpack.base.config')

module.exports = ({ config }) => {
    return merge(baseConfig, config, {})
}
