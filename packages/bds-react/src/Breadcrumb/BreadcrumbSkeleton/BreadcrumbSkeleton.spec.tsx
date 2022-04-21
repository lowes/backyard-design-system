import * as React from 'react'

import { render } from '../../../test-utils'

import BreadcrumbSkeleton from './BreadcrumbSkeleton'

describe('BreadcrumbSkeleton Snapshots', () => {
    test('BreadcrumbSkeleton default snapshot', () => {
        const { asFragment } = render(<BreadcrumbSkeleton />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('BreadcrumbSkeleton animate snapshot', () => {
        const { asFragment } = render(<BreadcrumbSkeleton animate={true} />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('BreadcrumbSkeleton custom width snapshot', () => {
        const { asFragment } = render(<BreadcrumbSkeleton width="30rem" />)

        expect(asFragment()).toMatchSnapshot()
    })

    describe('prop: render', () => {
        const renders = ['auto', 'desktop', 'mobile'] as const

        renders.forEach((rend) => {
            test(`Breadcrumb ${rend} 'render' snapshot`, () => {
                const { asFragment } = render(<BreadcrumbSkeleton render={rend} />)

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
