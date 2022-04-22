import * as React from 'react'
import { HomeOutlined, CreditCard, Download, Close, Dots } from '@lowes-tech/bds-icons'

import { render, act } from '../../test-utils'

import IconButton from '../IconButton'
import MenuItem from '../MenuItem'
import Menu from '../Menu'

import MenuPopover from './MenuPopover'
import SubMenu from './SubMenu'

describe('SubMenu Snapshots', () => {
    test('SubMenu default snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <MenuPopover
                    menu={
                        <Menu data-testid="menu">
                            <MenuItem iconBefore={<HomeOutlined />}>Home</MenuItem>
                            <MenuItem iconBefore={<CreditCard />}>Payment Methods</MenuItem>
                            <SubMenu label="More Options">
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

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('SubMenu open snapshot', async () => {
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

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('SubMenu open items snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <MenuPopover
                    open
                    menu={
                        <Menu data-testid="menu">
                            <MenuItem iconBefore={<HomeOutlined />}>Home</MenuItem>
                            <MenuItem iconBefore={<CreditCard />}>Payment Methods</MenuItem>
                            <SubMenu
                                open
                                label="More Options"
                                items={[
                                    { label: 'Sub Item 1' },
                                    { label: 'Sub Item 2' },
                                    { label: 'Sub Item 3' },
                                    { label: 'Sub Item 4' },
                                ]}
                            />
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
