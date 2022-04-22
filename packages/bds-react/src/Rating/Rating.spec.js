import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Rating from './Rating'

describe('Rating Snapshots', () => {
    test('Rating default snapshot', () => {
        const { asFragment } = render(
            <Rating value={2.5} name="test-radio-group"/>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Rating default interactive snapshot', () => {
        const { asFragment } = render(
            <Rating interactive defaultValue={2.5} name="test-radio-group"/>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Rating ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <Rating value={2.5} name="test-radio-group"/>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('sizes', () => {
        const sizes = ['jumbo', 'large', 'medium', 'small']

        sizes.forEach((size) => {
            test(`Rating ${size} size snapshot`, () => {
                const { asFragment } = render(
                    <Rating size={size}/>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('Rating className snapshot', () => {
            const { asFragment } = render(
                <Rating value={2.5} name="test-radio-group" className="test-class"/>
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Rating DOM id, name, value snapshot', () => {
            const { asFragment } = render(
                <Rating
                    interactive
                    value={2.5}
                    id="test-id"
                    name="test-name"
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
