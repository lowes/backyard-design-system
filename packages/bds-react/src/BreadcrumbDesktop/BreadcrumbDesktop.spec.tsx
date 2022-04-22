import * as React from 'react'

import { render } from '../../test-utils'

import ThemeProvider from '../ThemeProvider'

import BreadcrumbDesktop from './BreadcrumbDesktop'

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

describe('BreadcrumbDesktop Snapshots', () => {
    test('BreadcrumbDesktop default snapshot', () => {
        const { asFragment } = render(
            <BreadcrumbDesktop crumbs={crumbs} className="custom-class-name" />,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`BreadcrumbDesktop ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <BreadcrumbDesktop crumbs={crumbs} className="custom-class-name" />
                        </React.Fragment>
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
