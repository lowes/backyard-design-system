import {
    DataTableOptions,
    DataTableHooks,
    DataTableInstance,
    DataTableState,
    DataTableColumn,
    DataTableColumnInterface,
    DataTableColumnInstance,
    DataTableCell,
    DataTableRow,
} from './types'

declare module 'react-table' {
    /**
     * Declares the used modules from `react-table`
     *
     * @todo by default, exposes all custom modules... cleanup will be possible near end of creation
     */

    export interface TableOptions<D extends object> extends DataTableOptions<D> {}

    export interface Hooks<D extends object = {}> extends DataTableHooks<D> {}

    export interface TableInstance<D extends object = {}> extends DataTableInstance<D> {}

    export interface TableState<D extends object = {}> extends DataTableState<D> {}

    export interface Column<D extends object = {}> extends DataTableColumn<D> {}

    export interface ColumnInterface<D extends object = {}> extends DataTableColumnInterface<D> {}

    export interface ColumnInstance<D extends object = {}> extends DataTableColumnInstance<D> {}

    export interface Cell<D extends object = {}, V = any> extends DataTableCell<D, V> {}

    export interface Row<D extends object = {}> extends DataTableRow<D> {}
}
