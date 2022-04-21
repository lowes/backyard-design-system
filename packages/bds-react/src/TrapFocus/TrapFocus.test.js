import { fireEvent } from '@testing-library/react'
import * as React from 'react'
import { render } from '../../test-utils'
import Button from '../Button'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../Modal'
import TrapFocus from './TrapFocus'

describe('FormControl Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <TrapFocus
                open
                isEnabled={() => true}
                getDoc={() => document}
            >
                <Modal data-testid="modal">
                    <ModalHeader>
                        Modal Header
                    </ModalHeader>
                    <ModalBody>
                        Modal Body
                    </ModalBody>
                    <ModalFooter>
                        <Button>Action</Button>
                    </ModalFooter>
                </Modal>
            </TrapFocus>
        )

        const modal = getByTestId('modal')

        expect(modal).toBeInTheDocument()
    })

    describe('focus states', () => {
        test(`change focus modal by default`, () => {
            const { getByTestId } = render(
                <TrapFocus
                    open
                    isEnabled={() => true}
                    disableEnforceFocus={false}
                    getDoc={() => document}
                >
                    <Modal data-testid="modal">
                        <ModalHeader tabIndex={0}>
                            Modal Header
                        </ModalHeader>
                        <ModalBody tabIndex={1}>
                            Modal Body
                        </ModalBody>
                        <ModalFooter tabIndex={2}>
                            <Button>Action</Button>
                        </ModalFooter>
                    </Modal>
                </TrapFocus>
            )

            const modal = getByTestId('modal')
            fireEvent.focus(modal)
        })
    })
})