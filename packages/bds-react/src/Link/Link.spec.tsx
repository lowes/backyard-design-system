/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import Bookmark from '@lowes-tech/bds-icons/BookmarkOutlined'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Link from './Link'

describe('Link Snapshots', () => {
    test('Link default snapshot', () => {
        const { asFragment } = render(
            <Link to="#">
                Link
            </Link>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`Link ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <Link to="#">
                            Link
                        </Link>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: icons', () => {
        test(`Link iconBefore snapshot`, () => {
            const { asFragment } = render(
                <Link 
                    to="#"
                    iconBefore={<Bookmark />}
                >
                    Link
                </Link>
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test(`Link iconAfter snapshot`, () => {
            const { asFragment } = render(
                <Link
                    to="#"
                    iconAfter={<Bookmark />}
                >
                    Link
                </Link>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('prop: color', () => {
        const types = ['interactive', 'primary', 'variant', 'link'] as const
        
        types.forEach((type) => {
            test(`Link type ${type} snapshot`, () => {
                const { asFragment } = render(
                    <Link to="#">
                        Link
                    </Link>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: size', () => {
        const sizes = ['small', 'medium'] as const
        
        sizes.forEach((size) => {
            test(`Link size ${size} snapshot`, () => {
                const { asFragment } = render(
                    <Link to="#">
                        Link
                    </Link>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('other props', () => {
        test('Link DOM id, className snapshot', () => {
            const { asFragment } = render(
                <Link 
                    to="#"
                    id="link-id"
                    className="link-classname"
                >
                    Link
                </Link>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
