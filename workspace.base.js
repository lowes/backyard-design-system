const fs = require('fs')

// Root workspace
const root = __dirname

// Read all folder names under `./packages`
// to automatically build package workspaces
const packages = fs
    .readdirSync(`${root}/packages`)
    .reduce((folders, folder) => ({
        ...folders,
        [folder]: `${root}/packages/${folder}`
    }), {})

/**
 * Workspaces for Backyard Design System
 * 
 * Automatically builds packages workspaces
 * 
 * Add other workspaces here as needed to easily
 * get their file paths within the monorepo
 */
module.exports = {
    root,
    packages,
}
