import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Select from './Select'
import Option from './Option'

describe('Select Snapshots', () => {
    test('Select default snapshot', () => {
        const { asFragment } = render(
            <Select
                id='id'
                className='className'>
                <Option value='1'>
                    One
                </Option>
            </Select>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('prop: variant', () => {
        const variants = ['outlined', 'filled']

        variants.forEach(variant => {
            test(`Select ${variant} variant snapshot`, () => {
                const { asFragment } = render(
                    <Select
                        id='id'
                        className='className'
                        variant={variant}>
                        <Option value='1'>
                            One
                        </Option>
                    </Select>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: shape', () => {
        const shapes = ['rounded', 'squared']

        shapes.forEach(shape => {
            test(`Select ${shape} shape snapshot`, () => {
                const { asFragment } = render(
                    <Select
                        id='id'
                        className='className'
                        shape={shape}>
                        <Option value='1'>
                            One
                        </Option>
                    </Select>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: state', () => {
        const states = ['default', 'error', 'success']

        states.forEach(state => {
            test(`Select ${state} state snapshot`, () => {
                const { asFragment } = render(
                    <Select
                        id='id'
                        className='className'
                        state={state}>
                        <Option value='1'>
                            One
                        </Option>
                    </Select>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: size', () => {
        const sizes = ['small', 'medium', 'large']

        sizes.forEach(size => {
            test(`Select ${size} size snapshot`, () => {
                const { asFragment } = render(
                    <Select
                        id='id'
                        className='className'
                        size={size}>
                        <Option value='1'>
                            One
                        </Option>
                    </Select>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Select ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <Select
                            id='id'
                            className='className'>
                            <Option value='1'>
                                One
                            </Option>
                        </Select>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})