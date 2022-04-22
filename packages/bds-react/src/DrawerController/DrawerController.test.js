import * as React from 'react'
import { Settings } from '@lowes-tech/bds-icons'

import { render, fireEvent } from '../../test-utils'

import { Drawer, DrawerBody, DrawerHeader, DrawerFooter } from '../Drawer'
import Overlay from '../Overlay'

import DrawerController from './DrawerController'

describe('Drawer Tests', () => {
    it('renders when open', () => {
        const { getByText } = render(
            <DrawerController
                open
                drawer={
                    <Drawer>
                        <DrawerHeader label="Label" icon={<Settings />}>
                            Drawer Header
                        </DrawerHeader>
                        <DrawerBody>Drawer Body</DrawerBody>
                        <DrawerFooter>Drawer Footer</DrawerFooter>
                    </Drawer>
                }
            />,
        )

        const header = getByText('Drawer Header')
        const body = getByText('Drawer Body')
        const footer = getByText('Drawer Footer')

        expect(header).toBeInTheDocument()
        expect(body).toBeInTheDocument()
        expect(footer).toBeInTheDocument()
    })

    it('does not render when closed', () => {
        const { queryByText } = render(
            <DrawerController
                open={false}
                drawer={
                    <Drawer>
                        <DrawerHeader>Drawer Header</DrawerHeader>
                        <DrawerBody>Drawer Body</DrawerBody>
                        <DrawerFooter>Drawer Footer</DrawerFooter>
                    </Drawer>
                }
            />,
        )

        const header = queryByText('Drawer Header')
        const body = queryByText('Drawer Body')
        const footer = queryByText('Drawer Footer')

        expect(header).not.toBeInTheDocument()
        expect(body).not.toBeInTheDocument()
        expect(footer).not.toBeInTheDocument()
    })

    describe('event: onClose', () => {
        it('should trigger `onClose` when defined and close button clicked', () => {
            const onCloseSpy = jest.fn()
            const { getByRole, queryByText } = render(
                <DrawerController
                    open
                    onClose={onCloseSpy}
                    drawer={
                        <Drawer>
                            <DrawerHeader>Drawer Header</DrawerHeader>
                            <DrawerBody>Drawer Body</DrawerBody>
                            <DrawerFooter>Drawer Footer</DrawerFooter>
                        </Drawer>
                    }
                />,
            )

            const header = queryByText('Drawer Header')
            const body = queryByText('Drawer Body')
            const footer = queryByText('Drawer Footer')

            expect(header).toBeInTheDocument()
            expect(body).toBeInTheDocument()
            expect(footer).toBeInTheDocument()

            const button = getByRole('button')

            fireEvent.click(button)

            expect(onCloseSpy).toHaveBeenCalledTimes(1)

            expect(header).not.toBeInTheDocument()
            expect(body).not.toBeInTheDocument()
            expect(footer).not.toBeInTheDocument()
        })

        it('should trigger `onOverlayClick` when defined and overlay is clicked', () => {
            const onCloseSpy = jest.fn()
            const onOverlayClickSpy = jest.fn()

            const { getByTestId } = render(
                <DrawerController
                    open
                    onClose={onCloseSpy}
                    onOverlayClick={onOverlayClickSpy}
                    OverlayComponent={(props) => <Overlay data-testid="overlay" {...props} />}
                    drawer={
                        <Drawer>
                            <DrawerHeader>Drawer Header</DrawerHeader>
                            <DrawerBody>Drawer Body</DrawerBody>
                            <DrawerFooter>Drawer Footer</DrawerFooter>
                        </Drawer>
                    }
                />,
            )

            const overlay = getByTestId('overlay')

            fireEvent.click(overlay)

            // expect(onCloseSpy).toHaveBeenCalled()
            expect(onOverlayClickSpy).toHaveBeenCalled()
        })

        it('should trigger `onClose` when defined and escape key is pressed', () => {
            const onCloseSpy = jest.fn()

            const { getByTestId } = render(
                <DrawerController
                    open
                    onClose={onCloseSpy}
                    drawer={
                        <Drawer data-testid="modal">
                            <DrawerHeader>Drawer Header</DrawerHeader>
                            <DrawerBody>Drawer Body</DrawerBody>
                            <DrawerFooter>Drawer Footer</DrawerFooter>
                        </Drawer>
                    }
                />,
            )

            const modal = getByTestId('modal')

            fireEvent.keyDown(modal, {
                key: 'Escape',
            })

            expect(onCloseSpy).toHaveBeenCalled()
        })
    })
})
