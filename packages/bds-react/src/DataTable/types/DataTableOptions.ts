import type {
    UseExpandedOptions,
    UseFiltersOptions,
    UseGlobalFiltersOptions,
    UseGroupByOptions,
    UsePaginationOptions,
    UseResizeColumnsOptions,
    UseRowSelectOptions,
    UseRowStateOptions,
    UseSortByOptions,
} from 'react-table'

export interface DataTableOptions<D extends object>
    extends UseExpandedOptions<D>,
        UseFiltersOptions<D>,
        UseGlobalFiltersOptions<D>,
        UseGroupByOptions<D>,
        UsePaginationOptions<D>,
        UseResizeColumnsOptions<D>,
        UseRowSelectOptions<D>,
        UseRowStateOptions<D>,
        UseSortByOptions<D>,
        // @todo cleanup if able
        // the following makes any option possible
        Record<string, any> {}
