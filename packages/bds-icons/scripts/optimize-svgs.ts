import fse, { mkdirSync, removeSync } from 'fs-extra'
import rimraf from 'rimraf'
import path, { join } from 'path'
import glob from 'glob'
import util from 'util'
import { optimize } from 'svgo'
import type { OptimizeOptions, OptimizedSvg } from 'svgo'
import chalk from 'chalk'
import Queue from '../src/utils/Queue'

const options = {
    svgDir: 'svgs',
    glob: '/**/*.svg',
    outputDir: 'build/svgs',
}

const globAsync = util.promisify(glob)

const svgo = (() => {
    const options: OptimizeOptions = {
        floatPrecision: 4,
        plugins: [
            { name: 'cleanupAttrs' },
            { name: 'removeDoctype' },
            { name: 'removeXMLProcInst' },
            { name: 'removeComments' },
            { name: 'removeMetadata' },
            { name: 'removeTitle' },
            { name: 'removeDesc' },
            { name: 'removeUselessDefs' },
            // { name: 'removeXMLNS' },
            { name: 'removeEditorsNSData' },
            { name: 'removeEmptyAttrs' },
            { name: 'removeHiddenElems' },
            { name: 'removeEmptyText' },
            { name: 'removeEmptyContainers' },
            { name: 'removeViewBox' },
            { name: 'cleanupEnableBackground' },
            { name: 'minifyStyles' },
            { name: 'convertStyleToAttrs' },
            { name: 'convertColors' },
            { name: 'convertPathData' },
            { name: 'convertTransform' },
            { name: 'removeUnknownsAndDefaults' },
            { name: 'removeNonInheritableGroupAttrs' },
            { name: 'removeUselessStrokeAndFill' },
            { name: 'removeUnusedNS' },
            { name: 'cleanupIDs' },
            { name: 'cleanupNumericValues' },
            { name: 'cleanupListOfValues' },
            { name: 'moveElemsAttrsToGroup' },
            { name: 'moveGroupAttrsToElems' },
            { name: 'collapseGroups' },
            { name: 'removeRasterImages' },
            { name: 'mergePaths' },
            { name: 'convertShapeToPath' },
            { name: 'sortAttrs' },
            { name: 'removeDimensions' },
            // { name: 'removeAttrs' },
            { name: 'removeElementsByAttr' },
            { name: 'removeStyleElement' },
            { name: 'removeScriptElement' },
        ],
    }

    return {
        optimize: (svg) => optimize(svg, options),
    }
})()

async function cleanSVG({ data }) {
    // Remove hardcoded color fill before optimizing so that empty groups are removed
    let input = data
        .replace(/<defs[^>]*>/g, '')
        .replace(/<\/defs>/g, '')
        .replace(/ fill-rule="[^"]+"/g, '')
        .replace(/ fillRule="[^"]+"/g, '')
        .replace(/<rect fill="none" width="24" height="24"\/>/g, '')
        .replace(/<rect id="SVGID_1_" width="24" height="24"\/>/g, '')
        // Remove filters
        .replace(/ filter="[^"]+"/g, '')
        // Remove useless mask tags
        .replace(/<mask[^>]*>/g, '')
        .replace(/<\/mask>/g, '')
        // Remove useless use tags
        .replace(/<use[^>]*>/g, '')
        .replace(/<\/use>/g, '')

    // Adding hardcoded data from Sketch
    input = input.replace(/<path /g, '<path fill-rule="evenodd" ')

    const result = (await svgo.optimize(input)) as OptimizedSvg

    // Extract the paths from the svg string
    // Clean xml paths
    let paths = result.data
        // Remove Sketch misc
        .replace(/"\/>/g, '" />')
        .replace(/xlink:href=/g, 'xlinkHref=')
        .replace(/ clip-path=".+?"/g, '') // Fix visibility issue and save some bytes.
        .replace(/<clipPath.+?<\/clipPath>/g, '') // Remove unused definitions
        .replace(/ stroke-width=".+?"/g, '') // Fix stroke-widths

    // Remove noise from Sketch
    paths = paths
        .replace('<use xlinkHref="#a" />', '')
        .replace(' xmlns:xlink="http://www.w3.org/1999/xlink"', '')
        .replace(' id="a"', '')

    // Add width/height
    paths = paths.replace('viewBox="0 0 24 24"', 'height="24px" width="24px" viewBox="0 0 24 24"')

    return paths
}

async function worker({ svgPath, options }) {
    let consoleOutput = []

    try {
        const normalizedSvgPath = path.normalize(svgPath)
        const svgPathObj = path.parse(normalizedSvgPath)
        const destPath = svgPathObj.base

        consoleOutput.push(chalk.white(`        ${svgPathObj.name} `))

        const data = await fse.readFile(svgPath, { encoding: 'utf8' })
        const svg = await cleanSVG({ data })

        const absDestPath = path.join(options.outputDir, destPath)

        await fse.writeFile(absDestPath, svg)

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
        process.stdout.write(`    ${chalk.blue('Preparing "/dist" directory...')}`)

        const root = join(__dirname, '..')
        const build = join(root, 'build')

        // Clear './dist' directory
        removeSync(build)

        // Make Empty Directories
        mkdirSync(build)

        process.stdout.write(`  ${chalk.green('(Success)')}\n\n`)

        process.stdout.write(`    ${chalk.blue('Optimizing "svgs"...')}\n`)

        try {
            await fse.access(options.outputDir)
        } catch {
            await fse.mkdir(options.outputDir)
        }

        rimraf.sync(`${options.outputDir}/*.js`)

        const [svgPaths] = await Promise.all([globAsync(path.join(options.svgDir, options.glob))])

        const queue = new Queue(
            (svgPath) =>
                worker({
                    svgPath,
                    options,
                }),
            { concurrency: 8 },
        )

        queue.push(svgPaths)

        await queue.wait({ name: 'empty' })

        process.stdout.write(`\n    ${chalk.green('Successfully optimized "svgs"!')}\n\n`)
    } catch (err) {
        process.stderr.write(`\n${chalk.red(err)}\n\n`)
    }
}

main()
