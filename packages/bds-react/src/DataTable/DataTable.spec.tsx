import * as React from 'react'

import { act, render } from '../../test-utils'

import {
    PhotosOutlined as PhotosIcon,
    CheckCircleFilled as CheckCircleFilledIcon,
    CloseCircleFilled as CloseCircleFilledIcon,
} from '@lowes-tech/bds-icons'

import { ThemeProvider, DataTable, Button, Menu, MenuItem, MenuPopover } from '../'

import { columns, fifteen } from './utils/data.names'

describe('DataTable Snapshots', () => {
    test(`default snapshot`, async () => {
        let wrapper

        await act(async () => {
            wrapper = render(<DataTable columns={columns} data={fifteen} />)
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`theme ${theme} snapshot`, async () => {
                let wrapper

                await act(async () => {
                    wrapper = render(
                        <ThemeProvider theme={theme}>
                            <DataTable columns={columns} data={fifteen} />
                        </ThemeProvider>,
                    )
                })

                const { asFragment } = wrapper

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    test(`feature snapshot`, async () => {
        let wrapper

        const filters = [
            { id: 'firstName', value: 'hellfire' },
            { id: 'lastName', value: 'strap' },
        ]

        const sortBy = [
            { id: 'lastName', desc: true },
            { id: 'age', asc: true },
        ]

        await act(async () => {
            wrapper = render(
                <DataTable
                    columns={columns}
                    data={fifteen}
                    enableSortBy
                    enableRowSelection
                    enableRowExpansion
                    enableZebraStripes
                    showToolbar
                    enableFilters
                    enableSearch
                    filters={filters}
                    sortBy={sortBy}
                    globalFilter="ll"
                    toolbar={[
                        <Button variant="secondary" color="interactive" size="small">
                            Approve
                        </Button>,
                        <Button variant="secondary" color="red" size="small">
                            Deny
                        </Button>,
                        <MenuPopover
                            menu={
                                <Menu>
                                    <MenuItem
                                        variant="ghost"
                                        color="interactive"
                                        iconBefore={<CheckCircleFilledIcon />}
                                    >
                                        Approve
                                    </MenuItem>
                                    <MenuItem
                                        variant="ghost"
                                        color="red"
                                        iconBefore={<CloseCircleFilledIcon />}
                                    >
                                        Deny
                                    </MenuItem>
                                </Menu>
                            }
                        >
                            <Button
                                variant="ghost"
                                color="interactive"
                                size="small"
                                iconBefore={<PhotosIcon />}
                            >
                                Actions
                            </Button>
                        </MenuPopover>,
                    ]}
                    menuItems={[
                        {
                            label: 'Apply Filters',
                        },
                        {
                            label: 'Clear Filters',
                        },
                        {
                            label: 'Apply Sorting',
                        },
                        {
                            label: 'Clear Sorting',
                        },
                        {
                            label: 'Clear Selections',
                        },
                    ]}
                    selectedRowIds={{ 1: true }}
                    expanded={{ 0: true }}
                    rowsPerPageOptions={[10, 20, 50, 100]}
                />,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })
})
