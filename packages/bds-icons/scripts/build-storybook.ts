import fse from 'fs-extra'
import chalk from 'chalk'
import path from 'path'
import glob from 'glob'
import util from 'util'
import mkdirp from 'mkdirp'
import Mustache from 'mustache'
import rimraf from 'rimraf'

const ignoreComponents = ['index']

const globAsync = util.promisify(glob)
const template = fse.readFileSync(path.join(__dirname, '..', 'IconStory.stories.js.template'), {
    encoding: 'utf8',
})
const customTemplate = fse.readFileSync(
    path.join(__dirname, '..', 'IconStoryCustom.stories.js.template'),
    {
        encoding: 'utf8',
    },
)

async function init() {
    process.stdout.write(`\n${chalk.blue('Creating necessary folders...')}\n`)
    rimraf.sync('stories')
    mkdirp.sync('stories')
}

async function getFiles() {
    process.stdout.write(`${chalk.blue('Getting files...')}\n\n`)

    const components = await globAsync(path.join('src', '*.tsx'))
    const customComponents = await globAsync(path.join('src/custom', '*.tsx'))

    components.map((component) => {
        const filename = component.split('/')[1]
        const componentName = filename.replace('.tsx', '')

        if (ignoreComponents.includes(componentName)) {
            return
        }

        const fileString = Mustache.render(template, {
            componentName: componentName,
        })

        process.stdout.write(`${chalk.green('Writing file ' + componentName + '.stories.tsx')}\n`)
        fse.writeFileSync(path.join('stories', `${componentName}.stories.tsx`), fileString)
    })

    customComponents.map((component) => {
        const filename = component.split('/')[2]
        const componentName = filename.replace('.tsx', '')

        if (ignoreComponents.includes(componentName)) {
            return
        }

        const fileString = Mustache.render(customTemplate, {
            componentName: componentName,
        })

        process.stdout.write(
            `    ${chalk.green('Writing file ' + componentName + '.stories.tsx')}\n`,
        )
        fse.writeFileSync(path.join('stories', `${componentName}.stories.tsx`), fileString)
    })

    process.stdout.write('\n')
}

init()
getFiles()
