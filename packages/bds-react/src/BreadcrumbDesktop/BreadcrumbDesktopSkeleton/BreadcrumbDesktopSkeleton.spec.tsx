import * as React from 'react'
import { render } from '../../../test-utils'
import BreadcrumbDesktopSkeleton from './BreadcrumbDesktopSkeleton'

describe('BreadcrumbDesktopSkeleton Snapshots', () => {
    test('BreadcrumbDesktopSkeleton default snapshot', () => {
        const { asFragment } = render(<BreadcrumbDesktopSkeleton />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('BreadcrumbDesktopSkeleton animate snapshot', () => {
        const { asFragment } = render(<BreadcrumbDesktopSkeleton animate={true} />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('BreadcrumbDesktopSkeleton custom width snapshot', () => {
        const { asFragment } = render(<BreadcrumbDesktopSkeleton width="30rem" />)

        expect(asFragment()).toMatchSnapshot()
    })
})
