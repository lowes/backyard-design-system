import * as React from 'react'

import type { DataTablePaginationProps } from './DataTablePagination'

import DataTableProvider from '../DataTableProvider'
import DataTablePagination from './DataTablePagination'
import makeData from '../utils/makeData'

const StubPagination = (props: StubPaginationProps): React.ReactElement<StubPaginationProps> => {
    const { rowsPerPageOptions, size, onChange, paginationProps, length } = props

    const p = {
        rowsPerPageOptions,
        size,
        onChange,
        paginationProps,
    }

    const columns = React.useMemo(
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

    const data = React.useMemo(() => makeData(length), [])

    return (
        <DataTableProvider columns={columns} data={data}>
            <DataTablePagination {...p} />
        </DataTableProvider>
    )
}

interface StubPaginationProps extends DataTablePaginationProps {
    length?: number
}

export { StubPagination }

export type { StubPaginationProps }

export default StubPagination
