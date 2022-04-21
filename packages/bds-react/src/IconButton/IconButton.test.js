import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import IconButton from './IconButton'

describe('IconButton Tests', () => {
    it('renders', () => {
        const { getByRole } = render(
            <IconButton />
        )

        const button = getByRole('button')

        expect(button).toBeInTheDocument()
    })

    describe('event: focus', () => {
        it('should trigger `onFocus` when enabled', () => {
            const onFocusSpy = jest.fn()
            const { getByRole } = render(
                <IconButton onFocus={onFocusSpy}>
                    Test
                </IconButton>
            )

            const button = getByRole('button')

            fireEvent.focus(button)

            expect(onFocusSpy).toHaveBeenCalledTimes(1)
        })
        
        it('should not trigger `onFocus` when disabled', () => {
            const onFocusSpy = jest.fn()
            const { getByRole } = render(
                <IconButton disabled onFocus={onFocusSpy}>
                    Test
                </IconButton>
            )

            const button = getByRole('button')
            
            fireEvent.focus(button)

            expect(onFocusSpy).not.toHaveBeenCalled()
        })
    })

    describe('keyboard accessibility', () => {
        it('triggers `onClick` when Space is pressed on the element', () => {
            const onClickSpy = jest.fn()
            const { getByRole } = render(
                <IconButton onClick={onClickSpy}>
                    Test
                </IconButton>,
            )

            const button = getByRole('button')

            button.focus()

            fireEvent.click(button)
            fireEvent.keyDown(document.activeElement || document.body, {
                key: ' '
            })

            expect(onClickSpy).toHaveBeenCalled()
        })
    })
})
