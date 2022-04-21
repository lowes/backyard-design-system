import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import FormHeading from './FormHeading'

describe('FormHeading Snapshots', () => {
    test('FormHeading default snapshot', () => {
        const { asFragment } = render(
            <FormHeading>Heading</FormHeading>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`FormHeading ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <FormHeading>Heading</FormHeading>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: variant', () => {
        const variants = [undefined, 'caption', 'h5']

        variants.forEach((variant) => {
            test(`FormHeading ${variant ? variant : 'default'} snapshot`, () => {
                const { asFragment } = render(
                    <FormHeading variant={variant}>Heading</FormHeading>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
