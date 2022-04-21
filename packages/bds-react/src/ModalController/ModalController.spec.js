import * as React from 'react'
import { Settings } from '@lowes-tech/bds-icons'

import { render } from '../../test-utils'
import ThemeProvider from '../ThemeProvider'
import Button from '../Button'
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter
 } from '../Modal'

import ModalController from './ModalController'

describe('ModalController Snapshots', () => {
    test('ModalController default snapshot', () => {
        const { asFragment } = render(
            <ModalController
                open
                modal={(
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
                )}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`ModalController ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <ModalController
                                open
                                modal={(
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
                                )}
                            />
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('ModalController DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <ModalController
                    open
                    className="modal-controller-test-class"
                    modal={(
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
                    )}
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
