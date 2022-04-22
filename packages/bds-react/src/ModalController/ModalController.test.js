import * as React from 'react'
import { Settings } from '@lowes-tech/bds-icons'

import { render, fireEvent } from '../../test-utils'

import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter
} from '../Modal'
import Overlay from '../Overlay'

import ModalController from './ModalController'

describe('Modal Tests', () => {
    it('renders when open', () => {
        const { getByText } = render(
            <ModalController
                open
                modal={(
                    <Modal>
                        <ModalHeader
                            label="Label"
                            icon={<Settings />}
                        >
                            Modal Header
                        </ModalHeader>
                        <ModalBody>
                            Modal Body
                        </ModalBody>
                        <ModalFooter>
                            Modal Footer
                        </ModalFooter>
                    </Modal>
                )}
            />
        )

        const header = getByText('Modal Header')
        const body = getByText('Modal Body')
        const footer = getByText('Modal Footer')

        expect(header).toBeInTheDocument()
        expect(body).toBeInTheDocument()
        expect(footer).toBeInTheDocument()
    })

    it('does not render when closed', () => {
        const { queryByText } = render(
            <ModalController
                open={false}
                modal={(
                    <Modal>
                        <ModalHeader>
                            Modal Header
                        </ModalHeader>
                        <ModalBody>
                            Modal Body
                        </ModalBody>
                        <ModalFooter>
                            Modal Footer
                        </ModalFooter>
                    </Modal>
                )}
            />
        )

        const header = queryByText('Modal Header')
        const body = queryByText('Modal Body')
        const footer = queryByText('Modal Footer')

        expect(header).not.toBeInTheDocument()
        expect(body).not.toBeInTheDocument()
        expect(footer).not.toBeInTheDocument()
    })

    describe('event: onClose', () => {
        it('should trigger `onClose` when defined and close button clicked', () => {
            const onCloseSpy = jest.fn()
            const { getByRole, queryByText } = render(
                <ModalController
                    open
                    onClose={onCloseSpy}
                    modal={(
                        <Modal>
                            <ModalHeader>
                                Modal Header
                            </ModalHeader>
                            <ModalBody>
                                Modal Body
                            </ModalBody>
                            <ModalFooter>
                                Modal Footer
                            </ModalFooter>
                        </Modal>
                    )}
                />
            )

            const header = queryByText('Modal Header')
            const body = queryByText('Modal Body')
            const footer = queryByText('Modal Footer')

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
                <ModalController
                    open
                    onClose={onCloseSpy}
                    onOverlayClick={onOverlayClickSpy}
                    OverlayComponent={(props) => <Overlay data-testid="overlay" {...props} />}
                    modal={(
                        <Modal>
                            <ModalHeader>
                                Modal Header
                            </ModalHeader>
                            <ModalBody>
                                Modal Body
                            </ModalBody>
                            <ModalFooter>
                                Modal Footer
                            </ModalFooter>
                        </Modal>
                    )}
                />
            )

            const overlay = getByTestId('overlay')

            fireEvent.click(overlay)

            // expect(onCloseSpy).toHaveBeenCalled()
            expect(onOverlayClickSpy).toHaveBeenCalled()
        })

        it('should trigger `onClose` when defined and escape key is pressed', () => {
            const onCloseSpy = jest.fn()

            const { getByTestId } = render(
                <ModalController
                    open
                    onClose={onCloseSpy}
                    modal={(
                        <Modal
                            data-testid="modal"
                        >
                            <ModalHeader>
                                Modal Header
                            </ModalHeader>
                            <ModalBody>
                                Modal Body
                            </ModalBody>
                            <ModalFooter>
                                Modal Footer
                            </ModalFooter>
                        </Modal>
                    )}
                />
            )

            const modal = getByTestId('modal')

            fireEvent.keyDown(modal, {
                key: 'Escape'
            })

            expect(onCloseSpy).toHaveBeenCalled()
        })
    })
})
