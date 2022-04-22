import TagFilled from '@lowes-tech/bds-icons/TagFilled'
import * as React from 'react'
import { render } from '../../../test-utils'
import { ThemeProvider } from '../../ThemeProvider'
import LinkTile from './LinkTile'

describe('LinkTile Snapshots', () => {
    test('LinkTile default snapshot', () => {
        const { asFragment } = render(
            <LinkTile href='#'>
                <p>Hello World</p>
            </LinkTile>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`LinkTile  theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <LinkTile href='#'>
                                <p>Hello World</p>
                            </LinkTile>
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
            test(`LinkTile color snapshot`, () => {
                const { asFragment } = render(
                    <LinkTile href='#'
                              color={color}>
                        <p>Hello World</p>
                    </LinkTile>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        test(`LinkTile Disabled snapshot`, () => {
            const { asFragment } = render(
                <LinkTile href='#'
                          disabled>
                    <p>Hello World</p>
                </LinkTile>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('prop: disableIcon', () => {
        test(`LinkTile Disable Icon snapshot`, () => {
            const { asFragment } = render(
                <LinkTile href='#'
                          disableIcon>
                    <p>Hello World</p>
                </LinkTile>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('prop: icon', () => {
        test(`Change the LinkTile default icon snapshot`, () => {
            const { asFragment } = render(
                <LinkTile href='#' icon={<TagFilled/>}>
                    <p>Hello World</p>
                </LinkTile>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('extra props', () => {
        test('LinkTile DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <LinkTile href='#'
                          id='id'
                          className='classname'>
                    <p>Hello World</p>
                </LinkTile>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
