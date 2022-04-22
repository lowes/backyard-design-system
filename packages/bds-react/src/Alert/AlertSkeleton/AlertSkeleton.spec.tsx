import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import AlertSkeleton from './AlertSkeleton'
import type { AlertSkeletonProps } from './AlertSkeleton'

describe('AlertSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <AlertSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('multiline snapshots', () => {
        const multilines: AlertSkeletonProps['multiline'][] = [false, true]

        multilines.forEach((multiline) => {
            const { asFragment } = render(<AlertSkeleton multiline={multiline} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
