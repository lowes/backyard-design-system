import fse from 'fs-extra'
import rimraf from 'rimraf'
import path from 'path'
import mkdirp from 'mkdirp'
import glob from 'glob'
import util from 'util'
import Mustache from 'mustache'
import chalk from 'chalk'
import Queue from '../src/utils/Queue'
import renameFilter from '../src/utils/renameFilter'
import getComponentName from '../src/utils/getComponentName'

const options = {
    svgDir: 'build/svgs',
    glob: '/**/*.svg',
    custom: 'src/custom/*.tsx',
    outputDir: './src',
}

const globAsync = util.promisify(glob)

async function generateIndex(options) {
    process.stdout.write(`\n    ${chalk.blue('Generating "/src/index.ts":')}\n`)

    let consoleOutput = []

    const icons = await globAsync(path.join(options.outputDir, '*.tsx'))

    let index = icons
        .map((file) => {
            const name = path.basename(file).replace('.tsx', '')

            consoleOutput.push(chalk.white('.'))

            return `export * from './${name}'\n`
        })
        .join('')

    index += `\n`

    consoleOutput.forEach((log, index) => {
        if (index % 100 === 0) {
            process.stdout.write('\n        ')
        }

        process.stdout.write(log)
    })

    await fse.writeFile(path.join(options.outputDir, 'index.ts'), index)

    process.stdout.write(` ${chalk.green('(Success)')}\n`)
}

async function cleanPaths({ data }) {
    let input = data
        // Remove color paths
        .replace(/ fill="[^"]+"/g, '')
        // Remove stroke colors
        .replace(/ stroke="[^"]+"/g, '')
        // Remove etc.
        .replace(/<rect fill="none" width="24" height="24"\/>/g, '')
        .replace(/<rect id="SVGID_1_" width="24" height="24"\/>/g, '')
        // Remove all evenodd fill rules (to replace them later)
        .replace(/ fill-rule="evenodd"/g, '')

    // Adding hardcoded data from Sketch
    input = input.replace(/<path /g, '<path fill-rule="evenodd" ')

    // Extract the paths from the svg string
    // Clean xml paths
    let paths = input
        .replace(/<svg[^>]*>/g, '')
        .replace(/<\/svg>/g, '')
        .replace(/"\/>/g, '" />')
        .replace(/fill-opacity=/g, 'fillOpacity=')
        .replace(/xlink:href=/g, 'xlinkHref=')
        .replace(/clip-rule=/g, 'clipRule=')
        .replace(/fill-rule=/g, 'fillRule=')
        .replace(/ stroke-width=".+?"/g, '') // Fix stroke-widths
        .replace(/stop-color=/g, 'stopColor=')
        .replace(/ clip-path=".+?"/g, '') // Fix visibility issue and save some bytes.
        .replace(/<clipPath.+?<\/clipPath>/g, '') // Remove unused definitions

    // Add a fragment when necessary.
    if ((paths.match(/\/>/g) || []).length > 1) {
        paths = `<React.Fragment>${paths}</React.Fragment>`
    }

    return paths
}

async function worker({ svgPath, options, template, customs }) {
    let consoleOutput = []

    try {
        const normalizedSvgPath = path.normalize(svgPath)
        const svgPathObj = path.parse(normalizedSvgPath)
        // const innerPath = path
        //     .dirname(normalizedSvgPath)
        //     .replace(options.svgDir, '')
        //     .replace(path.relative(process.cwd(), options.svgDir), '') // for relative dirs
        const destPath = renameFilter(svgPathObj)

        consoleOutput.push(chalk.white(`        ${svgPathObj.name} => `))

        const componentName = getComponentName(destPath)

        consoleOutput.push(chalk.white(componentName))

        if (customs.includes(componentName.toLowerCase())) {
            consoleOutput.push(`${chalk.yellow(' (Custom)')}\n`)

            return
        }

        const outputFileDir = path.dirname(path.join(options.outputDir, destPath))

        try {
            await fse.access(outputFileDir)
        } catch {
            process.stdout.write(chalk.white(`mkdir ${outputFileDir}\n`))

            mkdirp.sync(outputFileDir)
        }

        const data = await fse.readFile(svgPath, { encoding: 'utf8' })
        const paths = await cleanPaths({ data })

        const fileString = Mustache.render(template, {
            paths,
            componentName: componentName,
        })

        const absDestPath = path.join(options.outputDir, `${componentName}.tsx`)

        await fse.writeFile(absDestPath, fileString)

        consoleOutput.push(`${chalk.green(' (Success)')}\n`)
    } catch (err) {
        consoleOutput.push(`${chalk.red(' (Error)')}\n`)
        consoleOutput.push(`\n${chalk.red(err)}\n\n`)
    } finally {
        for (const log of consoleOutput) {
            process.stdout.write(log)
        }
    }
}

async function main() {
    try {
        process.stdout.write(`    ${chalk.blue('Generating "/src"...')}\n`)

        rimraf.sync(`${options.outputDir}/*.tsx`)

        const [svgPaths, template] = await Promise.all([
            globAsync(path.join(options.svgDir, options.glob)),
            fse.readFile(path.join(__dirname, '..', 'PathIconComponent.tsx.template'), {
                encoding: 'utf8',
            }),
        ])

        const customs = (await globAsync(options.custom)).map((custom) =>
            custom.split('/').pop().split('.')[0]?.toLowerCase(),
        )

        const queue = new Queue(
            (svgPath) =>
                worker({
                    svgPath,
                    options,
                    template,
                    customs,
                }),
            { concurrency: 8 },
        )

        queue.push(svgPaths)

        await queue.wait({ empty: true })

        await generateIndex(options)

        process.stdout.write(`\n    ${chalk.green('Successfully generated "/src"!')}\n\n`)

        // Next command is to build typescript definitions...
        process.stdout.write(`\n    ${chalk.blue('Building Typescript Definitions...')}\n\n`)
    } catch (err) {
        process.stderr.write(`\n${chalk.red(err)}\n\n`)
    }
}

main()
