import * as React from 'react'
import { AccountOutlined } from '@lowes-tech/bds-icons'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Pill from './Pill'

describe('Pill Snapshots', () => {
    test('Pill default snapshot', () => {
        const { asFragment } = render(
            <Pill>
                <AccountOutlined />
            </Pill>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Pill ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Pill />
                            <Pill value={9} />
                            <Pill value={99} />
                            <Pill value={999} />
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: variant', () => {
        const variants = ['filled', 'outlined', 'indicator']

        variants.forEach((variant) => {
            test(`Pill ${variant} variant snapshot`, () => {
                const { asFragment } = render(
                    <Pill
                        variant={variant}
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: variant', () => {
        const colors = ['dark-blue', 'blue', 'light-blue', 'interactive', 'green', 'red', 'lfp-yellow', 'gold', 'neutral']

        colors.forEach((color) => {
            test(`Pill ${color} color snapshot`, () => {
                const { asFragment } = render(
                    <Pill
                        color={color}
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('Pill className snapshot', () => {
            const { asFragment } = render(
                <Pill className="test-class" />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Pill wrapperProps snapshot', () => {
            const { asFragment } = render(
                <Pill
                    wrapperProps={{
                        style: {
                            opacity: '0'
                        }
                    }}
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
