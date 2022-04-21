#!/usr/bin/env node
/**
 * EXTREMELY EXPENSIVE
 *
 * RUN AT YOUR OWN PERIL
 *
 * It is recommended to rebuild only individual APIs
 * Not the entire bds-react repo
 *
 * Supply a list of components via arguments to generate only
 * the typedocs for those given
 */

import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { join, dirname } from 'path'
import glob from 'glob'
import chalk from 'chalk'
import { exec as asyncExec } from 'child_process'
import util from 'util'

const argv = yargs(hideBin(process.argv)).argv
const exec = util.promisify(asyncExec)

import Queue from './utils/Queue'

const ignore = [
    // Ignore folders
    'server',
    'utils',
]

const root = join(__dirname, '..')
const src = join(root, './src')

async function worker({ component, components }) {
    const logs = []

    logs.push(`        ${component}`)

    if (ignore.includes(component) || !components.includes(component)) {
        logs.push(`  ${chalk.yellow('(Ignored)')}\n`)

        return
    }

    try {
        await exec(
            `typedoc src/${component}/index.ts --out src/${component} --plugin typedoc-plugin-markdown --json src/${component}/${component}.typedoc.json --name @lowes-tech/bds-react/${component}`,
        )

        logs.push(`  ${chalk.green('(Success)')}\n`)
    } catch (error) {
        if (error) {
            logs.push(`  ${chalk.red('(Error)')}\n`)
            logs.push(`      ${chalk.red(error)}\n`)

            return
        }
    } finally {
        process.stdout.write(logs.join(''))
    }
}

async function main() {
    const components = glob.sync('*/index.*s*', { cwd: src }).map(dirname)

    const createComponents = argv._?.length > 0 ? argv._ : components

    process.stdout.write(`    ${chalk.blue('Generating typedocs...')}\n`)

    const queue = new Queue(
        (component) =>
            worker({
                component,
                components,
            }),
        { concurrency: 5 },
    )

    queue.push(createComponents)

    await queue.wait({ empty: true })

    process.stdout.write(`    ${chalk.green('Successfully generated typedocs!')}\n\n`)
}

main()
