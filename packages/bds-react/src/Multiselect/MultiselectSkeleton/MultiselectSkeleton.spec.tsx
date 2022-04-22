import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import MultiselectSkeleton from './MultiselectSkeleton'
import type { MultiselectSkeletonProps } from './MultiselectSkeleton'

describe('MultiselectSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <MultiselectSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('size snapshots', () => {
        const sizes: MultiselectSkeletonProps['size'][] = ['small', 'medium', 'large']

        sizes.forEach((size) => {
            const { asFragment } = render(<MultiselectSkeleton size={size} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
