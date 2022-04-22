import * as React from 'react'
import { Settings } from '@lowes-tech/bds-icons'

import { render } from '../../test-utils'
import ThemeProvider from '../ThemeProvider'
import Button from '../Button'
import { Drawer, DrawerBody, DrawerHeader, DrawerFooter } from '../Drawer'

import DrawerController from './DrawerController'

describe('DrawerController Snapshots', () => {
    test('DrawerController default snapshot', () => {
        const { asFragment } = render(
            <DrawerController
                open
                drawer={
                    <Drawer>
                        <DrawerHeader label="Label" icon={<Settings />}>
                            Drawer Heading
                        </DrawerHeader>
                        <DrawerBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            cursus fermentum risus, sit amet fringilla nunc pellentesque quis. Duis
                            quis odio ultrices, cursus lacus ac, posuere felis. Donec dignissim
                            libero in augue mattis, a molestie metus vestibulum. Aliquam placerat
                            felis ultrices lorem condimentum, nec ullamcorper felis porttitor.
                        </DrawerBody>
                        <DrawerFooter>
                            <Button variant="secondary">
                                Cancel
                            </Button>
                            <Button>Action</Button>
                        </DrawerFooter>
                    </Drawer>
                }
            />,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('prop: anchor', () => {
        const anchors = ['left', 'right', 'top', 'bottom']

        anchors.forEach((anchor) => {
            test(`DrawerController ${anchor} anchor snapshot`, () => {
                const { asFragment } = render(
                    <DrawerController
                        open
                        anchor={anchor}
                        drawer={
                            <Drawer>
                                <DrawerHeader label="Label" icon={<Settings />}>
                                    Drawer Heading
                                </DrawerHeader>
                                <DrawerBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse cursus fermentum risus, sit amet fringilla nunc
                                    pellentesque quis. Duis quis odio ultrices, cursus lacus ac,
                                    posuere felis. Donec dignissim libero in augue mattis, a
                                    molestie metus vestibulum. Aliquam placerat felis ultrices lorem
                                    condimentum, nec ullamcorper felis porttitor.
                                </DrawerBody>
                                <DrawerFooter>
                                    <Button variant="secondary">
                                        Cancel
                                    </Button>
                                    <Button>Action</Button>
                                </DrawerFooter>
                            </Drawer>
                        }
                    />,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`DrawerController ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <DrawerController
                                open
                                drawer={
                                    <Drawer>
                                        <DrawerHeader label="Label" icon={<Settings />}>
                                            Drawer Heading
                                        </DrawerHeader>
                                        <DrawerBody>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Suspendisse cursus fermentum risus, sit amet fringilla
                                            nunc pellentesque quis. Duis quis odio ultrices, cursus
                                            lacus ac, posuere felis. Donec dignissim libero in augue
                                            mattis, a molestie metus vestibulum. Aliquam placerat
                                            felis ultrices lorem condimentum, nec ullamcorper felis
                                            porttitor.
                                        </DrawerBody>
                                        <DrawerFooter>
                                            <Button variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button>Action</Button>
                                        </DrawerFooter>
                                    </Drawer>
                                }
                            />
                        </React.Fragment>
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('DrawerController DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <DrawerController
                    open
                    className="modal-controller-test-class"
                    drawer={
                        <Drawer>
                            <DrawerHeader label="Label" icon={<Settings />}>
                                Drawer Heading
                            </DrawerHeader>
                            <DrawerBody>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
                                Duis quis odio ultrices, cursus lacus ac, posuere felis. Donec
                                dignissim libero in augue mattis, a molestie metus vestibulum.
                                Aliquam placerat felis ultrices lorem condimentum, nec ullamcorper
                                felis porttitor.
                            </DrawerBody>
                            <DrawerFooter>
                                <Button variant="secondary">
                                    Cancel
                                </Button>
                                <Button>Action</Button>
                            </DrawerFooter>
                        </Drawer>
                    }
                />,
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
