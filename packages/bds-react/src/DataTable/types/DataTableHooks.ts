import type {
    UseExpandedHooks,
    UseGroupByHooks,
    UseRowSelectHooks,
    UseSortByHooks,
} from 'react-table'

export interface DataTableHooks<D extends object = {}>
    extends UseExpandedHooks<D>,
        UseGroupByHooks<D>,
        UseRowSelectHooks<D>,
        UseSortByHooks<D> {}
