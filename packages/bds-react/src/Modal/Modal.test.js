import * as React from 'react'
import { Settings } from '@lowes-tech/bds-icons'

import { render, fireEvent } from '../../test-utils'

import Modal from './Modal'
import ModalBody from './ModalBody'
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'

describe('Modal Tests', () => {
    it('renders', () => {
        const { getByText } = render(
            <Modal>
                <ModalHeader
                    label="Label"
                    icon={<Settings />}
                >
                    Modal Heading
                </ModalHeader>
                <ModalBody>
                    Modal Body
                </ModalBody>
                <ModalFooter>
                    Modal Footer
                </ModalFooter>
            </Modal>
        )

        const header = getByText('Modal Heading')
        const body = getByText('Modal Body')
        const footer = getByText('Modal Footer')

        expect(header).toBeInTheDocument()
        expect(body).toBeInTheDocument()
        expect(footer).toBeInTheDocument()
    })

    describe('prop: invisible', () => {
        it('should be visible by default', () => {
            const { getByText } = render(
                <Modal>
                    <ModalHeader>
                        Modal Heading
                    </ModalHeader>
                    <ModalBody>
                        Modal Body
                    </ModalBody>
                    <ModalFooter>
                        Modal Footer
                    </ModalFooter>
                </Modal>
            )

            const header = getByText('Modal Heading')
            const body = getByText('Modal Body')
            const footer = getByText('Modal Footer')

            expect(header).toBeVisible()
            expect(body).toBeVisible()
            expect(footer).toBeVisible()
        })

        // @todo uncomment when jsdom inheritance bug is fixed
        // @link https://github.com/testing-library/jest-dom/issues/209
        // it('should not be visible if flagged', () => {
        //     const { getByText } = render(
        //         <Modal
        //             invisible
        //         >
        //             <ModalHeader>
        //                 Modal Heading
        //             </ModalHeader>
        //             <ModalBody>
        //                 Modal Body
        //             </ModalBody>
        //             <ModalFooter>
        //                 Modal Footer
        //             </ModalFooter>
        //         </Modal>
        //     )

        //     const header = getByText('Modal Heading')
        //     const body = getByText('Modal Body')
        //     const footer = getByText('Modal Footer')

        //     expect(header).not.toBeVisible()
        //     expect(body).not.toBeVisible()
        //     expect(footer).not.toBeVisible()
        // })
    })

    describe('event: onCloseClick', () => {
        it('should trigger `onCloseClick` when defined', () => {
            const onCloseClickSpy = jest.fn()
            const { getByRole } = render(
                <Modal
                    onCloseClick={onCloseClickSpy}
                >
                    <ModalHeader>
                        Modal Heading
                    </ModalHeader>
                    <ModalBody>
                        Modal Body
                    </ModalBody>
                    <ModalFooter>
                        Modal Footer
                    </ModalFooter>
                </Modal>
            )

            const button = getByRole('button')

            fireEvent.click(button)

            expect(onCloseClickSpy).toHaveBeenCalledTimes(1)
        })
    })
})
