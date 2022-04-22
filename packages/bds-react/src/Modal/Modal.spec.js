import * as React from 'react'
import { Settings } from '@lowes-tech/bds-icons'

import { render } from '../../test-utils'
import ThemeProvider from '../ThemeProvider'
import Button from '../Button'

import Modal from './Modal'
import ModalBody from './ModalBody'
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'

describe('Modal Snapshots', () => {
    test('Modal default snapshot', () => {
        const { asFragment } = render(
            <Modal>
                <ModalHeader
                    label="Label"
                    icon={<Settings />}
                >
                    Modal Heading
                </ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
                    sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
                    Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
                    ultrices lorem condimentum, nec ullamcorper felis porttitor.
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant="secondary"
                        color="contrast"
                    >
                        Cancel
                    </Button>
                    <Button>Action</Button>
                </ModalFooter>
            </Modal>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Modal no footer snapshot', () => {
        const { asFragment } = render(
            <Modal>
                <ModalHeader
                    label="Label"
                    icon={<Settings />}
                >
                    Modal Heading
                </ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
                    sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
                    Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
                    ultrices lorem condimentum, nec ullamcorper felis porttitor.
                </ModalBody>
            </Modal>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Modal ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Modal>
                                <ModalHeader>
                                    Modal Heading
                                </ModalHeader>
                                <ModalBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
                                    sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
                                    Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
                                    ultrices lorem condimentum, nec ullamcorper felis porttitor.
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        variant="secondary"
                                        color="contrast"
                                    >
                                        Cancel
                                    </Button>
                                    <Button>Action</Button>
                                </ModalFooter>
                            </Modal>
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: sizes', () => {
        const sizes = ['small', 'medium', 'large', 'extra-large', 'auto', 'full-screen']

        sizes.forEach((size) => {
            test(`Modal ${size} variant snapshot`, () => {
                const { asFragment } = render(
                    <Modal
                        size={size}
                    >
                        <ModalHeader
                            label="Label"
                        >
                            Modal Heading
                        </ModalHeader>
                        <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
                            sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
                            Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
                            ultrices lorem condimentum, nec ullamcorper felis porttitor.
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                variant="secondary"
                                color="contrast"
                            >
                                Cancel
                            </Button>
                            <Button>Action</Button>
                        </ModalFooter>
                    </Modal>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: invisible', () => {
        test(`Modal invisible snapshot`, () => {
            const { asFragment } = render(
                <Modal
                    invisible
                >
                    <ModalHeader
                        label="Label"
                        icon={<Settings />}
                    >
                        Modal Heading
                        </ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
                        sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
                        Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
                        ultrices lorem condimentum, nec ullamcorper felis porttitor.
                        </ModalBody>
                    <ModalFooter>
                        <Button
                            variant="secondary"
                            color="contrast"
                        >
                            Cancel
                            </Button>
                        <Button>Action</Button>
                    </ModalFooter>
                </Modal>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('extra props', () => {
        test('Modal DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <Modal
                    className="modal-test"
                >
                    <ModalHeader
                        label="Label"
                        icon={<Settings />}
                        className="modal-header-test"
                    >
                        Modal Heading
                        </ModalHeader>
                    <ModalBody
                        className="modal-body-test"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
                        sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
                        Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
                        ultrices lorem condimentum, nec ullamcorper felis porttitor.
                        </ModalBody>
                    <ModalFooter
                        className="modal-footer-test"
                    >
                        <Button
                            variant="secondary"
                            color="contrast"
                        >
                            Cancel
                            </Button>
                        <Button>Action</Button>
                    </ModalFooter>
                </Modal>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
