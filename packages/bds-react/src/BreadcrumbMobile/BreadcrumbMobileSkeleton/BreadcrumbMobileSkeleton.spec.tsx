import * as React from 'react'

import { render } from '../../../test-utils'

import BreadcrumbMobileSkeleton from './BreadcrumbMobileSkeleton'

describe('BreadcrumbMobileSkeleton Snapshots', () => {
    test('BreadcrumbMobileSkeleton default snapshot', () => {
        const { asFragment } = render(<BreadcrumbMobileSkeleton />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('BreadcrumbMobileSkeleton animate snapshot', () => {
        const { asFragment } = render(<BreadcrumbMobileSkeleton animate={true} />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('BreadcrumbMobileSkeleton custom width snapshot', () => {
        const { asFragment } = render(<BreadcrumbMobileSkeleton width="30rem" />)

        expect(asFragment()).toMatchSnapshot()
    })
})
