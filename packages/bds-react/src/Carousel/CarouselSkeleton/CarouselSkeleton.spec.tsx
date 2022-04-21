import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import CarouselSkeleton from './CarouselSkeleton'
import type { CarouselSkeletonProps } from './CarouselSkeleton'

describe('CarouselSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <CarouselSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('prop snapshots', () => {
        const props: CarouselSkeletonProps[] = [{ hideButtons: true }, { hideScrollbar: true }]

        props.forEach((prop) => {
            const { asFragment } = render(<CarouselSkeleton {...prop} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
