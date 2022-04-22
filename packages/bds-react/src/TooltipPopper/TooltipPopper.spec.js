import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Tooltip from '../Tooltip'
import TooltipPopper from './TooltipPopper'
import { act } from 'react-dom/test-utils'

describe('TooltipPopper Snapshots', () => {
    test('TooltipPopper default snapshot', () => {
        const { asFragment } = render(
            <TooltipPopper
                id="test-popper"
                tooltip={(
                    <Tooltip>
                        Subtitle
                    </Tooltip>
                )}
            >
                <span>Child</span>
            </TooltipPopper>
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('TooltipPopper keepMounteded default snapshot', async () => {
        jest.useFakeTimers()

        const { asFragment } = render(
            <TooltipPopper
                id="test-popper"
                tooltip={(
                    <Tooltip>
                        Subtitle
                    </Tooltip>
                )}
                open
            >
                <span>Child</span>
            </TooltipPopper>
        )

        await act(async () => {
            jest.runAllTimers()
        })

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`TooltipPopper ${theme} theme snapshot`, async () => {
                jest.useFakeTimers()

                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <TooltipPopper
                                id="test-popper"
                                tooltip={(
                                    <Tooltip>
                                        Subtitle
                                    </Tooltip>
                                )}
                                open
                            >
                                <span>Child</span>
                            </TooltipPopper>
                        </React.Fragment>
                    </ThemeProvider>
                )

                await act(async () => {
                    jest.runAllTimers()
                })

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: placement', () => {
        const placements = [
            'top-start',
            'top',
            'top-end',
            'left',
            'right',
            'bottom-start',
            'bottom',
            'bottom-end'
        ]

        placements.forEach((placement) => {
            test(`TooltipPopper ${placement} placement snapshot`, async () => {
                jest.useFakeTimers()

                const { asFragment } = render(
                    <TooltipPopper
                        id="test-popper"
                        tooltip={(
                            <Tooltip>
                                Subtitle
                            </Tooltip>
                        )}
                        open
                        placement={placement}
                    >
                        <span>Child</span>
                    </TooltipPopper>
                )

                await act(async () => {
                    jest.runAllTimers()
                })

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disablePortal', () => {
        test(`TooltipPopper disabledPortal snapshot`, async () => {
            jest.useFakeTimers()

            const { asFragment } = render(
                <TooltipPopper
                    id="test-popper"
                    tooltip={(
                        <Tooltip>
                            Subtitle
                        </Tooltip>
                    )}
                    open
                    disablePortal
                >
                    <span>Child</span>
                </TooltipPopper>
            )

            await act(async () => {
                jest.runAllTimers()
            })

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('prop: keepMounted', () => {
        test(`TooltipPopper keepMounted snapshot`, async () => {
            jest.useFakeTimers()

            const { asFragment } = render(
                <TooltipPopper
                    id="test-popper"
                    tooltip={(
                        <Tooltip>
                            Subtitle
                        </Tooltip>
                    )}
                    open
                >
                    <span>Child</span>
                </TooltipPopper>
            )

            await act(async () => {
                jest.runAllTimers()
            })

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
