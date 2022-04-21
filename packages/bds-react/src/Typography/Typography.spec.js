import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Typography from './Typography'

describe('Typography Snapshots', () => {
    test('Typography default snapshot', () => {
        const { asFragment } = render(
            <Typography>
                Test
            </Typography>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Typography ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <Typography>
                            Test
                        </Typography>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: variant', () => {
        const variants = [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'h100',
            'h200',
            'h300',
            'h400',
            'h500',
            'h600',
            'h700',
            'body',
            'body_small',
            'body_medium',
            'article',
            'article_small',
            'article_medium',
            'caption',
            'caption_small',
            'caption_medium',
            'label',
            'helper'
        ]

        variants.forEach((variant) => {
            test(`Typography ${variant} variant snapshot`, () => {
                const { asFragment } = render(
                    <Typography variant={variant}>
                        Test
                    </Typography>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: color', () => {
        const colors = [
            'black',
            'primary',
            'text_primary',
            'secondary',
            'text_secondary',
            'tertiary',
            'text_tertiary',
            'link',
            'link',
            'error',
            'error',
            'success',
            'success',
            'disabled',
            'disabled',
            'white'
        ]

        colors.forEach((color) => {
            test(`Typography ${color} color snapshot`, () => {
                const { asFragment } = render(
                    <Typography variant="h2" color={color}>
                        The quick brown fox lept over the lazy dog
                    </Typography>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: align', () => {
        const aligns = [
            'left',
            'center',
            'right'
        ]

        aligns.forEach((align) => {
            test(`Typography ${align} align snapshot`, () => {
                const { asFragment } = render(
                    <Typography variant="h2" align={align}>
                        The quick brown fox lept over the lazy dog
                    </Typography>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: display', () => {
        const displays = [
            'block',
            'inline'
        ]

        displays.forEach((display) => {
            test(`Typography ${display} display snapshot`, () => {
                const { asFragment } = render(
                    <Typography variant="h2" display={display}>
                        The quick brown fox lept over the lazy dog
                    </Typography>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('Typography className snapshot', () => {
            const { asFragment } = render(
                <Typography className="test-class">
                    Test
                </Typography>
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Typography DOM id snapshot', () => {
            const { asFragment } = render(
                <Typography id="test">
                    Test
                </Typography>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
