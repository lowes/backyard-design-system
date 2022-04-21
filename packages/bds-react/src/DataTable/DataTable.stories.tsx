import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import PhotosIcon from '@lowes-tech/bds-icons/PhotosOutlined'
import ChevronRight from '@lowes-tech/bds-icons/ChevronRight'
import CheckCircleFilledIcon from '@lowes-tech/bds-icons/CheckCircleFilled'
import CloseCircleFilledIcon from '@lowes-tech/bds-icons/CloseCircleFilled'

import { ApiLink } from '../utils/storybook/ApiLink'
import Spinner from '../Spinner'
import { GridV3 as Grid, DataTable, Typography, MenuPopover, Menu, MenuItem, Button, Search } from '../'
import type { DataTableColumn } from '../'

import makeData from './utils/makeData'
import { TextFilter, SelectFilter } from './DataTableFilters'

export default { title: '@lowes-tech/bds-react/DataTable', decorators: [withKnobs] }

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export const ThousandRecords = () => {
    type Data = typeof data[0]

    const columns: DataTableColumn<Data>[] = [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Header: 'Age',
                accessor: 'age',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
            },
        ]

    const data = React.useMemo(() => makeData(1000), [])

    return (
        <Grid.Column start={6} end={12}>
            <DataTable columns={columns} data={data} shape={select(...shapes)} />

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const NoFooter = () => {
    const columns: DataTableColumn<typeof data[0]>[] = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Header: 'Age',
                accessor: 'age',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
            },
        ],
        [],
    )

    const data = React.useMemo(() => makeData(1000), [])

    return (
        <Grid.Column start={6} end={12}>
            <DataTable columns={columns} data={data} disableFooter shape={select(...shapes)} />

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const DisabledFilters = () => {
    const columns: DataTableColumn<typeof data[0]>[] = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
                filter: 'startsWith',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                filter: 'startsWith',
            },
            {
                Header: 'Age',
                accessor: 'age',
                filter: 'startsWith',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
                filter: 'startsWith',
            },
            {
                Header: 'Status',
                accessor: 'status',
                filter: 'startsWith',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
                filter: 'startsWith',
            },
        ],
        [],
    )

    const data = React.useMemo(() => makeData(1000), [])

    return (
        <Grid.Column start={6} end={12}>
            <DataTable columns={columns} data={data} showToolbar shape={select(...shapes)} />

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const EnabledFilters = () => {
    const columns: DataTableColumn<typeof data[0]>[] = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
                filter: 'startsWith',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                filter: 'startsWith',
            },
            {
                Header: 'Age',
                accessor: 'age',
                filter: 'startsWith',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
                filter: 'startsWith',
            },
            {
                Header: 'Status',
                accessor: 'status',
                filter: 'startsWith',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
                filter: 'startsWith',
            },
        ],
        [],
    )

    const data = React.useMemo(() => makeData(1000), [])

    return (
        <Grid.Column start={6} end={12}>
            <DataTable
                columns={columns}
                data={data}
                enableFilters
                showToolbar
                shape={select(...shapes)}
            />

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const EnabledSearch = () => {
    const columns: DataTableColumn<typeof data[0]>[] = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
                filter: 'startsWith',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                filter: 'startsWith',
            },
            {
                Header: 'Age',
                accessor: 'age',
                filter: 'startsWith',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
                filter: 'startsWith',
            },
            {
                Header: 'Status',
                accessor: 'status',
                filter: 'startsWith',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
                filter: 'startsWith',
            },
        ],
        [],
    )

    const data = React.useMemo(() => makeData(1000), [])

    return (
        <Grid.Column start={6} end={12}>
            <DataTable
                columns={columns}
                data={data}
                showToolbar
                enableSearch
                shape={select(...shapes)}
            />

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const CustomFilterRecords = () => {
    const columns: DataTableColumn<typeof data[0]>[] = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
                Filter: TextFilter,
                filter: 'contains',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                filter: 'startsWith',
            },
            {
                Header: 'Age',
                accessor: 'age',
                filter: 'equals',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
                filter: 'startsWith',
            },
            {
                Header: 'Status',
                accessor: 'status',
                Filter: SelectFilter(['single', 'relationship', 'complicated']),
                filter: 'equals',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
                filter: 'startsWith',
            },
        ],
        [],
    )

    const data = React.useMemo(() => makeData(1000), [])

    return (
        <Grid.Column start={6} end={12}>
            <DataTable
                columns={columns}
                data={data}
                enableFilters
                showToolbar
                shape={select(...shapes)}
            />

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const RowSelection = () => {
    const columns: DataTableColumn[] = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName',
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                    },
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age',
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits',
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                        Filter: SelectFilter(['single', 'relationship', 'complicated']),
                    },
                    {
                        Header: 'Profile Progress',
                        accessor: 'progress',
                    },
                ],
            },
        ],
        [],
    )

    const subColumns = React.useMemo(
        () => [
            {
                Header: 'Additional Info',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age',
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits',
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                    },
                ],
            },
        ],
        [],
    )

    const data = React.useMemo(
        () =>
            makeData(1000).map((row, index) =>
                index % 2
                    ? {
                          ...row,
                          subRows: [
                              <Typography
                                  as="div"
                                  style={{
                                      // border: '1px dotted red',
                                      width: '100%',
                                  }}
                              >
                                  <DataTable
                                      columns={subColumns}
                                      data={makeData(5)}
                                      disableFooter
                                  />
                              </Typography>,
                          ],
                      }
                    : row,
            ),
        [],
    )

    const appliedFilters = [
        { id: 'firstName', value: 'motor' },
        { id: 'status', value: 'single' },
    ]

    const appliedSort = [
        { id: 'lastName', desc: true },
        { id: 'age', asc: true },
    ]

    const [filters, setFilters] = React.useState(appliedFilters)
    const [sortBy, setSortBy] = React.useState(appliedSort)

    const [selectedRows, setSelectedRows] = React.useState([])
    const [selectedIds, setSelectedIds] = React.useState({})
    const [expandedIds, setExpandedIds] = React.useState({})

    return (
        <Grid.Column start={6} end={12}>
            <DataTable
                columns={columns}
                data={data}
                shape={select(...shapes)}
                enableSortBy
                enableRowSelection
                enableRowExpansion
                enableZebraStripes
                showToolbar
                enableFilters
                enableSearch
                filters={filters}
                sortBy={sortBy}
                globalFilter="tor"
                toolbar={[
                    <Button
                        variant="secondary"
                        color="interactive"
                        size="small"
                        iconBefore={<CheckCircleFilledIcon />}
                        // disabled={selectedRows.length === 0}
                        onClick={() => alert(`You approved ${selectedRows.length} rows!`)}
                    >
                        Approve
                    </Button>,
                    <Button
                        variant="secondary"
                        color="red"
                        size="small"
                        iconBefore={<CloseCircleFilledIcon />}
                        // disabled={selectedRows.length === 0}
                        onClick={() => alert(`You denied ${selectedRows.length} rows!`)}
                    >
                        Deny
                    </Button>,
                    selectedRows.length > 0 ? (
                        <MenuPopover
                            menu={
                                <Menu>
                                    <MenuItem
                                        variant="ghost"
                                        color="interactive"
                                        iconBefore={<CheckCircleFilledIcon />}
                                        onClick={() =>
                                            alert(`You approved ${selectedRows.length} rows!`)
                                        }
                                    >
                                        Approve
                                    </MenuItem>
                                    <MenuItem
                                        variant="ghost"
                                        color="red"
                                        iconBefore={<CloseCircleFilledIcon />}
                                        onClick={() =>
                                            alert(`You denied ${selectedRows.length} rows!`)
                                        }
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
                        </MenuPopover>
                    ) : null,
                ]}
                menuItems={[
                    {
                        label: 'Apply Filters',
                        onClick: () => setFilters(appliedFilters),
                    },
                    {
                        label: 'Clear Filters',
                        onClick: () => setFilters([]),
                    },
                    {
                        label: 'Apply Sorting',
                        onClick: () => setSortBy(appliedSort),
                    },
                    {
                        label: 'Clear Sorting',
                        onClick: () => setSortBy([]),
                    },
                    {
                        label: 'Clear Selections',
                        onClick: () => setSelectedIds({}),
                    },
                    {
                        label: 'Collapse All',
                        onClick: () => setExpandedIds({}),
                    },
                ]}
                onSelect={(info) => {
                    const { ids, rows } = info

                    setSelectedRows(rows)
                    setSelectedIds(ids)
                }}
                selectedRowIds={selectedIds}
                expanded={expandedIds}
                rowsPerPageOptions={[10, 20, 50, 100]}
                pageSize={50}
                height="100vh"
            />
            <div style={{ height: '100vh' }} />

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const WithMenuItems = () => {
    const mySelectFilterWithOptions = SelectFilter(['single', 'relationship', 'complicated'])

    const columns: DataTableColumn<typeof data[0]>[] = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
                Filter: TextFilter,
                filter: 'contains',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                filter: 'startsWith',
            },
            {
                Header: 'Age',
                accessor: 'age',
                filter: 'equals',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
                filter: 'startsWith',
            },
            {
                Header: 'Status',
                accessor: 'status',
                Filter: mySelectFilterWithOptions,
                filter: 'startsWith',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
                filter: 'startsWith',
            },
        ],
        [],
    )

    const data = React.useMemo(() => makeData(1000), [])

    return (
        <Grid.Column start={6} end={12}>
            <DataTable
                columns={columns}
                data={data}
                shape={select(...shapes)}
                menuItems={[
                    {
                        children: 'One',
                    },
                ]}
                showToolbar
            />

            <ApiLink to='#' />
        </Grid.Column>
    )
}

