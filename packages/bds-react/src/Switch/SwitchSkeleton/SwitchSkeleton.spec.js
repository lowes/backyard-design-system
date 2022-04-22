import * as React from 'react'
import { render } from '../../../test-utils'
import SwitchSkeleton from './SwitchSkeleton'

describe('SwitchSkeleton Snapshots', () => {
    test('SwitchSkeleton default snapshot', () => {
        const { asFragment } = render(
            <SwitchSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('SwitchSkeleton animate snapshot', () => {
        const { asFragment } = render(
            <SwitchSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('SwitchSkeleton with label', () => {
        const { asFragment } = render(
            <SwitchSkeleton withLabel={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})