import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import TextFieldSkeleton from './TextFieldSkeleton'
import type { TextFieldSkeletonProps } from './TextFieldSkeleton'

describe('TextFieldSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <TextFieldSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('size snapshots', () => {
        const sizes: TextFieldSkeletonProps['size'][] = ['small', 'medium', 'large', 'jumbo']

        sizes.forEach((size) => {
            const { asFragment } = render(<TextFieldSkeleton size={size} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
