import * as React from 'react'
import classNames from 'classnames'

import { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import TableWrapper from './styles/TableWrapper'
import TableProvider from './TableProvider/TableProvider'

/**
 * Corresponding html '<table>' tag of the Backyard Design System's table component.
 * Used with TableRow, TableCell, TableHeader, TableHeader and TableBody to build out various tables.
 *
 * ex.
 * <Table>
 *   <TableHead>
 *       <TableRow>
 *           <TableHeader>Column 1</TableHeader>
 *           <TableHeader>Column 2</TableHeader>
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
 *           <TableCell>Data 2.2</TableCell>
 *           <TableCell>Data 2.3</TableCell>
 *       </TableRow>
 *   </TableBody>
 * </Table>
 *
 * ex.
 * <Table>
 *   <TableRow>
 *       <TableHeader>Header 1</TableHeader>
 *       <TableCell>Data 1</TableCell>
 *   </TableRow>
 *   <TableRow>
 *       <TableHeader>Header 2</TableHeader>
 *       <TableCell>Data 2</TableCell>
 *   </TableRow>
 * </Table>
 */
const Table: BDSForwardRef<TableProps> = React.forwardRef<TableRef, TableProps>(function Table(
    {
        children,
        className,
        shape: shapeProp, // = 'rounded',
        rightRule = true,
        variant = 'filled',
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'Table',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <TableProvider shape={shape}>
            <TableWrapper
                className={classNames(
                    'table',
                    `shape--${shape}`,
                    `variant--${variant}`,
                    String(rightRule) === 'true' ? 'right-rule-on' : '',
                    className,
                )}
                {...props}
                ref={ref}
            >
                {children}
            </TableWrapper>
        </TableProvider>
    )
})

type TableRef = HTMLTableElement

interface TableProps extends BackyardBaseProps<TableRef> {
    /**
     * Shape of the table edges
     */
    shape?: 'rounded' | 'squared'
    /**
     * Toggle on and off right rule
     */
    rightRule?: boolean | 'true' | 'false'
    /**
     * Show & hide the th background color
     */
    variant?: 'filled' | 'outlined'
}

Table.bdsName = 'Table'

export { Table }

export type { TableProps, TableRef }

export default Table
