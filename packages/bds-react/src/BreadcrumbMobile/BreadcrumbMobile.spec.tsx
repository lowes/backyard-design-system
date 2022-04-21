import * as React from 'react'

import { render } from '../../test-utils'

import ThemeProvider from '../ThemeProvider'

import BreadcrumbMobile from './BreadcrumbMobile'

const crumbs = [
    {
        label: 'Appliances',
        to: '/',
        className: 'crumb-1'
    },
    {
        label: 'Refrigerators',
        to: '/',
        className: 'crumb-2'
    },
    {
        label: 'French Door Refrigerators',
        to: '/',
        className: 'crumb-3 currentPage'
    }
]

describe('BreadcrumbMobile Snapshots', () => {
    test('BreadcrumbMobile default snapshot', () => {
        const { asFragment } = render(
            <BreadcrumbMobile crumbs={crumbs} className='custom-class-name' />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`BreadcrumbMobile ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <BreadcrumbMobile crumbs={crumbs} className='custom-class-name' />
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
