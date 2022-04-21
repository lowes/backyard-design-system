import path from 'path'
import { writeFile } from 'fs-extra'
import puppeteer from 'puppeteer'
import type { Browser } from 'puppeteer'
import puppeteerCore from 'puppeteer'
import express from 'express'
import getPort from 'get-port'
import { logger } from '@storybook/node-logger'
import chalk from 'chalk'

const read = async (url) => {
    const browser = await usePuppeteerBrowser()
    const page = await browser.newPage()

    await page.goto(url)

    await page.waitForFunction(
        'window.__STORYBOOK_STORY_STORE__ && window.__STORYBOOK_STORY_STORE__.extract && window.__STORYBOOK_STORY_STORE__.extract()',
    )

    const data = JSON.parse(
        await page.evaluate(() => {
            // @ts-ignore
            // eslint-disable-next-line no-undef
            return JSON.stringify(window.__STORYBOOK_STORY_STORE__.getStoriesJsonData(), null, 2)
        }),
    )

    setImmediate(() => {
        browser.close()
    })

    return data
}

const useLocation = async (input) => {
    if (input.match(/^http/)) {
        return [input, async () => {}]
    }

    const app = express()

    app.use(express.static(input))

    const port = await getPort()

    return new Promise((resolve, reject) => {
        const server = app.listen(port, (e: Error = null) => {
            if (e) {
                reject(e)
            }

            const result = `http://localhost:${port}/iframe.html`

            logger.info(`connecting to: ${result}`)

            resolve([result, server.close.bind(server)])
        })
    })
}

const usePuppeteerBrowser = async (): Promise<Browser> => {
    const args = ['--no-sandbox ', '--disable-setuid-sandbox']
    try {
        return await puppeteer.launch({ args })
    } catch (e) {
        // it's not installed
        logger.info('installing puppeteer...')
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line global-require
            require('child_process').exec(
                `node ${require.resolve(path.join('puppeteer', 'install.js'))}`,
                (error) => (error ? reject(error) : resolve(puppeteerCore.launch({ args }))),
            )
        })
    }
}

export async function extract(input, targetPath) {
    if (input && targetPath) {
        process.stdout.write(`    ${chalk.blue('Creating browser...')}  `)
        const [location, exit] = (await useLocation(input)) as any
        process.stdout.write(`\n`)

        process.stdout.write(`    ${chalk.blue('Reading storybook...')}`)
        const data = await read(location)
        process.stdout.write(`  ${chalk.green('(Success!)')}\n\n`)

        process.stdout.write(`    ${chalk.blue('Writing JSON...')}`)
        await writeFile(targetPath, JSON.stringify(data, null, 2))
        process.stdout.write(`  ${chalk.green('(Success!)')}\n`)

        await exit()
    } else {
        throw new Error(
            'Extract: please specify a path where your built-storybook is (can be a public url) and a target directory',
        )
    }
}

if (process && process.argv) {
    const args = process.argv.slice(2)

    process.stdout.write(`    ${chalk.blue('Extracting storybook JSON...')}\n\n`)

    // @ts-ignore
    extract(...args)
        .then(() => {
            process.stdout.write(`\n    ${chalk.green('Success!')}\n\n`)
        })
        .catch((error) => {
            process.stdout.write(`\n    ${chalk.red('(Error)')}\n`)
            process.stdout.write(`\n    ${chalk.red(error)}\n\n`)
        })
}
