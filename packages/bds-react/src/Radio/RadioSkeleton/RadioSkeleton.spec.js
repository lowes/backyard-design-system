import * as React from 'react'
import { render } from '../../../test-utils'
import RadioSkeleton from './RadioSkeleton'

describe('RadioSkeleton Snapshots', () => {
    test('RadioSkeleton default snapshot', () => {
        const { asFragment } = render(
            <RadioSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('RadioSkeleton animate snapshot', () => {
        const { asFragment } = render(
            <RadioSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('RadioSkeleton with label snapshot', () => {
        const { asFragment } = render(
            <RadioSkeleton withLabel labelWidth='8rem' />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('RadioSkeleton with label snapshot', () => {
        const { asFragment } = render(
            <RadioSkeleton withLabel labelWidth='8rem' withHelper helperWidth='6rem' />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})