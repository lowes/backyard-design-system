const fs = require('fs')
const { join } = require('path')
const { root } = require('../workspace.base')
const chalk = require('chalk')

const yarn = join(root, '.yarn')
const cache = join(yarn, 'cache')
const modified = join(yarn, 'overrides', 'modified')
const clean = join(yarn, 'overrides', 'clean')

const cleanInstall = () => {
    process.stdout.write('\n')
    process.stdout.write(`    ${chalk.blue('Cleaning `.yarn/cache`...')}\n`)

    const files = fs.readdirSync(clean)

    files.forEach((file) => {
        process.stdout.write(`      ${chalk.white(file)}`)

        try {
            const src = join(clean, file)
            const dest = join(cache, file)

            fs.copyFileSync(src, dest)

            process.stdout.write(` ${chalk.green('(Success)')}\n`)
        } catch (err) {
            process.stdout.write(` ${chalk.red('(Failure)')}\n`)
            process.stdout.write(`${chalk.red(err)}\n`)
        }
    })

    process.stdout.write('\n')
}

const modifiedInstall = () => {
    process.stdout.write('\n')
    process.stdout.write(`    ${chalk.blue('Overriding `.yarn/cache`...')}\n`)

    const files = fs.readdirSync(clean)

    files.forEach((file) => {
        process.stdout.write(`      ${chalk.white(file)}`)

        try {
            const src = join(modified, file)
            const dest = join(cache, file)

            fs.copyFileSync(src, dest)

            process.stdout.write(` ${chalk.green('(Success)')}\n`)
        } catch (err) {
            process.stdout.write(` ${chalk.red('(Failure)')}\n`)
            process.stdout.write(`${chalk.red(err)}\n`)
        }
    })

    process.stdout.write('\n')
}

module.exports = {
    cleanInstall,
    modifiedInstall,
}
