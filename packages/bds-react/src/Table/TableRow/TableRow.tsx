import * as React from 'react'
import classNames from 'classnames'

import { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import TableRowWrapper from './styles/TableRowWrapper'

/**
 * Corresponding html '<tr>' tag of the Backyard Design System's table component.
 * Used with TableCell, TableHeader and TableBody to build out the body of a table.
 * Used with TableHeader and TableHead to build out the header of a table.
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
 */
const TableRow: BDSForwardRef<TableRowProps> = React.forwardRef<TableRowRef, TableRowProps>(
    function TableRow({ children, className, ...props }, ref) {
        return (
            <TableRowWrapper className={classNames('table-row', className)} {...props} ref={ref}>
                {children}
            </TableRowWrapper>
        )
    },
)

type TableRowRef = HTMLTableRowElement

interface TableRowProps extends BackyardBaseProps<TableRowRef> {}

TableRow.bdsName = 'TableRow'

export { TableRow }

export type { TableRowProps, TableRowRef }

export default TableRow
