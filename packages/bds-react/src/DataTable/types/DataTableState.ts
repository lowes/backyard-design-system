import type {
    UseColumnOrderState,
    UseExpandedState,
    UseFiltersState,
    UseGlobalFiltersState,
    UseGroupByState,
    UsePaginationState,
    UseResizeColumnsState,
    UseRowSelectState,
    UseRowStateState,
    UseSortByState,
} from 'react-table'

export interface DataTableState<D extends object = {}>
    extends UseColumnOrderState<D>,
        UseExpandedState<D>,
        UseFiltersState<D>,
        UseGlobalFiltersState<D>,
        UseGroupByState<D>,
        UsePaginationState<D>,
        UseResizeColumnsState<D>,
        UseRowSelectState<D>,
        UseRowStateState<D>,
        UseSortByState<D> {}
