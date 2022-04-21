import type {
    UseExpandedRowProps,
    UseGroupByRowProps,
    UseRowSelectRowProps,
    UseRowStateRowProps,
} from 'react-table'

export interface DataTableRow<D extends object = {}>
    extends UseExpandedRowProps<D>,
        UseGroupByRowProps<D>,
        UseRowSelectRowProps<D>,
        UseRowStateRowProps<D> {}
