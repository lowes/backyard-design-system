import { copySync, writeFileSync, existsSync, readFileSync } from 'fs-extra'
import { join, dirname } from 'path'
import glob from 'glob'
import chalk from 'chalk'

const ignore = [
    // Ignore server folder
    'server'
]

const root = join(__dirname, '..')
const dist = join(root, './dist')
const oldCJS = join(dist, './dist')
const src = join(root, './src')
const types = join(root, './build')

process.stdout.write(`    ${chalk.blue('Copying new `index.js`...')}\n`)

const oldIndex = join(oldCJS, 'index.js')
const newIndex = join(dist, 'index.js')

process.stdout.write(`        '${oldIndex}' -> '${newIndex}'`)

copySync(oldIndex, newIndex)

process.stdout.write(`  ${chalk.green('(Success)')}\n`)

process.stdout.write(`\n`)

process.stdout.write(`    ${chalk.blue('Copying new `dist` file structure...')}\n`)

const components = glob.sync('*/index.*s', { cwd: src }).map(dirname)

components.forEach((component) => {
    if (ignore.includes(component)) {
        return
    }
    
    const package = {
        sideEffects: false,
        module: join('../esm', component, 'index.js'),
        typings: './index.d.ts'
    }

    const cjsComponentPath = join(oldCJS, component)
    const esComponentPath = join(dist, 'es', component)
    const esmComponentPath = join(dist, 'esm', component)
    const newComponentPath = join(dist, component)
    const typesPath = join(types, component)
    const newPackagePath = join(dist, component, 'package.json')

    process.stdout.write(`        '${component}' -> '${newComponentPath}'`)

    // Copy old to new
    copySync(cjsComponentPath, newComponentPath)

    // Write new package.json
    writeFileSync(newPackagePath, JSON.stringify(package, null, 2))

    // Copy Types if available
    if (existsSync(typesPath)) {
        copySync(typesPath, cjsComponentPath)
        copySync(typesPath, esComponentPath)
        copySync(typesPath, esmComponentPath)
        copySync(typesPath, newComponentPath)
    }

    process.stdout.write(`  ${chalk.green('(Success)')}\n`)
})

process.stdout.write(`\n`)

process.stdout.write(`    ${chalk.blue('Copying new `index.d.ts` files...')}`)

const indexTS = join(types, 'index.d.ts')
const rootTS = join(dist, 'index.d.ts')
const cjsTS = join(dist, 'dist', 'index.d.ts')
const esTS = join(dist, 'es', 'index.d.ts')
const esmTS = join(dist, 'esm', 'index.d.ts')

copySync(indexTS, rootTS)
copySync(indexTS, cjsTS)
copySync(indexTS, esTS)
copySync(indexTS, esmTS)

process.stdout.write(`  ${chalk.green('(Success)')}\n`)

// Replace `/src/` ref in `styled.d.ts
try {
    process.stdout.write(`    ${chalk.blue('Replacing refs in `styled.d.ts`...')}`)

    const file = join(dist, 'styled.d.ts')

    const data = readFileSync(file, 'utf8')

    const result = data.replace('./src/ThemeProvider', './esm/ThemeProvider')

    writeFileSync(file, result, 'utf8')

    process.stdout.write(`  ${chalk.green('(Success)')}\n`)
} catch (err) {
    process.stdout.write(`  ${chalk.red(err)}\n`)
}

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
