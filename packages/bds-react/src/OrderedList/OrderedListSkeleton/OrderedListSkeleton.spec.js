import * as React from 'react'
import { render } from '../../../test-utils'
import OrderedListSkeleton from './OrderedListSkeleton'

describe('OrderedListSkeleton Snapshots', () => {
    test('OrderedListSkeleton default snapshot', () => {
        const { asFragment } = render(
            <OrderedListSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('OrderedListSkeleton animate snapshot', () => {
        const { asFragment } = render(
            <OrderedListSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('OrderedListSkeleton multiple options snapshot', () => {
        const { asFragment } = render(
            <OrderedListSkeleton items={5} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('OrderedListSkeleton custom width snapshot', () => {
        const { asFragment } = render(
            <OrderedListSkeleton width='30rem' />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('OrderedListSkeleton comfort density snapshot', () => {
        const { asFragment } = render(
            <OrderedListSkeleton density='comfort' />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('OrderedListSkeleton condensed density snapshot', () => {
        const { asFragment } = render(
            <OrderedListSkeleton density='condensed' />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})