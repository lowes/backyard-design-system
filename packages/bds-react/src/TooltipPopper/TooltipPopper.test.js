import * as React from 'react'
import { render, fireEvent, act } from '../../test-utils'
import Tooltip from '../Tooltip'
import TooltipPopper from './TooltipPopper'

describe('TooltipPopper Tests', () => {
    it('renders', async () => {
        let queryByText
        
        await act(async () => {
            const { queryByText: query } = render(
                <TooltipPopper
                    open
                    tooltip={(
                        <Tooltip>
                            Subtitle
                        </Tooltip>
                    )}
                >
                    <div>Child</div>
                </TooltipPopper>
            )

            queryByText = query
        })

        const child = queryByText('Child')
        const subtitle = queryByText('Subtitle')

        expect(child).toBeInTheDocument()
        expect(subtitle).toBeInTheDocument()
    })

    describe('event: MouseEnter', () => {
        it('should be not be in the Document by default', () => {
            const { queryByText } = render(
                <TooltipPopper
                    tooltip={(
                        <Tooltip>
                            Subtitle
                        </Tooltip>
                    )}
                >
                    <div>Child</div>
                </TooltipPopper>
            )

            const subtitle = queryByText('Subtitle')

            expect(subtitle).not.toBeInTheDocument()
        })

        it('should fire onOpen and onClose w/ delayed mouse effect', async () => {
            jest.useFakeTimers()

            const onOpenSpy = jest.fn()
            const onCloseSpy = jest.fn()

            const { queryByText } = render(
                <TooltipPopper
                    tooltip={(
                        <Tooltip>
                            Subtitle
                        </Tooltip>
                    )}
                    onOpen={onOpenSpy}
                    onClose={onCloseSpy}
                >
                    <div>Child</div>
                </TooltipPopper>
            )

            const child = queryByText('Child')

            expect(onOpenSpy).toHaveBeenCalledTimes(0)
            expect(onCloseSpy).toHaveBeenCalledTimes(0)

            // Mouse enters child

            await act(async () => {
                fireEvent.mouseEnter(child)
            })

            await act(async () => {
                jest.runAllTimers()
            })

            expect(onOpenSpy).toHaveBeenCalledTimes(1)

            // Mouse leaves child

            await act(async () => {
                fireEvent.mouseLeave(child)
            })

            await act(async () => {
                jest.runAllTimers()
            })

            expect(onCloseSpy).toHaveBeenCalledTimes(1)
        })
    })
})
