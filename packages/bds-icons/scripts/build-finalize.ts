import { copySync, removeSync, writeFileSync, moveSync } from 'fs-extra'
import { join } from 'path'
import chalk from 'chalk'

const root = join(__dirname, '..')
const ts = join(root, './types')
const dist = join(root, './dist')
const esm = join(dist, './esm')
const es = join(dist, './es')

process.stdout.write(`    ${chalk.white('Applying typescript definitions...')}\n`)

Array.of(dist, esm, es).forEach((buildPath) => {
    const name = buildPath.split('/').pop()

    process.stdout.write(`      ${chalk.blue(`Copying TypeScript definitions to "${name}"...`)} `)

    copySync(ts, buildPath)

    process.stdout.write(`${chalk.green('(Success)')}\n`)
})

process.stdout.write(`\n`)

process.stdout.write(`    ${chalk.white('Extracting custom icons...')}\n`)

Array.of(dist, esm, es).forEach((buildPath) => {
    const name = buildPath.split('/').pop()

    process.stdout.write(`      ${chalk.blue(`Extracting custom icons for "${name}"...`)} `)

    // Store true index exports
    moveSync(join(buildPath, 'index.js'), join(buildPath, 'index.temp.js'))
    moveSync(join(buildPath, 'index.d.ts'), join(buildPath, 'index.temp.d.ts'))
    // Copy custom (which also overwrites index exports)
    copySync(join(buildPath, 'custom'), buildPath)
    // Replace custom index with true index exports
    removeSync(join(buildPath, 'index.js'))
    removeSync(join(buildPath, 'index.d.ts'))
    moveSync(join(buildPath, 'index.temp.js'), join(buildPath, 'index.js'))
    moveSync(join(buildPath, 'index.temp.d.ts'), join(buildPath, 'index.d.ts'))
    // Remove unnecessary source components
    removeSync(join(buildPath, 'components.js'))
    removeSync(join(buildPath, 'components.d.ts'))

    process.stdout.write(`${chalk.green('(Success)')}\n`)
})

process.stdout.write(`\n`)

process.stdout.write(`    ${chalk.white('Preparing tree shaking...')}\n`)

Array.of(esm, es).forEach((buildPath) => {
    const pkg = {
        sideEffects: false,
        ...(!buildPath.match(/\/esm$/) ? { module: '../esm/index.js' } : {}),
        typings: './index.d.ts',
    }

    const name = buildPath.split('/').pop()

    process.stdout.write(`      ${chalk.blue(`Applying treeshaking for "${name}"...`)} `)

    writeFileSync(join(buildPath, 'package.json'), JSON.stringify(pkg, null, 2))

    process.stdout.write(`${chalk.green('(Success)')}\n`)
})

process.stdout.write(`\n`)

const buildSuccess = `
██████╗ ██╗   ██╗██╗██╗     ██████╗     ███████╗██╗   ██╗ ██████╗ ██████╗███████╗███████╗███████╗███████╗██╗   ██╗██╗     ██╗
██╔══██╗██║   ██║██║██║     ██╔══██╗    ██╔════╝██║   ██║██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝██║   ██║██║     ██║
██████╔╝██║   ██║██║██║     ██║  ██║    ███████╗██║   ██║██║     ██║     █████╗  ███████╗███████╗█████╗  ██║   ██║██║     ██║
██╔══██╗██║   ██║██║██║     ██║  ██║    ╚════██║██║   ██║██║     ██║     ██╔══╝  ╚════██║╚════██║██╔══╝  ██║   ██║██║     ╚═╝
██████╔╝╚██████╔╝██║███████╗██████╔╝    ███████║╚██████╔╝╚██████╗╚██████╗███████╗███████║███████║██║     ╚██████╔╝███████╗██╗
╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝     ╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝╚══════╝╚══════╝╚══════╝╚═╝      ╚═════╝ ╚══════╝╚═╝
`

process.stdout.write(`    ${chalk.green(buildSuccess)}\n\n`)
