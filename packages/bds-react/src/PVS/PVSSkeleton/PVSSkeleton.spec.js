import * as React from 'react'
import { render } from '../../../test-utils'
import PVSSkeleton from './PVSSkeleton'

describe('PVSSkeleton Snapshots', () => {
    test('PVSSkeleton default snapshot', () => {
        const { asFragment } = render(
            <PVSSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('PVSSkeleton animate snapshot', () => {
        const { asFragment } = render(
            <PVSSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('PVSSkeleton multiple options snapshot', () => {
        const { asFragment } = render(
            <PVSSkeleton items={5} />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})