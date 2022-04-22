import * as React from 'react'
import { render } from '../../../test-utils'
import UnorderedListSkeleton from './UnorderedListSkeleton'

describe('UnorderedListSkeleton Snapshots', () => {
    test('UnorderedListSkeleton default snapshot', () => {
        const { asFragment } = render(
            <UnorderedListSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('UnorderedListSkeleton animate snapshot', () => {
        const { asFragment } = render(
            <UnorderedListSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('UnorderedListSkeleton multiple options snapshot', () => {
        const { asFragment } = render(
            <UnorderedListSkeleton items={5} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('UnorderedListSkeleton custom width snapshot', () => {
        const { asFragment } = render(
            <UnorderedListSkeleton width='30rem' />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('UnorderedListSkeleton comfort density snapshot', () => {
        const { asFragment } = render(
            <UnorderedListSkeleton density='comfort' />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('UnorderedListSkeleton condensed density snapshot', () => {
        const { asFragment } = render(
            <UnorderedListSkeleton density='condensed' />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})