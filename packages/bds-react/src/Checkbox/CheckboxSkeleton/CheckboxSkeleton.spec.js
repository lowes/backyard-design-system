import * as React from 'react'
import { render } from '../../../test-utils'
import CheckboxSkeleton from './CheckboxSkeleton'

describe('CheckboxSkeleton Snapshots', () => {
    test('CheckboxSkeleton default snapshot', () => {
        const { asFragment } = render(
            <CheckboxSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('CheckboxSkeleton animate snapshot', () => {
        const { asFragment } = render(
            <CheckboxSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('CheckboxSkeleton with label snapshot', () => {
        const { asFragment } = render(
            <CheckboxSkeleton withLabel labelWidth='8rem' />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('CheckboxSkeleton with label snapshot', () => {
        const { asFragment } = render(
            <CheckboxSkeleton withLabel labelWidth='8rem' withHelper helperWidth='6rem' />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})