import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { render, fireEvent } from '../../test-utils'

import Typography from '../Typography'
import Accordion from './Accordion'

describe('Accordion Tests', () => {
    it('renders', () => {
        const { getByText } = render (
            <Accordion
                title='Title'
                openIcon='plus'
                closeIcon='minus'>
                <Typography>Children</Typography>
            </Accordion>
        )

        const title = getByText('Title')

        expect(title).toBeInTheDocument()
    })

    describe('prop: keepMounted', () => {
        it('should keep children mounted', () => {
            const { container } = render(
                <Accordion
                    title='Title'
                    openIcon='chevronDown'
                    closeIcon='chevronUp'
                    keepMounted={true}>
                    <Typography>Children</Typography>
                </Accordion>
            )
    
            const children = container.querySelector('.accordion-content')
    
            expect(children).toBeInTheDocument()
        })
    })

    describe('onclick', () => {
        it('should have the open className when svg is clicked to open accordion', () => {
            const { container } = render(
                <Accordion
                    title='Title'>
                    Children
                </Accordion>
            )

            const accordion = container.querySelector('.accordion')
            const icon = container.querySelector('.accordion-icon')

            expect(accordion.classList.contains('opened')).toBe(false)

            act(() => {
                fireEvent.click(icon)
            })

            expect(accordion.classList.contains('opened')).toBe(true)
        })

        it('should have open className when open is true', () => {
            const { container } = render(
                <Accordion
                    title='Title'
                    open={true}>
                    Children
                </Accordion>
            )

            const accordion = container.querySelector('.accordion')

            expect(accordion.classList.contains('opened')).toBe(true)
        })

        it('should have `.accordion-content` when svg is clicked', () => {
            const { container } = render(
                <Accordion
                    title='Title'>
                    Children
                </Accordion>
            )

            const svg = container.querySelector('svg')
            
            fireEvent.click(svg)

            const children = container.querySelector('.accordion-content')

            expect(children).toBeInTheDocument()
        })

        it('should trigger `onClick`, `onOpen`, and `onClose` appropriately', () => {
            const onClickSpy = jest.fn()
            const onOpenSpy = jest.fn()
            const onCloseSpy = jest.fn()

            const { getByText } = render(
                <Accordion
                    title='Accordion'
                    onClick={onClickSpy}
                    onOpen={onOpenSpy}
                    onClose={onCloseSpy}
                >
                    Children
                </Accordion>
            )

            expect(onClickSpy).toHaveBeenCalledTimes(0)
            expect(onOpenSpy).toHaveBeenCalledTimes(0)
            expect(onCloseSpy).toHaveBeenCalledTimes(1)

            const button = getByText('Accordion')

            fireEvent.click(button)

            expect(onClickSpy).toHaveBeenCalledTimes(1)
            expect(onOpenSpy).toHaveBeenCalledTimes(1)
            expect(onCloseSpy).toHaveBeenCalledTimes(1)

            fireEvent.click(button)

            expect(onClickSpy).toHaveBeenCalledTimes(2)
            expect(onOpenSpy).toHaveBeenCalledTimes(1)
            expect(onCloseSpy).toHaveBeenCalledTimes(2)
        })
    })
})