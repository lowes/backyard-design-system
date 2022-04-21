import * as React from 'react'
import Location from '@lowes-tech/bds-icons/LocationOutlined'

import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'

import ListOption from './ListOption'

describe('ListOption Snapshots', () => {
    test('ListOption default snapshot', () => {
        const { asFragment } = render(
            <ListOption>Item 1</ListOption>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('sizes', () => {
        const sizes = ['normal', 'condensed']

        sizes.forEach(size => {
            test(`ListOpetion ${size} size snapshot`, () => {
                const { asFragment } = render(
                    <ListOption size={size}>Item 1</ListOption>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`ListOption ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <ListOption>Item 1</ListOption>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    test('ListOption disabled snapshot', () => {
        const { asFragment } = render(
            <ListOption disabled>Item 1</ListOption>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('ListOption selected snapshot', () => {
        const { asFragment } = render(
            <ListOption selected>Item 1</ListOption>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('ListOption icon snapshot', () => {
        const { asFragment } = render(
            <ListOption
                icon={<Location />}
            >
                Item 1
            </ListOption>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('ListOption component override snapshot', () => {
        const { asFragment } = render(
            <ListOption
                component="div"
            >
                Item 1
            </ListOption>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('extra props', () => {
        test('ListOption className snapshot', () => {
            const { asFragment } = render(
                <ListOption className="test-class">Item 1</ListOption>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})