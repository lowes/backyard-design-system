import * as React from 'react'
import { render } from '../../../test-utils'
import LinkSkeleton from './LinkSkeleton'

describe('LinkSkeleton Snapshots', () => {
    test('LinkSkeleton default snapshot', () => {
        const { asFragment } = render(
            <LinkSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('LinkSkeleton animate snapshot', () => {
        const { asFragment } = render(
            <LinkSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('LinkSkeleton custom width snapshot', () => {
        const { asFragment } = render(
            <LinkSkeleton width='30rem' />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('LinkSkeleton height change snapshot', () => {
        const { asFragment } = render(
            <LinkSkeleton size='small' />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})