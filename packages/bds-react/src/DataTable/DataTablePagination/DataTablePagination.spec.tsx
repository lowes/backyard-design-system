import * as React from 'react'

import { render } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import StubPagination from './StubPagination'

describe('TablePagination Snapshots', () => {
    test('TablePagination default snapshot', () => {
        const { asFragment } = render(<StubPagination />)

        expect(asFragment()).toMatchSnapshot()
    })

    describe('prop: size', () => {
        const sizes = ['small', 'medium', 'large'] as const

        sizes.forEach((size) => {
            test(`TablePagination ${size} size snapshot`, () => {
                const { asFragment } = render(<StubPagination size={size} />)

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`TablePagination  ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <StubPagination />
                    </ThemeProvider>,
                )
            })
        })
    })
})
