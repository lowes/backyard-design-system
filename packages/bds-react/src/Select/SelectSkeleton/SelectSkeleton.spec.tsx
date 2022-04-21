import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import SelectSkeleton from './SelectSkeleton'
import type { SelectSkeletonProps } from './SelectSkeleton'

describe('SelectSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <SelectSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('size snapshots', () => {
        const sizes: SelectSkeletonProps['size'][] = ['small', 'medium', 'large']

        sizes.forEach((size) => {
            const { asFragment } = render(<SelectSkeleton size={size} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
