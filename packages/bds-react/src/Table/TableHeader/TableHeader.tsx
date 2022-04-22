import type { InfoOutlinedProps } from '@lowes-tech/bds-icons/InfoOutlined'
import Info from '@lowes-tech/bds-icons/InfoOutlined'
import classNames from 'classnames'
import * as React from 'react'
import type { TooltipProps } from '../../Tooltip'
import Tooltip from '../../Tooltip'
import type { TooltipPopperProps } from '../../TooltipPopper'
import TooltipPopper from '../../TooltipPopper'

import Typography from '../../Typography'
import useForwardedRef from '../../utils/hooks/useForwardedRef'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import useOverflowChildren from '../hooks/useOverflowChildren'
import { TableContext } from '../TableProvider/TableProvider'
import TableHeaderWrapper from './styles/TableHeaderWrapper'

/**
 * Corresponding html '<th>' tag of the Backyard Design System's table component.
 * Used with TableRow, TableCell and TableBody to build out the body of a table.
 * Used with TableRow, and TableHead to build out the header of a table.
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
 *   ...
 *
 * ex 2.
 * <Table>
 *   <TableBody>
 *       <TableRow>
 *           <TableHeader variant='outlined' width={30}>Header 1</TableHeader>
 *           <TableCell>Data 1</TableHeader>
 *       </TableRow>
 *       <TableRow>
 *           <TableHeader variant='outlined'
 *                        moreInfo='Here is some extra text'>
 *                Header 2
 *           </TableHeader>
 *           <TableCell>Data 2</TableCell>
 *       </TableRow>
 *   </TableBody>
 * </Table>
 */
const TableHeader: BDSForwardRef<TableHeaderProps> = React.forwardRef<
    TableHeaderRef,
    TableHeaderProps
>(function TableHeader(
    {
        className,
        children,
        width,
        info,
        tooltipProps = {},
        popoverProps = {},
        popperProps = {},
        infoProps = {},
        ...props
    },
    ref,
) {
    const { shape } = React.useContext(TableContext)

    const headerRef = useForwardedRef(ref)

    // True if the cell contents are larger then the cell and thus have been truncated
    const hasOverflowChildren = useOverflowChildren(headerRef, false)

    return (
        <TableHeaderWrapper
            className={classNames(
                'table-header-cell',
                'header-cell',
                'table-cell',
                `shape--${shape}`,
                hasOverflowChildren ? 'overflowing' : null,
                className,
            )}
            width={width}
            {...props}
            ref={headerRef}
        >
            <div className="th-container">
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
                            <Typography className="header-content" variant="h5">
                                {children}
                            </Typography>
                        </TooltipPopper>
                    ) : (
                        <Typography className="header-content" variant="h5">
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
        </TableHeaderWrapper>
    )
})

type TableHeaderRef = HTMLTableHeaderCellElement

interface TableHeaderProps extends BackyardBaseProps<TableHeaderRef> {
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
     * String to be placed into the TableCell as content
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

TableHeader.bdsName = 'TableHeader'

export { TableHeader }

export type { TableHeaderProps, TableHeaderRef }

export default TableHeader
