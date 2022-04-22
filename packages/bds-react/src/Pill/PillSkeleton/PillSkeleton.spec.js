import * as React from 'react'
import { render } from '../../../test-utils'
import PillSkeleton from './PillSkeleton'

describe('Pill Snapshots', () => {
    test('Pill default snapshot', () => {
        const { asFragment } = render(
            <PillSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Pill indicator snapshot', () => {
        const { asFragment } = render(
            <PillSkeleton variant="indicator" />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Pill animate snapshot', () => {
        const { asFragment } = render(
            <PillSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})