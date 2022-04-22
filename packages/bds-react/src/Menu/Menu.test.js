import * as React from 'react'
import { render, fireEvent } from '../../test-utils'

import MenuItem from '../MenuItem'

import Menu from './Menu'

describe('Menu Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <Menu data-testid="menu">
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
                <MenuItem>Item 4</MenuItem>
            </Menu>,
        )

        const menu = getByTestId('menu')

        expect(menu).toBeInTheDocument()
    })
})
