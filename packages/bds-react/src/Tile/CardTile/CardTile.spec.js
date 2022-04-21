import * as React from 'react'
import { render } from '../../../test-utils'
import { ThemeProvider } from '../../ThemeProvider'
import CardTile from './CardTile'

describe('CardTile Snapshots', () => {
    test('CardTile default snapshot', () => {
        const { asFragment } = render(
            <CardTile>
                <p>Hello World</p>
            </CardTile>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`CardTile  theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <CardTile>
                                <p>Hello World</p>
                            </CardTile>
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: variant', () => {
        const colors = ['default', 'subdued']

        colors.forEach((color) => {
            test(`CardTile color snapshot`, () => {
                const { asFragment } = render(
                    <CardTile color={color}>
                        <p>Hello World</p>
                    </CardTile>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        test(`CardTile Disabled snapshot`, () => {
            const { asFragment } = render(
                <CardTile disabled>
                    <p>Hello World</p>
                </CardTile>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('extra props', () => {
        test('CardTile DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <CardTile
                    id='id'
                    className='classname'>
                    <p>Hello World</p>
                </CardTile>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})