import * as React from 'react'
import { render, fireEvent } from '../../../test-utils'

import DataTable from '../DataTable'
import { columns, fifteen } from '../utils/data.names'

describe('DataTableToolbarTests', () => {
    it('renders', () => {
        const { container } = render(<DataTable columns={[]} data={[]} showToolbar />)

        const component = container.querySelector('.data-table-toolbar')

        expect(component).toBeInTheDocument()
    })

    it('shows the filters', async () => {
        const { container } = render(
            <DataTable columns={columns} data={fifteen} showToolbar enableFilters />,
        )

        const filterButton = container.querySelector('.filter-button')

        fireEvent.click(filterButton)

        const dataTableHeaderRows = container.querySelectorAll('.data-table-header .data-table-row')

        expect(dataTableHeaderRows.length).toEqual(2)
    })

    it('shows the searchbar', async () => {
        const { container } = render(
            <DataTable columns={columns} data={fifteen} enableFilters showToolbar enableSearch />,
        )

        const searchButton = container.querySelector('.search-button')

        fireEvent.click(searchButton)

        const searchBar = container.querySelector('.textinput--wrapper')

        expect(searchBar).toBeInTheDocument()
    })

    it('shows the menu', () => {
        const { container } = render(
            <DataTable
                columns={[]}
                data={[]}
                showToolbar
                enableFilters
                menuItems={[
                    {
                        children: 'One',
                    },
                ]}
            />,
        )

        const menuPopover = container.querySelector('.menu-popover')

        expect(menuPopover).toBeInTheDocument()
    })
})
