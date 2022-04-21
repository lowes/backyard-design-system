import * as React from 'react'

import { render } from '../../test-utils'

import Drawer from './Drawer'
import DrawerBody from './DrawerBody'
import DrawerHeader from './DrawerHeader'
import DrawerFooter from './DrawerFooter'
import Button from '../Button'

describe('Drawer Tests', () => {
    it('render', () => {
        const { getByText } = render(
            <Drawer>
                <DrawerHeader>Header</DrawerHeader>
                <DrawerBody>Body</DrawerBody>
                <DrawerFooter>
                    <Button>Cancel</Button>
                    <Button>Apply</Button>
                </DrawerFooter>
            </Drawer>,
        )

        const header = getByText('Header')
        const body = getByText('Body')
        const cancel = getByText('Cancel')
        const apply = getByText('Apply')

        expect(header).toBeInTheDocument()
        expect(body).toBeInTheDocument()
        expect(cancel).toBeInTheDocument()
        expect(apply).toBeInTheDocument()
    })
})
