import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'

import { useDataTable } from '../hooks'
import DataTableFooterWrapper from './styles/DataTableFooterWrapper'
import DataTablePagination from '../DataTablePagination'

/**
 * Backyard React Data Table Footer
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the footer of the data table
 */
const DataTableFooter = <Data extends object = any>({
    children,
    className,
    ...props
}: DataTableFooterProps): React.ReactElement<DataTableFooterProps> => {
    const { size, disableFooter, rowsPerPageOptions, shape } = useDataTable<Data>()

    return !disableFooter ? (
        <DataTableFooterWrapper
            className={classNames('data-table-footer', `shape--${shape}`, className)}
            {...props}
        >
            <div className={classNames('data-table-row', `size--${size}`)}>
                <div className="data-table-cell">
                    <DataTablePagination<Data> rowsPerPageOptions={rowsPerPageOptions} />
                </div>
            </div>
        </DataTableFooterWrapper>
    ) : null
}

type DataTableFooterRef = HTMLTableElement // no HTMLTableFootElement?

interface DataTableFooterProps extends BackyardBaseProps<DataTableFooterRef> {}

export { DataTableFooter }

export type { DataTableFooterProps, DataTableFooterRef }

export default DataTableFooter
