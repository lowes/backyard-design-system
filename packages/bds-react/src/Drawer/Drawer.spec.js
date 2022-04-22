import * as React from 'react'

import { render } from '../../test-utils'
import Button from '../Button'

import Drawer from './Drawer'
import DrawerHeader from './DrawerHeader'
import DrawerBody from './DrawerBody'
import DrawerFooter from './DrawerFooter'

describe('Drawer Snapshots', () => {
    test('Drawer default snapshot', () => {
        const { asFragment } = render(
            <Drawer>
                <DrawerHeader>Header</DrawerHeader>
                <DrawerBody>Body</DrawerBody>
                <DrawerFooter>
                    <Button>Click</Button>
                </DrawerFooter>
            </Drawer>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('prop: orientation', () => {
        const orientations = ['vertical', 'horizontal']

        orientations.forEach((orientation) => {
            test(`Drawer orientation-${orientation} snapshot`, () => {
                const { asFragment } = render(
                    <Drawer orientation={orientation}>
                        <DrawerHeader>Header</DrawerHeader>
                        <DrawerBody>Body</DrawerBody>
                        <DrawerFooter>
                            <Button>Click</Button>
                            <Button>Click</Button>
                        </DrawerFooter>
                    </Drawer>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
