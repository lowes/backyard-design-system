import { mkdirSync, copySync, removeSync, writeFileSync } from 'fs-extra'
import { join } from 'path'
import chalk from 'chalk'
// @ts-ignore
import packageJSON from '../package.json'

process.stdout.write(`
    ${chalk.blue('Building ')}${chalk.green('@lowes-tech/bds-icons')}${chalk.blue('...')}
\n`)

// Root Files
const rootFiles = ['LICENSE', 'README.md', 'styled.d.ts']

// Join Directories
const root = join(__dirname, '..')
const dist = join(root, 'dist')
const svgsFrom = join(root, 'build', 'svgs')
const svgsTo = join(dist, 'svgs')

process.stdout.write(`    ${chalk.blue('Preparing "/dist" directory...')}`)

// Clear './dist' directory
removeSync(dist)

// Make Empty Directories
mkdirSync(dist)

process.stdout.write(`  ${chalk.green('(Success)')}\n`)

process.stdout.write(`\n`)

// Prepare package.json
process.stdout.write(`    ${chalk.blue('Preparing "package.json"...')}`)

// @ts-ignore
const pkg = {
    ...packageJSON,
    main: './index.js',
    module: './esm/index.js',
    types: './index.d.ts',
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

// Prepare 'dist/svgs'
process.stdout.write(`    ${chalk.blue('Copying "build/svgs" => "dist/svgs"...')}`)

copySync(svgsFrom, svgsTo)

process.stdout.write(`  ${chalk.green('(Success)')}\n`)

// Build Initialized!
process.stdout.write(`\n    ${chalk.green('Build Initialized!')}\n\n`)
