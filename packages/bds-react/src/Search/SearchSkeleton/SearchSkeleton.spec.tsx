import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import SearchSkeleton from './SearchSkeleton'
import type { SearchSkeletonProps } from './SearchSkeleton'

describe('SearchSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <SearchSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('size snapshots', () => {
        const sizes: SearchSkeletonProps['size'][] = ['small', 'medium', 'large']

        sizes.forEach((size) => {
            const { asFragment } = render(<SearchSkeleton size={size} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
