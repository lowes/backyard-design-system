import { copySync } from 'fs-extra'
import { join } from 'path'
import chalk from 'chalk'
import { readdirSync } from 'fs'

// Generated folders
const folders = ['src']

const ignore = ['package.json']

// Join Directories
const root = join(__dirname, '..')
const dist = join(root, 'dist')

process.stdout.write(`\n    ${chalk.blue('Copying files...')}\n`)

// Move generated folders to './dist'
folders.forEach((folder) => {
    const files = readdirSync(join(root, folder))

    files.forEach((file) => {
        const fileFrom = join(root, folder, file)
        const fileTo = join(dist, file)

        process.stdout.write(`        ${fileFrom}\n            -> ${fileTo}`)

        if (ignore.includes(file)) {
            process.stdout.write(`  ${chalk.white('(Ignored)')}\n`)
        } else {
            copySync(fileFrom, fileTo)

            process.stdout.write(`  ${chalk.green('(Success)')}\n`)
        }
    })
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
