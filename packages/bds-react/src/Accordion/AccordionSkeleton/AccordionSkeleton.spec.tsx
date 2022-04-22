import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import AccordionSkeleton from './AccordionSkeleton'
import type { AccordionSkeletonProps } from './AccordionSkeleton'

describe('AccordionSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <AccordionSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('size snapshots', () => {
        const sizes: AccordionSkeletonProps['size'][] = ['small', 'medium', 'large']

        sizes.forEach((size) => {
            const { asFragment } = render(<AccordionSkeleton size={size} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
