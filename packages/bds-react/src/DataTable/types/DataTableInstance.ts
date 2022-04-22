import type {
    UseColumnOrderInstanceProps,
    UseExpandedInstanceProps,
    UseFiltersInstanceProps,
    UseGlobalFiltersInstanceProps,
    UseGroupByInstanceProps,
    UsePaginationInstanceProps,
    UseRowSelectInstanceProps,
    UseRowStateInstanceProps,
    UseSortByInstanceProps,
    UseTableInstanceProps,
} from 'react-table'

export interface DataTableInstance<D extends object = {}>
    extends UseTableInstanceProps<D>,
        UseColumnOrderInstanceProps<D>,
        UseExpandedInstanceProps<D>,
        UseFiltersInstanceProps<D>,
        UseGlobalFiltersInstanceProps<D>,
        UseGroupByInstanceProps<D>,
        UsePaginationInstanceProps<D>,
        UseRowSelectInstanceProps<D>,
        UseRowStateInstanceProps<D>,
        UseSortByInstanceProps<D> {}
