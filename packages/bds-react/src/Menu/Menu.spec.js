import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'

import MenuItem from '../MenuItem'

import Menu from './Menu'

describe('Menu Snapshots', () => {
    test('Menu default snapshot', () => {
        const { asFragment } = render(
            <Menu>
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
                <MenuItem>Item 4</MenuItem>
            </Menu>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Menu items snapshot', () => {
        const { asFragment } = render(
            <Menu
                items={[
                    { label: 'Item 1' },
                    { label: 'Item 2' },
                    { label: 'Item 3' },
                    { label: 'Item 4' },
                ]}
            />,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Menu ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <Menu>
                            <MenuItem>Item 1</MenuItem>
                            <MenuItem>Item 2</MenuItem>
                            <MenuItem>Item 3</MenuItem>
                            <MenuItem>Item 4</MenuItem>
                        </Menu>
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    test('Menu renderItem override snapshot', () => {
        const { asFragment } = render(
            <Menu className="test-class" renderItem={(item) => <div {...item} />}>
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
                <MenuItem>Item 4</MenuItem>
            </Menu>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('extra props', () => {
        test('Menu className snapshot', () => {
            const { asFragment } = render(
                <Menu className="test-class">
                    <MenuItem>Item 1</MenuItem>
                    <MenuItem>Item 2</MenuItem>
                    <MenuItem>Item 3</MenuItem>
                    <MenuItem>Item 4</MenuItem>
                </Menu>,
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Menu default selected snapshot', () => {
            const { asFragment } = render(
                <Menu className="test-class" defaultSelected={1}>
                    <MenuItem>Item 1</MenuItem>
                    <MenuItem>Item 2</MenuItem>
                    <MenuItem>Item 3</MenuItem>
                    <MenuItem>Item 4</MenuItem>
                </Menu>,
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
