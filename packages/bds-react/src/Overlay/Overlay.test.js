import * as React from 'react'

import { render, fireEvent } from '../../test-utils'

import Overlay from './Overlay'

describe('Overlay Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <Overlay 
                open
                data-testid="overlay"
            />
        )

        const overlay = getByTestId('overlay')

        expect(overlay).toBeInTheDocument()
    })

    describe('prop: invisible', () => {
        it('should be visible by default', () => {
            const { getByTestId } = render(
                <Overlay
                    open
                    data-testid="overlay"
                />
            )

            const overlay = getByTestId('overlay')

            expect(overlay).toBeVisible()
        })

        it('should not be visible if flagged', () => {
            const { getByTestId } = render(
                <Overlay
                    open
                    invisible
                    data-testid="overlay"
                />
            )

            const overlay = getByTestId('overlay')

            expect(overlay).toBeVisible()
        })
    })

    describe('event: onClick', () => {
        it('should trigger `onClick` when defined', () => {
            const onClickSpy = jest.fn()
            const { getByTestId } = render(
                <Overlay
                    open
                    onClick={onClickSpy}
                    data-testid="overlay"
                />
            )

            const overlay = getByTestId('overlay')

            fireEvent.click(overlay)

            expect(onClickSpy).toHaveBeenCalledTimes(1)
        })
    })
})
