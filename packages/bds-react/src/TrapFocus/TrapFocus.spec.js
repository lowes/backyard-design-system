import * as React from 'react'

import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'

import Button from '../Button'
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter
} from '../Modal'

import TrapFocus from './TrapFocus'

describe('TrapFocus Snapshots', () => {
    test('TrapFocus default snapshot', () => {
        const { asFragment } = render(
            <TrapFocus
                open
                isEnabled={() => true}
                getDoc={() => document}
            >
                <Modal>
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

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`TrapFocus ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <TrapFocus
                                open
                                isEnabled={() => true}
                                getDoc={() => document}
                            >
                                <Modal>
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
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
