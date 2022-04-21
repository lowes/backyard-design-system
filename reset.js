const fs = require('fs')

const overrides = ['gatsby-plugin-mdx']

const dir = __dirname
const cache = `${dir}/.yarn/cache`

process.stdout.write(`\n  Resetting ${cache}...\n`)

overrides.forEach((dependency) => {
    const files = fs.readdirSync(cache).filter((file) => file.startsWith(dependency))

    files.forEach((file) => {
        process.stdout.write(`\n    Found ${file}...`,)

        fs.rmSync(`${cache}/${file}`)

        process.stdout.write(` (Success)\n`,)
    })
})

process.stdout.write(`\n  Reset Successfully!\n\n`)
