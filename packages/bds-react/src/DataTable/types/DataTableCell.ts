import type { UseGroupByCellProps, UseRowStateCellProps, CellProps, HeaderProps } from 'react-table'

export interface DataTableCell<D extends object = {}>
    extends UseGroupByCellProps<D>,
        UseRowStateCellProps<D> {}

export type DataTableCellProps<D extends object = {}> = CellProps<D>

export type DataTableBodyCellProps<D extends object = {}> = CellProps<D>

export type DataTableHeaderCellProps<D extends object = {}> = HeaderProps<D>
