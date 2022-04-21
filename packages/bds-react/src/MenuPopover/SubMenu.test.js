import * as React from 'react'
import { HomeOutlined, CreditCard, Download, Close, Dots } from '@lowes-tech/bds-icons'

import { render, Simulate, act, queryByTestId } from '../../test-utils'

import IconButton from '../IconButton'
import MenuItem from '../MenuItem'
import Menu from '../Menu'

import MenuPopover from './MenuPopover'
import SubMenu from './SubMenu'

describe('SubMenu Tests', () => {
    it('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <MenuPopover
                    open
                    menu={
                        <Menu data-testid="menu">
                            <MenuItem iconBefore={<HomeOutlined />}>Home</MenuItem>
                            <MenuItem iconBefore={<CreditCard />}>Payment Methods</MenuItem>
                            <SubMenu open label="More Options">
                                <MenuItem data-testid="sub-item-1">Sub Item 1</MenuItem>
                                <MenuItem>Sub Item 2</MenuItem>
                                <MenuItem>Sub Item 3</MenuItem>
                                <MenuItem>Sub Item 4</MenuItem>
                            </SubMenu>
                            <MenuItem disabled iconBefore={<Download />}>
                                Download
                            </MenuItem>
                            <MenuItem
                                variant="primary"
                                color="error"
                                iconBefore={<Close />}
                                onClick={() => alert('You clicked on me!')}
                            >
                                Alert
                            </MenuItem>
                        </Menu>
                    }
                >
                    <IconButton variant="ghost" color="subtle" size="small">
                        <Dots />
                    </IconButton>
                </MenuPopover>,
            )
        })

        const { queryByTestId } = wrapper

        const subItem = queryByTestId('sub-item-1')

        expect(subItem).toBeInTheDocument()
    })

    it('opens and closes when clicked', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <MenuPopover
                    open
                    menu={
                        <Menu>
                            <MenuItem iconBefore={<HomeOutlined />}>Home</MenuItem>
                            <MenuItem iconBefore={<CreditCard />}>Payment Methods</MenuItem>
                            <SubMenu
                                label="More Options"
                                data-testid="menu"
                                menuItemProps={{
                                    'data-testid': 'button',
                                }}
                            >
                                <MenuItem>Sub Item 1</MenuItem>
                                <MenuItem>Sub Item 2</MenuItem>
                                <MenuItem>Sub Item 3</MenuItem>
                                <MenuItem>Sub Item 4</MenuItem>
                            </SubMenu>
                            <MenuItem disabled iconBefore={<Download />}>
                                Download
                            </MenuItem>
                            <MenuItem
                                variant="primary"
                                color="error"
                                iconBefore={<Close />}
                                onClick={() => alert('You clicked on me!')}
                            >
                                Alert
                            </MenuItem>
                        </Menu>
                    }
                >
                    <IconButton variant="ghost" color="subtle" size="small">
                        <Dots />
                    </IconButton>
                </MenuPopover>,
            )
        })

        const { getByTestId, queryByTestId } = wrapper

        const button = getByTestId('button')

        expect(queryByTestId('menu')).not.toBeVisible()

        // Click opens popover
        await act(async () => {
            Simulate.click(button)
        })

        expect(queryByTestId('menu')).toBeVisible()

        // Click closes popover
        await act(async () => {
            Simulate.click(button)
        })

        expect(queryByTestId('menu')).not.toBeVisible()
    })
})
