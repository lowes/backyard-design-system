import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import DatePickerSkeleton from './DatePickerSkeleton'
import type { DatePickerSkeletonProps } from './DatePickerSkeleton'

describe('DatePickerSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <DatePickerSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('size snapshots', () => {
        const sizes: DatePickerSkeletonProps['size'][] = ['small', 'medium', 'large']

        sizes.forEach((size) => {
            const { asFragment } = render(<DatePickerSkeleton size={size} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
