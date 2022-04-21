import * as React from 'react'

import { render } from '../../test-utils'

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

describe('BreadcrumbMobile Tests', () => {
    it('renders', () => {
        const { getByText } = render(
            <BreadcrumbMobile crumbs={crumbs} />
        )

        const crumb1 = getByText('Appliances')
        const crumb2 = getByText('Refrigerators')
        const crumb3 = getByText('French Door Refrigerators')

        expect(crumb1).toBeInTheDocument()
        expect(crumb2).toBeInTheDocument()
        expect(crumb3).toBeInTheDocument()
    })
})
