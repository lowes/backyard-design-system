import * as React from 'react'

import DataTableBase from './DataTableBase'
import type { DataTableBaseProps, DataTableBaseRef } from './DataTableBase'
import DataTableProvider from './DataTableProvider'
import type { DataTableProviderProps } from './DataTableProvider'
import { MenuItemProps } from '../MenuItem'

/**
 * Backyard React Data Table
 *
 * Examples:
 *
 * - [DataTable](https://backyard.lowes.com/Components/DataTable)
 *
 * API:
 *
 * - [DataTable API](https://backyard.lowes.com/ComponentsAPI/DataTable)
 */
const DataTable = <Data extends object = {}>({
    children,
    columns,
    data,
    enableSortBy = false,
    enableRowSelection = false,
    enableRowExpansion = false,
    enableFilters = false,
    enableSearch = false,
    enableZebraStripes = false,
    disableFooter = false,
    disableFuzzyHighlight = false,
    disableScrollbar = false,
    menuItems = [],
    showToolbar = false,
    inverseHeader = false,
    toolbar = [],
    filters,
    sortBy,
    globalFilter,
    pageIndex,
    pageSize,
    rowsPerPageOptions = [10, 20, 50],
    initialState = {},
    options = {},
    plugins = [],
    filterTypes = {},
    defaultColumn = {},
    selectedRowIds,
    expanded,
    size = 'large',
    shape,
    showFilters,
    showSearch,
    onSelect,
    onTableUpdate,
    override,
    ...props
}: DataTableProps<Data>) => {
    return (
        <DataTableProvider<Data>
            columns={columns}
            data={data}
            enableSortBy={enableSortBy}
            enableRowSelection={enableRowSelection}
            enableRowExpansion={enableRowExpansion}
            enableFilters={enableFilters}
            enableSearch={enableSearch}
            disableFooter={disableFooter}
            enableZebraStripes={enableZebraStripes}
            disableFuzzyHighlight={disableFuzzyHighlight}
            disableScrollbar={disableScrollbar}
            menuItems={menuItems}
            showToolbar={showToolbar}
            filters={filters}
            sortBy={sortBy}
            globalFilter={globalFilter}
            toolbar={toolbar}
            inverseHeader={inverseHeader}
            rowsPerPageOptions={rowsPerPageOptions}
            initialState={initialState}
            options={options}
            plugins={plugins}
            filterTypes={filterTypes}
            defaultColumn={defaultColumn}
            selectedRowIds={selectedRowIds}
            expanded={expanded}
            size={size}
            shape={shape}
            pageIndex={pageIndex}
            pageSize={pageSize}
            showFilters={showFilters}
            showSearch={showSearch}
            onSelect={onSelect}
            onTableUpdate={onTableUpdate}
            {...override}
        >
            <DataTableBase {...props}>{children}</DataTableBase>
        </DataTableProvider>
    )
}

type DataTableRef = DataTableBaseRef

type DataTableOverrideProps = 'size' | 'onSelect'

