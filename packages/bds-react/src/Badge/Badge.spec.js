import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Badge from './Badge'

describe('Badge Snapshots', () => {
    test('Badge default snapshot', () => {
        const { asFragment } = render(
            <Badge>
                Placeholder
            </Badge>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Badge ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Badge>
                                Placeholder
                            </Badge>
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: variant', () => {
        const variants = ['filled', 'outlined']

        variants.forEach((variant) => {
            test(`Badge ${variant} variant snapshot`, () => {
                const { asFragment } = render(
                    <Badge
                        variant={variant}
                    >
                        Placeholder
                    </Badge>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: color', () => {
        const colors = ['dark-blue', 'blue', 'light-blue', 'interactive', 'green', 'red', 'gold', 'lfp-yellow', 'neutral']

        colors.forEach((color) => {
            test(`Badge ${color} color snapshot`, () => {
                const { asFragment } = render(
                    <Badge
                        color={color}
                    >
                        Placeholder
                    </Badge>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('Badge className snapshot', () => {
            const { asFragment } = render(
                <Badge className="test-class">
                    Placeholder
                </Badge>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
