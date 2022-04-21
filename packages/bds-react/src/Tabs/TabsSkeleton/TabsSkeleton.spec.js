import * as React from 'react'
import { render } from '../../../test-utils'
import TabsSkeleton from './TabsSkeleton'

describe('TabsSkeleton Snapshots', () => {
    test('TabsSkeleton default snapshot', () => {
        const { asFragment } = render(
            <TabsSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('TabsSkeleton animate snapshot', () => {
        const { asFragment } = render(
            <TabsSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('TabsSkeleton custom width snapshot', () => {
        const { asFragment } = render(
            <TabsSkeleton width='10rem' />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})