import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Button from './Button'

describe('Button Tests', () => {
    it('renders', () => {
        const { getByRole } = render(
            <Button />
        )

        const button = getByRole('button')

        expect(button).toBeInTheDocument()
    })

    describe('event: focus', () => {
        it('should trigger `onFocus` when enabled', () => {
            const onFocusSpy = jest.fn()
            const { getByRole } = render(
                <Button onFocus={onFocusSpy}>
                    Test
                </Button>
            )

            const button = getByRole('button')

            fireEvent.focus(button)

            expect(onFocusSpy).toHaveBeenCalledTimes(1)
        })

        it('should not trigger `onFocus` when disabled', () => {
            const onFocusSpy = jest.fn()
            const { getByRole } = render(
                <Button disabled onFocus={onFocusSpy}>
                    Test
                </Button>
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
                <Button onClick={onClickSpy}>
                    Test
                </Button>,
            )

            const button = getByRole('button')

            button.focus()

            fireEvent.click(button) 
            fireEvent.keyDown(document.activeElement || document.body, {
                key: ' '
            })

            expect(onClickSpy).toHaveBeenCalled()
        })

        it('triggers `onClick` when Enter is pressed on the element', () => {
            const onClickSpy = jest.fn()
            const { getByRole } = render(
                <Button onClick={onClickSpy}>
                    Test
                </Button>,
            )

            const button = getByRole('button')

            button.focus()

            fireEvent.click(button)
            fireEvent.keyDown(document.activeElement || document.body, {
                key: 'Enter'
            })

            expect(onClickSpy).toHaveBeenCalled()
        })

        it('triggers `onKeyDown` when `K` is pressed on the element', () => {
            const onKeyDownSpy = jest.fn()
            const { getByRole } = render(
                <Button 
                    onKeyDown={onKeyDownSpy}
                >
                    Test
                </Button>,
            )

            const button = getByRole('button')

            button.focus()

            fireEvent.keyDown(document.activeElement || document.body, {
                key: 'K'
            })

            expect(onKeyDownSpy).toHaveBeenCalled()
        })

        it('doesn`t triger `onClick` or `onKeyDown` when disabled', () => {
            const onClickSpy = jest.fn()
            const onKeyDownSpy = jest.fn()

            const { getByRole } = render(
                <Button
                    disabled
                    onClick={onClickSpy}
                    onKeyDown={onKeyDownSpy}
                >
                    Test
                </Button>,
            )

            const button = getByRole('button')

            fireEvent.click(button)

            button.focus()

            fireEvent.keyDown(document.activeElement || document.body, {
                key: 'Enter'
            })

            expect(onKeyDownSpy).not.toHaveBeenCalled()
            expect(onClickSpy).not.toHaveBeenCalled()
        })

        it('submits form when enter key is clicked', () => {
            const onSubmitSpy = jest.fn(event => event.preventDefault())
            const { getByRole } = render(
                <form
                    onSubmit={onSubmitSpy}
                >
                    <Button type="submit">
                        Test
                    </Button>
                </form>
            )

            const button = getByRole('button')

            fireEvent.click(button, {
                key: 'Enter'
            })

            expect(onSubmitSpy).toHaveBeenCalled()
        })
    })
})
