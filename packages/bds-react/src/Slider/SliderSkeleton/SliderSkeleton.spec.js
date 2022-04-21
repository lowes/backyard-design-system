import * as React from 'react'
import { render } from '../../../test-utils'
import SliderSkeleton from './SliderSkeleton'

describe('SliderSkeleton Snapshots', () => {
    test('SliderSkeleton default snapshot', () => {
        const { asFragment } = render(
            <SliderSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('SliderSkeleton with input option', () => {
        const { asFragment } = render(
            <SliderSkeleton showInput />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('SliderSkeleton animate snapshot', () => {
        const { asFragment } = render(
            <SliderSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('SliderSkeleton vertical orientation', () => {
        const { asFragment } = render(
            <SliderSkeleton orientation='vertical' />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})