import { mkdirSync, copySync, removeSync, writeFileSync } from 'fs-extra'
import { join } from 'path'
import chalk from 'chalk'
import packageJSON from '../package.json'

process.stdout.write(`
    ${chalk.blue('Building ')}${chalk.green('@lowes-tech/bds-react')}${chalk.blue('...')}
\n`)

// Root Files
const rootFiles = [
    // Files for packaging
    'CHANGELOG.md',
    'README.md',
    'sizes.json',
    'styled.d.ts', // Backyard Theme declaration for TS
    'src/server', // Server for storybook
]

// Generated files/folders to clear
const clearFiles = [
    'build',
    'dist',
    'tsconfig.tsbuildinfo'
]

// Join Directories
const root = join(__dirname, '..')
const dist = join(root, 'dist')
const build = join(root, 'build')

process.stdout.write(`    ${chalk.blue('Preparing "/dist" and "/build" directory...')}`)

// Clear all build files from repo
clearFiles.forEach((path) => removeSync(path))

// Make Empty Directories
mkdirSync(dist)
mkdirSync(build)

process.stdout.write(`  ${chalk.green('(Success)')}\n`)

process.stdout.write(`\n`)

// Prepare package.json
process.stdout.write(`    ${chalk.blue('Preparing "package.json"...')}`)

const pkg = {
    ...packageJSON,
    main: "./index.js",
    module: "./esm/index.js",
    typings: "./index.d.ts",
}

writeFileSync(join(dist, 'package.json'), JSON.stringify(pkg, null, 2))

process.stdout.write(`  ${chalk.green('(Success)')}\n`)

process.stdout.write(`\n`)

process.stdout.write(`    ${chalk.blue('Copying files...')}\n`)

// Move root files to './dist'
rootFiles.forEach((file) => {
    const fileFrom = join(root, file)
    const fileTo = join(dist, file.split('/').pop())

    process.stdout.write(`        ${fileFrom}\n            -> ${fileTo}`)

    copySync(fileFrom, fileTo)

    process.stdout.write(`  ${chalk.green('(Success)')}\n`)
})

// Build Initialized!
process.stdout.write(`\n    ${chalk.green('Build Initialized!')}\n\n`)

// Next command is to build typescript definitions...
process.stdout.write(`\n    ${chalk.blue('Building Typescript Definitions...')}\n\n`)
