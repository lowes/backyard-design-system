import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import StepperSkeleton from './StepperSkeleton'

describe('StepperSkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <StepperSkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('renders with hidden buttons', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <StepperSkeleton hideButtons animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('renders with label', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <StepperSkeleton label animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })
})
