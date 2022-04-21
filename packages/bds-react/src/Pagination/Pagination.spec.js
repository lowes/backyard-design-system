import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Pagination from '../Pagination'

describe('Pagination Snapshots', () => {
    test('Pagination default snapshot', () => {
        const { asFragment } = render(
            <Pagination
                count={10}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Pagination mid default snapshot', () => {
        const { asFragment } = render(
            <Pagination
                page={5}
                count={10}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Pagination end default snapshot', () => {
        const { asFragment } = render(
            <Pagination
                page={9}
                count={10}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Pagination default page snapshot', () => {
        const { asFragment } = render(
            <Pagination
                defaultPage={5}
                count={10}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Pagination ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Pagination
                                defaultPage={5}
                                count={10}
                            />
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: variant', () => {
        const variants = [
            'numbered',
            'dotted',
            'condensed',
        ]

        variants.forEach((variant) => {
            test(`Pagination ${variant} variant snapshot`, () => {
                const { asFragment } = render(
                    <Pagination
                        variant={variant}
                        count={6}
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: size', () => {
        const sizes = [
            'small',
            'medium'
        ]

        sizes.forEach((size) => {
            test(`Pagination ${size} size snapshot`, () => {
                const { asFragment } = render(
                    <Pagination
                        variant="dotted"
                        size={size}
                        count={6}
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: hidePreviousButton and hideNextButton', () => {
        test(`Pagination hide previous and next button snapshot`, () => {
            const { asFragment } = render(
                <Pagination
                    hidePreviousButton
                    hideNextButton
                    count={6}
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('prop: siblingCount', () => {
        const counts = [0, 1, 2]

        counts.forEach((count) => {
            test(`Pagination ${count} siblingCount snapshot`, () => {
                const { asFragment } = render(
                    <Pagination
                        siblingCount={count}
                        count={36}
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: boundaryCount', () => {
        const counts = [1, 2]

        counts.forEach((count) => {
            test(`Pagination ${count} boundaryCount snapshot`, () => {
                const { asFragment } = render(
                    <Pagination
                        boundaryCount={count}
                        count={36}
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
