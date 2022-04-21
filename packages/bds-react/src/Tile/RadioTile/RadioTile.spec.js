import * as React from 'react'
import { render } from '../../../test-utils'
import { ThemeProvider } from '../../ThemeProvider'
import RadioTile from './RadioTile'

describe('RadioTile Snapshots', () => {
    test('RadioTile default snapshot', () => {
        const { asFragment } = render(
            <RadioTile name='test'>
                <p>Hello World</p>
            </RadioTile>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`RadioTile  theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <RadioTile name='test'>
                                <p>Hello World</p>
                            </RadioTile>
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: color', () => {
        const colors = ['default', 'subdued']

        colors.forEach((color) => {
            test(`RadioTile color snapshot`, () => {
                const { asFragment } = render(
                    <RadioTile name='test' color={color}>
                        <p>Hello World</p>
                    </RadioTile>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        test(`RadioTile Disabled snapshot`, () => {
            const { asFragment } = render(
                <RadioTile name='test' disabled>
                    <p>Hello World</p>
                </RadioTile>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('extra props', () => {
        test('RadioTile DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <RadioTile 
                    name='test'
                    id='id'
                    className='classname'
                >
                    <p>Hello World</p>
                </RadioTile>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
