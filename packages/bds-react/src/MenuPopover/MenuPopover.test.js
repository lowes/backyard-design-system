import * as React from 'react'
import { HomeOutlined, CreditCard, Download, Close, Dots } from '@lowes-tech/bds-icons'

import { render, Simulate, act } from '../../test-utils'

import IconButton from '../IconButton'
import MenuItem from '../MenuItem'
import Menu from '../Menu'

import MenuPopover from './MenuPopover'

describe('MenuPopover Tests', () => {
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
                            <MenuItem>No Icon Needed</MenuItem>
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

        const { getByTestId } = wrapper

        const menu = getByTestId('menu')

        expect(menu).toBeInTheDocument()
    })

    it('opens and closes when clicked', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <MenuPopover
                    menu={
                        <Menu data-testid="menu">
                            <MenuItem iconBefore={<HomeOutlined />}>Home</MenuItem>
                            <MenuItem iconBefore={<CreditCard />}>Payment Methods</MenuItem>
                            <MenuItem>No Icon Needed</MenuItem>
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
                    <IconButton variant="ghost" color="subtle" size="small" data-testid="button">
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

    it('opens and closes when hovers if enabled', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <MenuPopover
                    listenHover
                    closeDelay={false}
                    menu={
                        <Menu data-testid="menu">
                            <MenuItem iconBefore={<HomeOutlined />}>Home</MenuItem>
                            <MenuItem iconBefore={<CreditCard />}>Payment Methods</MenuItem>
                            <MenuItem>No Icon Needed</MenuItem>
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
                    <IconButton variant="ghost" color="subtle" size="small" data-testid="button">
                        <Dots />
                    </IconButton>
                </MenuPopover>,
            )
        })

        const { getByTestId, queryByTestId } = wrapper

        const button = getByTestId('button')

        expect(queryByTestId('menu')).not.toBeVisible()

        // Entering opens popover
        await act(async () => {
            Simulate.mouseEnter(button)
        })

        expect(queryByTestId('menu')).toBeVisible()

        // Leaving closes popover
        await act(async () => {
            Simulate.mouseLeave(button.parentNode)
        })

        setTimeout(() => {
            expect(queryByTestId('menu')).not.toBeVisible()
        }, 500)
    })
})
