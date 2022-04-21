import * as React from 'react'
import { render } from '../../../test-utils'
import ToggleSkeleton from './ToggleSkeleton'

describe('ToggleSkeleton Snapshots', () => {
    test('ToggleSkeleton default snapshot', () => {
        const { asFragment } = render(
            <ToggleSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('ToggleSkeleton animate snapshot', () => {
        const { asFragment } = render(
            <ToggleSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('ToggleSkeleton custom width snapshot', () => {
        const { asFragment } = render(
            <ToggleSkeleton instances={4} />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})