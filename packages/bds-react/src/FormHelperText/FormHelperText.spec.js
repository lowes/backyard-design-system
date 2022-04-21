import * as React from 'react'

import Info from '@lowes-tech/bds-icons/InfoOutlined'

import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'

import FormHelperText from './FormHelperText'

describe('FormHelperText Snapshots', () => {
    test('FormHelperText default snapshot', () => {
        const { asFragment } = render(
            <FormHelperText>Helper Text</FormHelperText>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`FormHeading ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <FormHelperText>Helper Text</FormHelperText>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: indent', () => {
        const indents = [false, true]

        indents.forEach((indent) => {
            test(`FormHeading ${indent ? indent : 'default'} snapshot`, () => {
                const { asFragment } = render(
                    <FormHelperText indent={indent}>Helper Text</FormHelperText>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: icon', () => {
        test(`FormHeading icon snapshot`, () => {
            const { asFragment } = render(
                <FormHelperText icon={<Info />}>Helper Text</FormHelperText>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
