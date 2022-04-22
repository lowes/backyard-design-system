import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import PasswordSkeleton from './PasswordSkeleton'
import type { PasswordSkeletonProps } from './PasswordSkeleton'

describe('PasswordSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <PasswordSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('size snapshots', () => {
        const sizes: PasswordSkeletonProps['size'][] = ['small', 'medium', 'large', 'jumbo']

        sizes.forEach((size) => {
            const { asFragment } = render(<PasswordSkeleton size={size} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
