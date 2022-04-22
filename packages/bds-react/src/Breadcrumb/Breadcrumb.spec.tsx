import * as React from 'react'

import { render } from '../../test-utils'

import ThemeProvider from '../ThemeProvider'

import Breadcrumb from './Breadcrumb'

const crumbs = [
    {
        label: 'Appliances',
        to: '/',
        className: 'crumb-1',
    },
    {
        label: 'Refrigerators',
        to: '/',
        className: 'crumb-2',
    },
    {
        label: 'French Door Refrigerators',
        to: '/',
        className: 'crumb-3 currentPage',
    },
]

describe('Breadcrumb Snapshots', () => {
    test('Breadcrumb default snapshot', () => {
        const { asFragment } = render(<Breadcrumb crumbs={crumbs} className="custom-class-name" />)

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`Breadcrumb ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Breadcrumb crumbs={crumbs} className="custom-class-name" />
                        </React.Fragment>
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: render', () => {
        const renders = ['auto', 'desktop', 'mobile'] as const

        renders.forEach((rend) => {
            test(`Breadcrumb ${rend} 'render' snapshot`, () => {
                const { asFragment } = render(<Breadcrumb crumbs={crumbs} render={rend} />)

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
