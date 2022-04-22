import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { exec as asyncExec } from 'child_process'
import util from 'util'
import chalk from 'chalk'

const argv = yargs(hideBin(process.argv)).argv
const exec = util.promisify(asyncExec)

async function main() {
    const args = argv._

    if (args.length > 0) {
        process.stdout.write(`    ${chalk.blue('Generating the following APIs...')}\n`)
        process.stdout.write(`        ${JSON.stringify(args)}\n\n`)

        const { stdout: docs } = await exec(`yarn ws:react typedoc:create ${args.join(' ')}`)

        process.stdout.write(docs)

        const { stdout: apis } = await exec(`yarn ws:docs api:generate ${args.join(' ')}`)

        process.stdout.write(apis)
    } else {
        process.stdout.write(`    ${chalk.blue('Generating ALL APIs...')}\n`)
        process.stdout.write(`        ${chalk.yellow('This may take a while...')}\n\n`)

        const { stdout: docs } = await exec(`yarn ws:react typedoc:create:all`)

        process.stdout.write(docs)

        const { stdout: apis } = await exec(`yarn ws:docs api:generate:all`)

        process.stdout.write(apis)
    }
}

main()
