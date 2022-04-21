import * as React from 'react'
import { LocationOutlined } from '@lowes-tech/bds-icons'

import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'

import MenuItem from './MenuItem'

describe('MenuItem Snapshots', () => {
    test('MenuItem default snapshot', () => {
        const { asFragment } = render(<MenuItem>Item 1</MenuItem>)

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`MenuItem ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <MenuItem>Item 1</MenuItem>
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    test('MenuItem disabled snapshot', () => {
        const { asFragment } = render(<MenuItem disabled>Item 1</MenuItem>)

        expect(asFragment()).toMatchSnapshot()
    })

    test('MenuItem icon before snapshot', () => {
        const { asFragment } = render(<MenuItem iconBefore={<LocationOutlined />}>Item 1</MenuItem>)

        expect(asFragment()).toMatchSnapshot()
    })

    test('MenuItem icon after snapshot', () => {
        const { asFragment } = render(<MenuItem iconAfter={<LocationOutlined />}>Item 1</MenuItem>)

        expect(asFragment()).toMatchSnapshot()
    })

    test('MenuItem label snapshot', () => {
        const { asFragment } = render(<MenuItem label="Item 1" />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('MenuItem component override snapshot', () => {
        const { asFragment } = render(<MenuItem component="div">Item 1</MenuItem>)

        expect(asFragment()).toMatchSnapshot()
    })

    describe('extra props', () => {
        test('MenuItem className snapshot', () => {
            const { asFragment } = render(<MenuItem className="test-class">Item 1</MenuItem>)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
