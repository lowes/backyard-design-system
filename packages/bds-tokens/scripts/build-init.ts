import { mkdirSync, copySync, removeSync, writeFileSync } from 'fs-extra'
import { join } from 'path'
import chalk from 'chalk'
import packageJSON from '../package.json'

process.stdout.write(`
    ${chalk.blue('Building ')}${chalk.green('@lowes-tech/bds-tokens')}${chalk.blue('...')}
\n`)

// Root Files
const rootFiles = [
    // Files for packaging
    'README.md',
]

// Generated files/folders to clear
const clearFiles = [
    'dist',
    'tsconfig.tsbuildinfo'
]

// Join Directories
const root = join(__dirname, '..')
const dist = join(root, 'dist')

process.stdout.write(`    ${chalk.blue('Preparing "/dist" directory...')}`)

// Clear all build files from repo
clearFiles.forEach((path) => removeSync(path))

// Make Empty Directories
mkdirSync(dist)

process.stdout.write(`  ${chalk.green('(Success)')}\n`)

process.stdout.write(`\n`)

// Prepare package.json
process.stdout.write(`    ${chalk.blue('Preparing "package.json"...')}`)

const pkg = {
    ...packageJSON,
    main: "./v3/index.js",
    typings: "./v3/index.d.ts",
}

writeFileSync(join(dist, 'package.json'), JSON.stringify(pkg, null, 2))

process.stdout.write(`  ${chalk.green('(Success)')}\n`)

process.stdout.write(`\n`)

process.stdout.write(`    ${chalk.blue('Copying files...')}\n`)

// Move root files to './dist'
rootFiles.forEach((file) => {
    const fileFrom = join(root, file)
    const fileTo = join(dist, file)

    process.stdout.write(`        ${fileFrom}\n            -> ${fileTo}`)

    copySync(fileFrom, fileTo)

    process.stdout.write(`  ${chalk.green('(Success)')}\n`)
})

// Build Initialized!
process.stdout.write(`\n    ${chalk.green('Build Initialized!')}\n\n`)

// Build Continuing
process.stdout.write(`\n    ${chalk.green('Building themes...')}\n\n`)
