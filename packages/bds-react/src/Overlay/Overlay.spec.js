import * as React from 'react'

import { render } from '../../test-utils'
import ThemeProvider from '../ThemeProvider'

import Overlay from './Overlay'

describe('Overlay Snapshots', () => {
    test('Overlay default snapshot', () => {
        const { asFragment } = render(
            <Overlay open />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Overlay ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Overlay open />
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: open', () => {
        test(`Overlay not open snapshot`, () => {
            const { asFragment } = render(
                <Overlay open={false} />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test(`Overlay open snapshot`, () => {
            const { asFragment } = render(
                <Overlay open />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('prop: invisible', () => {
        test(`Overlay invisible snapshot`, () => {
            const { asFragment } = render(
                <Overlay open invisible />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('extra props', () => {
        test('Overlay DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <Overlay
                    open
                    className="overlay-class-test"
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
