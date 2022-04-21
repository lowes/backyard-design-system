import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import TextAreaSkeleton from './TextAreaSkeleton'
import type { TextAreaSkeletonProps } from './TextAreaSkeleton'

describe('TextAreaSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <TextAreaSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('renders with helper text', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <TextAreaSkeleton animate helperText />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('renders with max', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <TextAreaSkeleton animate max />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('renders with max and helper text', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <TextAreaSkeleton animate max helperText />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('rows snapshots', () => {
        const rows: TextAreaSkeletonProps['rows'][] = [4, 8, 12]

        rows.forEach((row) => {
            const { asFragment } = render(<TextAreaSkeleton rows={row} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