const GoToPage = ({ toPage, setToPage, setPageIndex }) => (
    <React.Fragment>
        <Search
            size="small"
            variant="filled"
            fill
            placeholder="Go To Page"
            itemBefore={null}
            onChange={(event, value) => {
                setToPage(value)
            }}
        />
        <Button
            size="small"
            iconAfter={<ChevronRight />}
            onClick={() => {
                if (Number(toPage) > 0) {
                    setPageIndex(Number(toPage) - 1)
                }
            }}
        >
            Go
        </Button>
    </React.Fragment>
)

export const ServerSideExample = () => {
    const FETCH_URL = () => {
        if (window.location.host.match(/carbon\.?(.*).lowes.com/g)) {
            return '/bds/documentation/api/components/datatable/example?'
        }

        return '/api/components/datatable/example?'
    }

    const columns: DataTableColumn<typeof data[0]>[] = React.useMemo(
        () => [
            {
                Header: () => (
                    <Typography
                        as="div"
                        bold
                        variant="h5"
                        align="center"
                        style={{ width: '100%' }}
                    >
                        ID
                    </Typography>
                ),
                accessor: 'id',
                minWidth: '5rem',
                maxWidth: '5rem',
                Filter: () => null,
                Cell: ({ value }) => (
                    <Typography as="div" variant="caption" align="center" style={{ width: '100%' }}>
                        {value}
                    </Typography>
                ),
            },
            {
                Header: 'Title',
                accessor: 'title',
                Cell: ({ value }) => (
                    <Typography as="div" variant="caption">
                        {value}
                    </Typography>
                ),
            },
            {
                Header: 'Genre',
                accessor: 'genre',
                Cell: ({ value }) => (
                    <Typography as="div" variant="caption">
                        {value.replace(/\|/g, ', ')}
                    </Typography>
                ),
            },
            {
                Header: 'Producer',
                accessor: 'producer',
                Cell: ({ value }) => (
                    <Typography as="div" variant="caption">
                        {value}
                    </Typography>
                ),
            },
            {
                Header: 'Studio',
                accessor: 'studio',
                Cell: ({ value }) => (
                    <Typography as="div" variant="caption">
                        {value}
                    </Typography>
                ),
            },
            {
                Header: 'Revenue',
                accessor: 'revenue',
                Cell: ({ value }) => (
                    <Typography as="div" variant="caption">
                        {value}
                    </Typography>
                ),
            },
            {
                Header: 'Release Date',
                accessor: 'release',
                Cell: ({ value }) => (
                    <Typography as="div" variant="caption">
                        {new Date(value).toDateString()}
                    </Typography>
                ),
            },
            {
                Header: 'Synopsis',
                accessor: 'synopsis',
                Cell: ({ value }) => (
                    <Typography as="div" variant="caption">
                        {value}
                    </Typography>
                ),
            },
        ],
        [],
    )

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [state, setState] = React.useState({})
    const [pageCount, setPageCount] = React.useState(0)
    const [rowCount, setRowCount] = React.useState(0)
    const [pageIndex, setPageIndex] = React.useState(null)
    const [toPage, setToPage] = React.useState(null)
    const fetchIdRef = React.useRef(0)

    const fetchData = React.useCallback(
        async ({ pageSize, pageIndex, globalFilter, filters, sortBy }) => {
            // Give this fetch an ID
            const fetchId = ++fetchIdRef.current

            // Set the loading state
            setLoading(true)

            const response = await fetch(
                FETCH_URL() +
                    new URLSearchParams({
                        items: pageSize,
                        page: pageIndex + 1,
                        ...(globalFilter ? { globalFilter } : {}),
                        ...(Array.isArray(filters) && filters.length > 0
                            ? filters.reduce((acc, { id, value }) => {
                                  acc[`filters[${id}]`] = value

                                  return acc
                              }, {})
                            : {}),
                        ...(Array.isArray(sortBy) && sortBy.length > 0
                            ? sortBy.reduce((acc, { id, desc }) => {
                                  acc[`sorts[${id}]`] = desc ? 'desc' : 'asc'

                                  return acc
                              }, {})
                            : {}),
                    }),
            )

            // Only update the data if this is the latest fetch
            if (fetchId === fetchIdRef.current) {
                const data = await response.json()

                setData(data.table)

                setPageCount(data.info.pages)
                setRowCount(data.info.count)

                setLoading(false)
            }
        },
        [],
    )

    React.useEffect(() => {
        fetchData(state)
    }, [fetchData, state])

    return (
        <Grid.Column start={6} end={12}>
            <DataTable
                columns={columns}
                data={data}
                enableZebraStripes
                showToolbar
                enableFilters
                enableSearch
                enableSortBy
                pageIndex={pageIndex}
                options={{
                    manualPagination: true,
                    manualGlobalFilter: true,
                    manualFilters: true,
                    manualSortBy: true,
                    pageCount: pageCount,
                    rowCount: rowCount,
                }}
                toolbar={[
                    <div style={{ width: '100%' }} />,
                    <Spinner show={loading} small inline />,
                    <GoToPage toPage={toPage} setToPage={setToPage} setPageIndex={setPageIndex} />,
                ]}
                onTableUpdate={({ state }) => {
                    setState(state)
                }}
            />

            <ApiLink to='#' />
        </Grid.Column>
    )
}
