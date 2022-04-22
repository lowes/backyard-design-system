import * as React from 'react'
import { HomeOutlined, CreditCard, Download, Close, Dots } from '@lowes-tech/bds-icons'

import { render, act } from '../../test-utils'

import IconButton from '../IconButton'
import MenuItem from '../MenuItem'
import Menu from '../Menu'

import MenuPopover from './MenuPopover'

describe('MenuPopover Snapshots', () => {
    test('MenuPopover default snapshot', async () => {
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
                />,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('Menu open snapshot', async () => {
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

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('Menu enablePortal snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <MenuPopover
                    open
                    enablePortal
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

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })
})
