import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'

import DataTableContentWrapper from './styles/DataTableContentWrapper'
import DataTableHeader from '../DataTableHeader'
import DataTableBody from '../DataTableBody'
import DataTableFooter from '../DataTableFooter'
import { useDataTable } from '../hooks'

/**
 * Backyard React Data Table Content
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the header, body, and footer of the data table, without the toolbar
 */
const DataTableContent = <Data extends object = any>({
    children,
    className,
    ...props
}: DataTableContentProps): React.ReactElement<DataTableContentProps> => {
    const { getTableProps, disableFooter, disableScrollbar, showToolbar, shape } =
        useDataTable<Data>()

    return (
        <DataTableContentWrapper
            {...getTableProps({
                className: classNames(
                    'data-table-content',
                    `shape--${shape}`,
                    {
                        'no-footer': disableFooter,
                        'disable-scrollbar': disableScrollbar,
                        'no-toolbar': !showToolbar,
                    },
                    className,
                ),
                ...props,
            })}
        >
            <div
                className={classNames('data-table-content-scrollable', `shape--${shape}`, {
                    'no-footer': true,
                    'no-toolbar': !showToolbar,
                })}
            >
                <DataTableHeader<Data> />
                <DataTableBody<Data> />
            </div>
            <DataTableFooter<Data> />
        </DataTableContentWrapper>
    )
}

type DataTableContentRef = HTMLTableElement

interface DataTableContentProps extends BackyardBaseProps<DataTableContentRef> {}

export { DataTableContent }

export type { DataTableContentProps, DataTableContentRef }

export default DataTableContent
