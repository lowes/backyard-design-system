import * as React from 'react'
import classNames from 'classnames'

import { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import TableHeadWrapper from './styles/TableHeadWrapper'

/**
 * Corresponding html '<thead>' tag of the Backyard Design System's table component.
 * Used with TableRow and TableHeader to build out the headers for a table.
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
 * ...
 */
const TableHead: BDSForwardRef<TableHeadProps> = React.forwardRef<TableHeadRef, TableHeadProps>(
    function TableHead({ children, className, ...props }, ref) {
        return (
            <TableHeadWrapper className={classNames('table-head', className)} {...props} ref={ref}>
                {children}
            </TableHeadWrapper>
        )
    },
)

type TableHeadRef = HTMLTableSectionElement

interface TableHeadProps extends BackyardBaseProps<TableHeadRef> {}

TableHead.bdsName = 'TableHead'

export { TableHead }

export type { TableHeadProps, TableHeadRef }

export default TableHead
