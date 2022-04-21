import * as React from 'react'
import classNames from 'classnames'

import { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import TableBodyWrapper from './styles/TableBodyWrapper'

/**
 * Corresponding html '<tBody>' tag of the Backyard Design System's table component.
 * Used with TableRow, TableCell and (optionally) TableHeader to build out the body of a table.
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
 */
const TableBody: BDSForwardRef<TableBodyProps> = React.forwardRef<TableBodyRef, TableBodyProps>(
    function TableBody({ children, className, ...props }, ref) {
        return (
            <TableBodyWrapper className={classNames('table-body', className)} {...props} ref={ref}>
                {children}
            </TableBodyWrapper>
        )
    },
)

type TableBodyRef = HTMLTableSectionElement

interface TableBodyProps extends BackyardBaseProps<TableBodyRef> {}

TableBody.bdsName = 'TableBody'

export { TableBody }

export type { TableBodyProps, TableBodyRef }

export default TableBody
