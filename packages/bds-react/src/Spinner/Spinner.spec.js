import * as React from 'react'

import { render } from '../../test-utils'
import ThemeProvider from '../ThemeProvider'

import Spinner from './Spinner'

describe('Spinner Snapshots', () => {
    describe('overlay spinner', () => {
        test('Spinner default snapshot', () => {
            const { asFragment } = render(
                <Spinner show />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        describe('prop: open', () => {
            test(`Spinner not shown snapshot`, () => {
                const { asFragment } = render(
                    <Spinner/>
                )

                expect(asFragment()).toMatchSnapshot()
            })

            test(`Spinner shown snapshot`, () => {
                const { asFragment } = render(
                    <Spinner show />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })

        describe('prop: invisible', () => {
            test(`Spinner overlay invisible snapshot`, () => {
                const { asFragment } = render(
                    <Spinner show
                             invisible />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })

        describe('prop: small', () => {
            test(`Spinner overlay invisible snapshot`, () => {
                const { asFragment } = render(
                    <Spinner small
                             show />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })

        describe('colors', () => {
            const colors = ['commerce', 'error']

            colors.forEach((color) => {
                test(`Spinner ${color} theme snapshot`, () => {
                    const { asFragment } = render(
                        <Spinner show color={color} />
                    )

                    expect(asFragment()).toMatchSnapshot()
                })
            })
        })

        describe('themes', () => {
            const themes = ['light', 'dark']

            themes.forEach((theme) => {
                test(`Spinner ${theme} theme snapshot`, () => {
                    const { asFragment } = render(
                        <ThemeProvider theme={theme}>
                            <React.Fragment>
                                <Spinner show />
                            </React.Fragment>
                        </ThemeProvider>
                    )

                    expect(asFragment()).toMatchSnapshot()
                })
            })
        })

        describe('extra props', () => {
            test('Spinner DOM props (className) snapshot', () => {
                const { asFragment } = render(
                    <Spinner
                        open
                        className="overlay-class-test"
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('inline spinner', () => {
        test('Inline Spinner default snapshot', () => {
            const { asFragment } = render(
                <Spinner inline
                         small
                         show />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        describe('prop: open', () => {
            test(`Inline Spinner not shown snapshot`, () => {
                const { asFragment } = render(
                    <Spinner inline
                             small/>
                )

                expect(asFragment()).toMatchSnapshot()
            })

            test(`Inline Spinner shown snapshot`, () => {
                const { asFragment } = render(
                    <Spinner inline
                             small
                             show />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })

        describe('prop: small', () => {
            test(`Inline Spinner with large spinner snapshot`, () => {
                const { asFragment } = render(
                    <Spinner inline
                             show />
                )

                expect(asFragment()).toMatchSnapshot()
            })
            test(`Inline Spinner with small spinner snapshot`, () => {
                const { asFragment } = render(
                    <Spinner inline
                             small
                             show />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })

        describe('colors', () => {
            const colors = ['commerce', 'error']

            colors.forEach((color) => {
                test(`Inline Spinner ${color} theme snapshot`, () => {
                    const { asFragment } = render(
                        <Spinner inline
                                 show
                                 small
                                 color={color} />
                    )

                    expect(asFragment()).toMatchSnapshot()
                })
            })
        })

        describe('themes', () => {
            const themes = ['light', 'dark']

            themes.forEach((theme) => {
                test(`Inline Spinner ${theme} theme snapshot`, () => {
                    const { asFragment } = render(
                        <ThemeProvider theme={theme}>
                            <React.Fragment>
                                <Spinner inline
                                         small
                                         show />
                            </React.Fragment>
                        </ThemeProvider>
                    )

                    expect(asFragment()).toMatchSnapshot()
                })
            })
        })
    })

})
