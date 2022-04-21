import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import FormControl from '../FormControl'
import FormHelperText from '../FormHelperText'
import Search from './Search'

describe('Search Snapshots', () => {
    test('default snapshot', () => {
        const { asFragment } = render(
            <Search />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('with helper text', () => {
        const { asFragment } = render(
            <FormControl>
                <Search />
                <FormHelperText>Search Helper</FormHelperText>
            </FormControl>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('prop: size', () => {
        const sizes = ['small', 'medium', 'large']

        sizes.forEach(size => {
            test(`Search ${size} size snapshot`, () => {
                const { asFragment } = render(
                    <Search size={size} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Search ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <Search />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
