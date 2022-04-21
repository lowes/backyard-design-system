import * as React from 'react'
import classNames from 'classnames'
import type { InfoOutlinedProps } from '@lowes-tech/bds-icons/InfoOutlined'
import Info from '@lowes-tech/bds-icons/InfoOutlined'

import type { TooltipProps } from '../../Tooltip'
import Tooltip from '../../Tooltip'
import type { TooltipPopperProps } from '../../TooltipPopper'
import TooltipPopper from '../../TooltipPopper'
import Typography from '../../Typography'
import useForwardedRef from '../../utils/hooks/useForwardedRef'
import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import useOverflowChildren from '../hooks/useOverflowChildren'

import TableCellWrapper from './styles/TableCellWrapper'
import { TableContext } from '../TableProvider'

/**
 * Corresponding html '<td>' tag of the Backyard Design System's table component.
 * Used with TableRow, TableHeader and TableBody to build out the body of a table.
 *
 * ex.
 * <Table>
 *   <TableHead>
 *       <TableRow>
 *           <TableHeader>Column 1</TableHeader>
 *           <TableHeader width={30}>Column 2</TableHeader>
 *           <TableHeader>Column 3</TableHeader>
 *       </TableRow>
 *   </TableHead>
 *   <TableBody>
 *       <TableRow>
 *           <TableCell>Data 1.1</TableCell>
 *           <TableCell>Data 1.2</TableCell>
 *           <TableCell>Data 1.3</TableCell>
 *       </TableRow>
 *       <TableRow>
 *           <TableCell>Data 2.1</TableCell>
 *   ...
 *
 * ex.
 * <Table>
 *   <TableBody>
 *       <TableRow>
 *           <TableHeader>Header 1</TableHeader>
 *           <TableCell>Data 1</TableCell>
 *       </TableRow>
 *       <TableRow>
 *           <TableHeader>Header 2</TableHeader>
 *           <TableCell>Data 2</TableCell>
 *       </TableRow>
 *   </TableBody>
 * </Table>
 *
 * ex.
 * <Table>
 *   <TableRow>
 *       <TableCell>Header 1</TableCell>
 *       <TableCell>Data 1</TableCell>
 *   </TableRow>
 *   <TableRow>
 *       <TableCell>Header 2</TableCell>
 *       <TableCell>Data 2</TableCell>
 *   </TableRow>
 * </Table>
 */
const TableCell: BDSForwardRef<TableCellProps> = React.forwardRef<TableCellRef, TableCellProps>(
    function TableCell(
        {
            className,
            children,
            width,
            info,
            tooltipProps = {},
            popoverProps = {},
            popperProps = {},
            infoProps,
            ...props
        },
        ref,
    ) {
        const { shape } = React.useContext(TableContext)
        const cellRef = useForwardedRef(ref)

        const hasOverflowChildren = useOverflowChildren(cellRef, false)

        return (
            <TableCellWrapper
                className={classNames(
                    'table-body-cell',
                    'table-cell',
                    'data-cell',
                    `shape--${shape}`,
                    hasOverflowChildren ? 'overflowing' : null,
                    className,
                )}
                width={width}
                {...props}
                ref={cellRef}
            >
                <div className="td-container">
                    <div className="cell-content">
                        {hasOverflowChildren ? (
                            <TooltipPopper
                                tooltip={
                                    <Tooltip shape={shape} {...tooltipProps}>
                                        {children}
                                    </Tooltip>
                                }
                                {...popoverProps}
                                {...popperProps}
                            >
                                <Typography as="div" variant="body_1" color="text_tertiary">
                                    {children}
                                </Typography>
                            </TooltipPopper>
                        ) : (
                            <Typography as="div" variant="body_1" color="text_tertiary">
                                {children}
                            </Typography>
                        )}
                    </div>

                    {info ? (
                        <TooltipPopper
                            tooltip={
                                <Tooltip shape={shape} {...tooltipProps}>
                                    {info}
                                </Tooltip>
                            }
                            {...popoverProps}
                            {...popperProps}
                        >
                            <Info
                                className="more-info"
                                size="size_18"
                                color="icon_interactive"
                                {...infoProps}
                            />
                        </TooltipPopper>
                    ) : null}
                </div>
            </TableCellWrapper>
        )
    },
)

type TableCellRef = HTMLTableCellElement

interface TableCellProps extends BackyardBaseProps<TableCellRef> {
    /**
     * Column width in percentage.
     * When set it controls the width of its parent column and by proxy all cells that are in the same table column.
     * If left unset defaults to auto and distributes the width of the of the table evenly among all of the table's columns.
     */
    width?: number
    /**
     * When passed adds an Info icon to the cell that when hovered displays to passed string in a tooltip.
     */
    info?: string
    /**
     * String, Link or Icon to be placed into the TableCell as content
     */
    children?: React.ReactNode
    /**
     * Overwrite props for the tooltips
     */
    tooltipProps?: React.PropsWithRef<TooltipProps>
    /**
     * Overwrite props for the tooltipPoppers
     */
    popoverProps?: Partial<React.PropsWithRef<TooltipPopperProps>>
    /**
     * Overwrite props for the tooltipPoppers
     *
     * Alias of `popoverProps`
     */
    popperProps?: Partial<React.PropsWithRef<TooltipPopperProps>>
    /**
     * Overwrite props for the info icons
     */
    infoProps?: React.PropsWithRef<InfoOutlinedProps>
}

TableCell.bdsName = 'TableCell'

export { TableCell }

export type { TableCellProps, TableCellRef }

export default TableCell
