import * as React from 'react'
import CreditCard from '@lowes-tech/bds-icons/CreditCard'

import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'

import ProgressStepper from './ProgressStepper'
import ProgressStep from './ProgressStep'

describe('ProgressStep Snapshots', () => {
    test('default snapshot', () => {
        const { asFragment } = render(
            <ProgressStepper>
                <ProgressStep />
            </ProgressStepper>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <ProgressStepper>
                            <ProgressStep />
                        </ProgressStepper>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: state', () => {
        const states = ['enabled', 'active', 'complete', 'success', 'error']

        states.forEach((state) => {
            test(`state ${state} snapshot`, () => {
                const { asFragment } = render(
                    <ProgressStepper>
                        <ProgressStep
                            state={state}
                            title="Step One"
                            caption="caption for step one"
                        />
                    </ProgressStepper>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        test(`disabled snapshot`, () => {
            const { asFragment } = render(
                <ProgressStepper>
                    <ProgressStep
                        disabled
                        title="Step One"
                        caption="caption for step one"
                    />
                </ProgressStepper>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('prop: icon', () => {
        test(`icon snapshot`, () => {
            const { asFragment } = render(
                <ProgressStepper>
                    <ProgressStep
                        icon={<CreditCard />}
                        title="Step One"
                        caption="caption for step one"
                    />
                </ProgressStepper>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('prop: label', () => {
        test(`label snapshot`, () => {
            const { asFragment } = render(
                <ProgressStepper>
                    <ProgressStep
                        label="A"
                        title="Step A"
                        caption="caption for step A"
                    />
                </ProgressStepper>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('other props', () => {
        test('DOM id, className snapshot', () => {
            const { asFragment } = render(
                <ProgressStepper>
                    <ProgressStep
                        id="test-id"
                        className="test-class"
                        title="Step One"
                        caption="caption for step one"
                    />
                </ProgressStepper>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
