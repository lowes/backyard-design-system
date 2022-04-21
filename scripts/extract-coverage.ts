import fs from 'fs-extra'
import chalk from 'chalk'
import { root, packages } from '../workspace.base'

process.stdout.write(`\n  ${chalk.blue('Extracting coverage...')}\n`)

process.stdout.write(`\n    ${chalk.blue('Cleaning `.coverage` and `coverage`...')}`)

// Remove old `.coverage` and `coverage` folders
if (fs.existsSync(`${root}/.coverage`)) {
    fs.rmSync(`${root}/.coverage`, { recursive: true })
}
if (fs.existsSync(`${root}/.coverage`)) {
    fs.rmSync(`${root}/.coverage`, { recursive: true })
}
if (fs.existsSync(`${root}/coverage`)) {
    fs.rmSync(`${root}/coverage`, { recursive: true })
}
if (fs.existsSync(`${root}/coverage`)) {
    fs.rmSync(`${root}/coverage`, { recursive: true })
}

// Setup `.coverage` folder
fs.mkdirSync(`${root}/.coverage`)
fs.mkdirSync(`${root}/.coverage/packages`)

process.stdout.write(` ${chalk.green('(Success)')}\n`)

process.stdout.write(`\n    ${chalk.blue('Extracing local packages coverage...')}\n`)

// Abstract `packages`...
Object.entries<Record<string, string>>(packages)
    // For each `package`...
    .forEach(([pkg, path]) => {
        // Get package `.coverage` folder
        const coverage = `${path}/.coverage`

        // Collect report from and report to paths
        const reportFrom = `${coverage}/coverage-final.json`
        const reportTo = `${root}/.coverage/packages/${pkg}.json`

        // Get local paths for each report
        const reportFromLocal = `packages${reportFrom.split('packages')?.[1]}`
        const reportToLocal = `.coverage${reportTo.split('.coverage')?.[1]}`

        process.stdout.write(`\n      ${reportFromLocal} ${chalk.blue('=>')} ${reportToLocal}...`)

        // If report from exists,
        if (fs.existsSync(reportFrom)) {
            // Move report to root coverage
            fs.copyFileSync(reportFrom, reportTo)

            process.stdout.write(` ${chalk.green('(Success)')}\n`)
        } else {
            // Else, report does not exist
            process.stdout.write(` ${chalk.yellow('(Not Found)')}\n`)
        }
    })

process.stdout.write(`\n  ${chalk.green('Successfully extracted coverage!')}\n`)
process.stdout.write(`\n`)
