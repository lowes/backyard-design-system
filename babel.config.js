const baseConfig = require('./babel.base.config')

/**
 * Babel Configuration for Backyard Design System
 */
module.exports = (api) => {
    api.cache(true)

    return baseConfig
}
