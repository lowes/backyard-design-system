import * as React from 'react'
import classNames from 'classnames'

import { ResizeObserver } from '@juggle/resize-observer'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import Typography from '../../Typography'

import { useDataTable } from '../hooks'

import DataTableBodyWrapper from './styles/DataTableBodyWrapper'

const isOverflown = ({ clientHeight, scrollHeight }) => {
    return scrollHeight > clientHeight
}

/**
 * Backyard React Data Table Body
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the body of the data table
 */
const DataTableBody = <Data extends object = any>({
    children,
    className,
    ...props
}: DataTableBodyProps): React.ReactElement<DataTableBodyProps> => {
    const {
        getTableBodyProps,
        page,
        prepareRow,
        size,
        enableRowSelection,
        enableRowExpansion,
        enableZebraStripes,
        getColumnWidths,
    } = useDataTable<Data>()

    const [overflow, setOverflow] = React.useState(false)
    const bodyRef = React.useRef(null)

    const checkOverflow = () => {
        if (isOverflown(bodyRef.current)) {
            setOverflow(true)
        }
    }

    const ro = new ResizeObserver(checkOverflow)

    React.useEffect(() => {
        ro.observe(bodyRef.current)

        return () => ro.disconnect()
    }, [bodyRef])

    let visibleRowIndex = -1

    return (
        <DataTableBodyWrapper
            className={classNames(
                'data-table-body',
                {
                    'zebra-stripes': enableZebraStripes,
                },
                className,
            )}
            {...getTableBodyProps()}
            {...props}
            ref={bodyRef}
        >
            {page.map((row) => {
                prepareRow(row)

                const isSubRow = row.id.indexOf('.') > -1

                visibleRowIndex += isSubRow ? 0 : 1

                return (
                    <div
                        {...row.getRowProps({
                            className: classNames(
                                'data-table-body-row',
                                'data-table-row',
                                `size--${size}`,
                                {
                                    selected: row.isSelected,
                                    expanded: row.canExpand && row.isExpanded,
                                    'sub-row': isSubRow,
                                    zebra: enableZebraStripes && visibleRowIndex % 2,
                                },
                            ),
                        })}
                    >
                        {row.cells.map((cell, index) => {
                            const isNotSpecialColumn =
                                index < Number(enableRowExpansion) + Number(enableRowSelection)

                            if (overflow && cell.column.id === 'scrollbar') {
                                return null
                            }

                            const Cell = cell.column.Wrapper || 'div'

                            return !isSubRow || (isSubRow && isNotSpecialColumn) ? (
                                <Cell
                                    {...cell.getCellProps({
                                        className: classNames(
                                            'data-table-body-cell',
                                            'data-table-cell',
                                            cell.column.id,
                                        ),
                                        style: {
                                            ...getColumnWidths(cell.column),
                                        },
                                    })}
                                >
                                    <Typography
                                        variant="body_1"
                                        as="div"
                                        className={classNames(
                                            'data-table-body-cell-content',
                                            'cell-content',
                                        )}
                                    >
                                        {cell.render('Cell')}
                                    </Typography>
                                </Cell>
                            ) : null
                        })}
                        {isSubRow ? (
                            <div
                                className={classNames('data-table-subrow-cell', 'data-table-cell')}
                            >
                                <Typography
                                    variant="body_1"
                                    as="div"
                                    className={classNames(
                                        'data-table-subrow-cell-content',
                                        'cell-content',
                                    )}
                                >
                                    {row.original}
                                </Typography>
                            </div>
                        ) : null}
                    </div>
                )
            })}
        </DataTableBodyWrapper>
    )
}

type DataTableBodyRef = HTMLTableElement // no HTMLTableBodyElement?

interface DataTableBodyProps extends BackyardBaseProps<DataTableBodyRef> {}

export { DataTableBody }

export type { DataTableBodyProps, DataTableBodyRef }

export default DataTableBody
