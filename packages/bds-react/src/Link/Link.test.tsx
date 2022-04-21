/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Link from './Link'

describe('Link Tests', () => {
    it('renders', () => {
        const { getByText } = render(
            <Link to="#">
                Link
            </Link>
        )

        const link = getByText('Link')

        expect(link).toBeInTheDocument()
    })

    describe('event: focus', () => {
        it('should trigger `onFocus` when enabled', () => {
            const onFocusSpy = jest.fn()
            const { getByText } = render(
                <Link to="#" onFocus={onFocusSpy}>
                    Link
                </Link>
            )

            const link = getByText('Link')

            fireEvent.focus(link)

            expect(onFocusSpy).toHaveBeenCalledTimes(1)
        })
    })

    describe('event: click', () => {
        it('should trigger `onClick` when enabled', () => {
            const onClickSpy = jest.fn()
            const { getByText } = render(
                <Link 
                    onClick={onClickSpy}
                >
                    Link
                </Link>
            )

            const link = getByText('Link')

            fireEvent.click(link)

            expect(onClickSpy).toHaveBeenCalledTimes(1)
        })

        it('triggers `onClick` and `to` navigation when clicked and defined', () => {
            const onClickSpy = jest.fn()

            const { getByText } = render(
                <Link
                    to="http://google.com"
                    onClick={onClickSpy}
                >
                    Link
                </Link>
            )

            const link = getByText('Link').parentNode

            fireEvent.click(link)

            expect(onClickSpy).toHaveBeenCalledTimes(1)
        })
    })

    describe('keyboard accessibility', () => {
        it('triggers `onClick` when Enter is pressed on the element', () => {
            const onClickSpy = jest.fn()

            const { getByRole } = render(
                <Link 
                    onClick={onClickSpy}
                >
                    Link
                </Link>
            )

            const link = getByRole('button')

            link.focus()

            fireEvent.keyDown(document.activeElement || document.body, {
                key: 'Enter'
            })

            expect(onClickSpy).toHaveBeenCalled()
        })

        it('triggers `onClick` when Space is pressed on the element', () => {
            const onClickSpy = jest.fn()

            const { getByRole } = render(
                <Link
                    onClick={onClickSpy}
                >
                    Link
                </Link>
            )

            const link = getByRole('button')

            link.focus()

            fireEvent.keyDown(document.activeElement || document.body, {
                key: ' '
            })

            expect(onClickSpy).toHaveBeenCalled()
        })

        it('triggers `onKeyDown` when K is pressed on the element', () => {
            const onKeyDownSpy = jest.fn()

            const { getByRole } = render(
                <Link
                    onKeyDown={onKeyDownSpy}
                >
                    Link
                </Link>
            )

            const link = getByRole('button')

            link.focus()

            fireEvent.keyDown(document.activeElement || document.body, {
                key: 'K'
            })

            expect(onKeyDownSpy).toHaveBeenCalled()
        })
    })
})
