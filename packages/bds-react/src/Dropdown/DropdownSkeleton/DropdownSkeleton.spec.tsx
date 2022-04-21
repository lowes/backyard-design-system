import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import DropdownSkeleton from './DropdownSkeleton'
import type { DropdownSkeletonProps } from './DropdownSkeleton'

describe('DropdownSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <DropdownSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('size snapshots', () => {
        const sizes: DropdownSkeletonProps['size'][] = ['small', 'medium', 'large']

        sizes.forEach((size) => {
            const { asFragment } = render(<DropdownSkeleton size={size} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
