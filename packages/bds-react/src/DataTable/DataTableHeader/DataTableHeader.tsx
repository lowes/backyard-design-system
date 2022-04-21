import * as React from 'react'
import classNames from 'classnames'

import ArrowDownIcon from '@lowes-tech/bds-icons/ArrowDown'
import ArrowUpIcon from '@lowes-tech/bds-icons/ArrowUp'
import SortIcon from '@lowes-tech/bds-icons/Sort'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import Typography from '../../Typography'

import DataTableHeaderWrapper from './styles/DataTableHeaderWrapper'
import { useDataTable } from '../hooks'

/**
 * Backyard React Data Table Header
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the header of the data table
 */
const DataTableHeader = <Data extends object = any>({
    children,
    className,
    ...props
}: DataTableHeaderProps): React.ReactElement<DataTableHeaderProps> => {
    const {
        headerGroups,
        enableSortBy,
        enableRowSelection,
        enableZebraStripes,
        showFilters,
        inverseHeader,
        size,
        getColumnWidths,
        showToolbar,
        shape,
    } = useDataTable<Data>()

    return (
        <DataTableHeaderWrapper
            className={classNames(
                'data-table-header',
                !showToolbar ? `shape--${shape}` : null,
                { 'zebra-stripes': enableZebraStripes, 'inverse-header': inverseHeader },
                className,
            )}
            {...props}
        >
            {headerGroups.map((headerGroup, index) => (
                <React.Fragment key={index}>
                    <div
                        {...headerGroup.getHeaderGroupProps({
                            className: classNames(
                                'data-table-header-row',
                                'data-table-row',
                                `size--${size}`,
                                {
                                    selectable: enableRowSelection,
                                },
                            ),
                        })}
                    >
                        {headerGroup.headers.map((column) => {
                            const columnId = column.placeholderOf?.id || column.id

                            const Cell = column.Wrapper || 'div'

                            return (
                                <Cell
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps({
                                            // @ts-ignore
                                            className: classNames(
                                                'data-table-header-cell',
                                                'data-table-cell',
                                                columnId,
                                            ),
                                            style: {
                                                ...getColumnWidths(column.placeholderOf || column),
                                            },
                                        }),
                                    )}
                                >
                                    <Typography
                                        variant="h6"
                                        as="div"
                                        className={classNames(
                                            'data-table-header-cell-content',
                                            'cell-content',
                                            { sorted: column.isSorted },
                                        )}
                                        color={
                                            inverseHeader ? 'text_primary_inverse' : 'text_primary'
                                        }
                                    >
                                        {enableSortBy && column.canSort ? (
                                            <span className={classNames('sort-icon')}>
                                                {column.isSorted ? (
                                                    column.isSortedDesc ? (
                                                        <ArrowDownIcon />
                                                    ) : (
                                                        <ArrowUpIcon />
                                                    )
                                                ) : (
                                                    <SortIcon />
                                                )}
                                            </span>
                                        ) : null}
                                        {column.render('Header')}
                                    </Typography>
                                </Cell>
                            )
                        })}
                    </div>
                    <div
                        {...headerGroup.getHeaderGroupProps({
                            key: 'headerGroup_Filters',
                            className: classNames(
                                'data-table-row',
                                'data-table-header-filters',
                                `size--${size}`,
                                {
                                    hidden: !(showFilters && index === headerGroups.length - 1),
                                },
                            ),
                        })}
                    >
                        {headerGroup.headers.map((column) => {
                            const render = column.canFilter ? column.render('Filter') : null
                            const hidden = !(showFilters && index === headerGroups.length - 1)

                            return (
                                <div
                                    {...column.getHeaderProps({
                                        className: classNames('data-table-cell'),
                                        style: {
                                            ...getColumnWidths(column.placeholderOf || column),
                                            ...(hidden ? { display: 'none' } : {}),
                                        },
                                    })}
                                >
                                    {render || null}
                                </div>
                            )
                        })}
                    </div>
                </React.Fragment>
            ))}
        </DataTableHeaderWrapper>
    )
}

type DataTableHeaderRef = HTMLTableElement // no HTMLTableHeadElement?

interface DataTableHeaderProps extends BackyardBaseProps<DataTableHeaderRef> {}

export { DataTableHeader }

export type { DataTableHeaderProps, DataTableHeaderRef }

export default DataTableHeader