interface DataTableProps<Data extends object = {}>
    extends Omit<DataTableBaseProps, DataTableOverrideProps> {
    /**
     * The column data structure
     */
    columns: DataTableProviderProps<Data>['columns']
    /**
     * The table data structure
     */
    data: DataTableProviderProps<Data>['data']
    /**
     * Enables the filter toggle switch
     */
    enableFilters?: boolean
    /**
     * Enables the search toggle switch
     */
    enableSearch?: boolean
    /**
     * List of menu items to provide to default menu
     */
    menuItems?: MenuItemProps[]
    /**
     * Override props for `DataTableProvider` to either override current functionality
     * or provide new context to children.
     */
    override?: DataTableProviderProps<Data>['override'] // object
    /**
     * Whether or not the sorting feature is enabled
     */
    enableSortBy?: DataTableProviderProps<Data>['enableSortBy']
    /**
     * Whether or not the row expansion feature is enabled
     */
    enableRowExpansion?: DataTableProviderProps<Data>['enableRowExpansion']
    /**
     * Whether or not the row selection feature is enabled
     */
    enableRowSelection?: DataTableProviderProps<Data>['enableRowSelection']
    /**
     * Whether or not the row alternates zebra stripe background colors
     */
    enableZebraStripes?: DataTableProviderProps<Data>['enableZebraStripes']
    /**
     * Whether or not the footer (pagination) is disabled
     */
    disableFooter?: DataTableProviderProps<Data>['disableFooter']
    /**
     * Whether or not the fuzzy highlight effect on the column values is disabled
     */
    disableFuzzyHighlight?: DataTableProviderProps<Data>['disableFuzzyHighlight']
    /**
     * Whether or not the default scrollbars within the data table are disabled
     *
     * Prevents overflowing so the root app must handle scrolling on overflow
     */
    disableScrollbar?: DataTableProviderProps<Data>['disableScrollbar']
    /**
     * Use to provide a list of column filter rules
     *
     * Can be used for initial value and will react to changes externally
     */
    filters?: DataTableProviderProps<Data>['filters']
    /**
     * Use to provide a list of sorting rules
     *
     * Can be used for initial value and will react to changes externally
     */
    sortBy?: DataTableProviderProps<Data>['sortBy']
    /**
     * Use to provide a global filter
     *
     * Can be used for initial value and will react to changes externally
     */
    globalFilter?: DataTableProviderProps<Data>['globalFilter']
    /**
     * Provide additional components to the `DataTable` toolbar here
     */
    toolbar?: DataTableProviderProps<Data>['toolbar']
    /**
     * Whether or not the header's background color is inversed
     */
    inverseHeader?: DataTableProviderProps<Data>['inverseHeader']
    /**
     * List of options for row count per page to provide to user through the pagination
     */
    rowsPerPageOptions?: DataTableProviderProps<Data>['rowsPerPageOptions']
    /**
     * Options for `react-table`
     *
     * See `react-table` documentation for more info
     * @link https://react-table.tanstack.com/docs/api/overview
     */
    options?: DataTableProviderProps<Data>['options']
    /**
     * Initial state for `react-table` to use
     *
     * See `react-table` documentation for more info
     * @link https://react-table.tanstack.com/docs/api/overview
     */
    initialState?: DataTableProviderProps<Data>['initialState']
    /**
     * Use to modify or to add `react-table` plugin hooks
     *
     * See `react-tabl` documentation for more info
     * @link https://react-table.tanstack.com/docs/api/overview
     */
    plugins?: DataTableProviderProps<Data>['plugins']
    /**
     * Use to alter/expand the behavior of the default column
     */
    defaultColumn?: DataTableProviderProps<Data>['defaultColumn']
    /**
     * Use to alter/expand the available set of filter type components
     */
    filterTypes?: DataTableProviderProps<Data>['filterTypes']
    /**
     * Use to rovide a list of rows that are selected
     *
     * Can be used for initial list and will react to external changes
     */
    selectedRowIds?: DataTableProviderProps<Data>['selectedRowIds']
    /**
     * Use to provide a list of rows that are expanded
     *
     * Can be used for initial list and will react to external changes
     */
    expanded?: DataTableProviderProps<Data>['expanded']
    /**
     * Use to provide the page index
     *
     * Can be used for initial page index and will react to external changes
     */
    pageIndex?: DataTableProviderProps<Data>['pageIndex']
    /**
     * Use to provide the page size
     *
     * Can be used for initial page size and will react to external changes
     */
    pageSize?: DataTableProviderProps<Data>['pageSize']
    /**
     * Enables column level filters
     */
    showFilters?: DataTableProviderProps<Data>['showFilters']
    /**
     * Enables the global filter feature
     */
    showSearch?: DataTableProviderProps<Data>['showSearch']
    /**
     * Triggers whenever a row is selected
     *
     * Only useful if `enableRowSelection` is true
     */
    onSelect?: DataTableProviderProps<Data>['onSelect']
    /**
     * Triggers whenever `react-table`'s state is update
     *
     * This happens when the user interacts with the table through
     * a filter, sort, pagination change, or changes the rows per page
     */
    onTableUpdate?: DataTableProviderProps<Data>['onTableUpdate']
    /**
     * Enables the toolbar to be visible
     */
    showToolbar?: boolean
    /**
     * Size of each cell
     */
    size?: DataTableProviderProps<Data>['size']
    /**
     * Shape of the whole data table
     */
    shape?: DataTableProviderProps<Data>['shape']
}

export { DataTable }

export type { DataTableProps, DataTableRef }

export default DataTable
