import * as React from 'react'
import path from 'path'
import glob from 'glob'
import { render } from '../test-utils'
import * as icons from '../src'
import renameFilter from '../src/utils/renameFilter'
import getComponentName from '../src/utils/getComponentName'

const files = glob.sync(path.join(__dirname, '..', 'svgs', '/**/*.svg'))

const components = files.map((file) => {
    const normalizedPath = path.normalize(file)
    const parsedPath = path.parse(normalizedPath)
    const renamedPath = renameFilter(parsedPath)

    return getComponentName(renamedPath)
})

describe('index.ts', () => {
    for (const component of components) {
        it(`should export ${component}`, () => {
            expect(Object.keys(icons).includes(component)).toBe(true)
        })
    }
})

describe('icons', () => {
    for (const component of components) {
        it(`should successfully render ${component}`, () => {
            const Component = icons[component]

            const { getByTestId } = render(
                <Component
                    data-testid="icon"
                />
            )

            const icon = getByTestId('icon')

            expect(icon).toBeInTheDocument()
        })
    }
})
