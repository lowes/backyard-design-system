const { packages } = require('./workspace.base')

/**
 * Base Configuration for all Backyard Design System Modules
 * 
 * Add local modules here to resolve them locally
 */
module.exports = {
    '@lowes-tech/bds-tokens': `${packages['bds-tokens']}/src`,
    '@lowes-tech/bds-icons': `${packages['bds-icons']}/src`,
    '@lowes-tech/bds-react': `${packages['bds-react']}/src`,
}
