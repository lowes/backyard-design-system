import * as React from 'react'

import { useTable, usePagination, useExpanded, useSortBy, useFlexLayout, Column } from 'react-table'
import type { IdType, PluginHook } from 'react-table'

import type {
    DataTableInstance,
    DataTableOptions,
    DataTableState,
    DataTableColumn,
    DataTableRow,
} from '../types'
import { contains, equals, startsWith } from './filters'
import { TextFilter } from '../DataTableFilters'
import { MenuItemProps } from '../../MenuItem'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

import useSelectColumn from '../hooks/useSelectColumn'
import useExpandColumn from '../hooks/useExpandColumn'
import useHighlightCell from '../hooks/useHighlightCell'
// @todo remove at a later date if decided it is not needed
// import useScrollbarColumn from '../hooks/useScrollbarColumn'

// @todo Temp `react-table` imports
import useGlobalFilter from '../hooks/react-table/useGlobalFilter'
import useFilters from '../hooks/react-table/useFilters'
import useRowSelect from '../hooks/react-table/useRowSelect'

/**
 * DataTable Context
 */
const DataTableContext: React.Context<DataTableContextValues<any>> = React.createContext(null)

/**
 * DataTable Consumer
 */
const DataTableConsumer: React.Consumer<DataTableContextValues<any>> = DataTableContext.Consumer

const defaultFilters = []
const defaultGlobalFilter = ''
const defaultSortBy = []
const defaultPageIndex = 0
const defaultPageSize = 10

/**
 * Backyard React Data Table Provider
 *
 * Provides values to children and handles state management of the `DataTable`.
 */
const DataTableProvider = <Data extends object = {}>({
    children,
    columns: columnsProp,
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
    inverseHeader = false,
    globalFilter = defaultGlobalFilter,
    filters = defaultFilters,
    sortBy = defaultSortBy,
    pageIndex = defaultPageIndex,
    pageSize = defaultPageSize,
    rowsPerPageOptions = [10, 20, 50],
    initialState = {},
    options = {},
    plugins = [],
    filterTypes: filterTypesProp = {},
    defaultColumn: defaultColumnProp = {},
    selectedRowIds,
    expanded,
    menuItems,
    showToolbar,
    showFilters: showFiltersProp,
    showSearch: showSearchProp,
    toolbar = [],
    size = 'large',
    shape: shapeProp, // = 'rounded',
    onSelect,
    onTableUpdate,
    ...override
}: DataTableProviderProps<Data>): React.ReactElement<DataTableProviderProps<Data>> => {
    const theme = useBackyardTheme()

    const { shape: shapeContext } = theme.context

    const shape = getShape(shapeProp, shapeContext)

    // whether to show the filters
    const [showFilters, setShowFilters] = React.useState(showFiltersProp || filters.length > 0)

    // whether to show the search bar
    const [showSearch, setShowSearch] = React.useState(showSearchProp || globalFilter)

    const [previousSelectedRowIds, setPreviousSelectedRowIds] =
        React.useState<Record<IdType<Data>, boolean>>(null)

    // previous state
    const [previousState, setPreviousState] = React.useState(null)

    const columns = columnsProp as Array<DataTableColumn<Data>>

    // filtering algorithms available
    const filterTypes = React.useMemo(
        () => ({
            contains,
            equals,
            startsWith,
            ...filterTypesProp,
        }),
        [],
    )

    const sortTypes = React.useMemo(() => ({}), [])

    // the fallback filter
    const defaultColumn = React.useMemo(
        () => ({
            Filter: TextFilter,
            ...defaultColumnProp,
        }),
        [],
    )

    const values = {
        scrollbarWidth: React.useMemo(() => {
            // If SSR,
            if (typeof document === 'undefined') {
                return 16 // average scrollbar size
            }

            // thanks too https://davidwalsh.name/detect-scrollbar-width
            const scrollDiv = document.createElement('div')

            scrollDiv.setAttribute(
                'style',
                'width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;',
            )

            document.body.appendChild(scrollDiv)
            const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
            document.body.removeChild(scrollDiv)

            return scrollbarWidth
        }, []),
    }

    const context = React.useMemo(
        () => ({
            showSearch,
            showFilters,
            pageIndex,
            pageSize,
            enableSortBy,
            enableRowSelection,
            enableRowExpansion,
            enableZebraStripes,
            disableFooter,
            disableFuzzyHighlight,
            disableScrollbar,
            size,
            shape,
            enableFilters,
            enableSearch,
            inverseHeader,
            menuItems,
            showToolbar,
            toolbar,
            globalFilter,
            filters,
            rowsPerPageOptions,
            selectedRowIds,
            sortBy,
            expanded,
            options,
        }),
        [
            showSearchProp,
            showFiltersProp,
            pageIndex,
            pageSize,
            enableSortBy,
            enableRowSelection,
            enableRowExpansion,
            enableZebraStripes,
            disableFooter,
            disableFuzzyHighlight,
            disableScrollbar,
            size,
            shape,
            data,
            enableFilters,
            enableSearch,
            inverseHeader,
            menuItems,
            showToolbar,
            globalFilter,
            filters,
            toolbar,
            rowsPerPageOptions,
            selectedRowIds,
            sortBy,
            expanded,
            options,
        ],
    )

    const table = useTable<Data>(
        {
            columns: columns as unknown as Column<Data>[],
            data: data as unknown as Data[],
            defaultColumn: defaultColumn as unknown as Column<Data>,
            filterTypes,
            sortTypes,
            disableFilters: !enableFilters,
            disableSortBy: !enableSortBy,
            initialState: {
                pageIndex: context.pageIndex,
                pageSize: context.pageSize,
                globalFilter: context.globalFilter,
                filters: context.filters,
                sortBy: context.sortBy,
                ...(context.selectedRowIds ? { selectedRowIds: context.selectedRowIds } : {}),
                ...(context.expanded ? { expanded: context.expanded } : {}),
                ...initialState,
            },
            paginateExpandedRows: false,
            getSubRows: (row: any) => row.subRows,
            ...options,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        useExpanded,
        usePagination,
        useRowSelect,
        useExpandColumn(theme, enableRowExpansion),
        useSelectColumn(theme, enableRowSelection),
        useHighlightCell(disableFuzzyHighlight),
        useFlexLayout,
        ...plugins,
        // useScrollbarColumn(values.scrollbarWidth, disableScrollbar),
    )

    const states = {
        showFilters,
        showSearch,
        setShowFilters,
        setShowSearch,
    }

    const functions = {
        onSelect,
        getColumnWidths: (column: Column<Data>): ColumnWidths<Data> => ({
            ...(column.width ? { width: column.width } : {}),
            ...(column.totalWidth ? { width: column.totalWidth } : {}),
            ...(column.minWidth ? { minWidth: column.minWidth } : {}),
            ...(column.maxWidth ? { maxWidth: column.maxWidth } : {}),
        }),
    }

    React.useEffect(() => {
        if (typeof showFiltersProp !== 'undefined' && showFiltersProp !== showFilters) {
            setShowFilters(showFiltersProp)
        }
    }, [showFiltersProp])

    React.useEffect(() => {
        if (typeof showSearchProp !== 'undefined' && showSearchProp !== showSearch) {
            setShowSearch(showSearchProp)
        }
    }, [showSearchProp])

    React.useEffect(() => {
        table.setAllFilters(context.filters || defaultFilters)
    }, [context.filters])

    React.useEffect(() => {
        table.setGlobalFilter(context.globalFilter || defaultGlobalFilter)
    }, [context.globalFilter])

    React.useEffect(() => {
        table.setSortBy(context.sortBy || defaultSortBy)
    }, [context.sortBy])

    React.useEffect(() => {
        if (context.selectedRowIds) {
            table.selectedFlatRows.forEach((row) => {
                if (typeof row?.toggleRowExpanded === 'function') {
                    row.toggleRowSelected(Boolean(context.selectedRowIds[row.id]))
                }
            })
        }
    }, [context.selectedRowIds])

    React.useEffect(() => {
        table.gotoPage(context.pageIndex || defaultPageIndex)
    }, [context.pageIndex])

    React.useEffect(() => {
        table.setPageSize(context.pageSize || defaultPageSize)
    }, [context.pageSize])

    React.useEffect(() => {
        if (context.expanded) {
            table.expandedRows.forEach((row) => {
                if (typeof row?.toggleRowExpanded === 'function') {
                    row.toggleRowExpanded(Boolean(context.expanded[row.id]))
                }
            })
        }
    }, [context.expanded])

    React.useEffect(() => {
        if (onSelect) {
            const selected = table.selectedFlatRows.filter(
                (row) => !previousSelectedRowIds?.[row.id],
            )

            const unselected = Object.keys(previousSelectedRowIds || {})
                .filter((id) => !table.state.selectedRowIds[id])
                .map((id) => table.rowsById[id])

            onSelect({
                ids: table.state.selectedRowIds,
                rows: table.selectedFlatRows,
                table,
                state: table.state,
                selected,
                unselected,
            })

            setPreviousSelectedRowIds(table.state.selectedRowIds)
        }
    }, [table.state.selectedRowIds])

    // Side effect for when table's instance state changes...
    React.useEffect(() => {
        // If `onTableUpdate` trigger defined update has not already been called for the
        // currently given instance state,
        if (onTableUpdate && JSON.stringify(previousState) !== JSON.stringify(table.state)) {
            // Trigger `onTableUpdate` callback
            onTableUpdate(table)

            // Set previous state so the same call does
            // not trigger twice for the same exact
            // state of the table
            setPreviousState(table.state)
        }
    }, [table.state])

    return (
        <DataTableContext.Provider
            value={
                {
                    ...table,
                    ...context,
                    ...states,
                    ...functions,
                    ...values,
                    ...override,
                } as DataTableContextValues<Data>
            }
        >
            {children}
        </DataTableContext.Provider>
    )
}

type ColumnWidths<Data extends object> = {
    width?: DataTableColumn<Data>['width']
    minWidth?: DataTableColumn<Data>['minWidth']
    maxWidth?: DataTableColumn<Data>['maxWidth']
    totalWidth?: DataTableColumn<Data>['totalWidth']
}

type DataTableProviderOverrideProps = 'columns' | 'enableSearch' | 'enableFilters' | 'showToolbar'

/**
 * Context values that can be passed to children via
 *
 * `const context = React.useContext(DataTableContext)`
 */
interface DataTableContextValues<Data extends object> extends DataTableInstance<Data> {
    enableSortBy: DataTableProviderProps<Data>['enableSortBy']
    enableRowSelection: DataTableProviderProps<Data>['enableRowSelection']
    enableRowExpansion: DataTableProviderProps<Data>['enableRowExpansion']
    enableZebraStripes: DataTableProviderProps<Data>['enableZebraStripes']
    disableFooter: DataTableProviderProps<Data>['disableFooter']
    disableFuzzyHighlight: DataTableProviderProps<Data>['disableFuzzyHighlight']
    disableScrollbar: DataTableProviderProps<Data>['disableScrollbar']
    inverseHeader: DataTableProviderProps<Data>['inverseHeader']
    toolbar: DataTableProviderProps<Data>['toolbar']
    rowsPerPageOptions: DataTableProviderProps<Data>['rowsPerPageOptions']
    selectedRowIds: DataTableProviderProps<Data>['selectedRowIds']
    expanded: DataTableProviderProps<Data>['expanded']
    pageIndex: DataTableProviderProps<Data>['pageIndex']
    pageSize: DataTableProviderProps<Data>['pageSize']
    onSelect?: DataTableProviderProps<Data>['onSelect']
    getColumnWidths?: (column: Column<Data>) => ColumnWidths<Data>
    size: DataTableProviderProps<Data>['size']
    shape: DataTableProviderProps<Data>['shape']
    /**
     * `react-table` options
     */
    options: DataTableProviderProps<Data>['options']
    /**
     * Enables the filter toggle switch
     */
    enableFilters: boolean
    /**
     * Enables the search toggle switch
     */
    enableSearch: boolean
    /**
     * The menu items data structure
     */
    menuItems: MenuItemProps[]
    /**
     * Show the filters for the table.
     */
    showFilters: boolean
    /**
     * Show the search for the table.
     */
    showSearch: boolean
    /**
     * Enables the toolbar to be visible
     */
    showToolbar: boolean
    /**
     * Sets the value for the showFilters property.
     */
    setShowFilters: (boolean) => void
    /**
     * Sets the value for the showSearch property.
     */
    setShowSearch: (boolean) => void
}

interface TableEventInfo<Data extends object = {}> {
    table: DataTableInstance<Data>
    state: DataTableState<Data>
    ids: Record<IdType<Data>, boolean>
    rows: DataTableRow<Data>[]
    selected: DataTableRow<Data>[]
    unselected: DataTableRow<Data>[]
}

interface DataTableProviderProps<Data extends object = {}>
    extends Omit<DataTableOptions<Data>, DataTableProviderOverrideProps> {
    /**
     * React Children to provide context to
     */
    children: React.ReactNode
    columns: Array<
        | DataTableColumn<Data>
        | {
              Header?: string
              accessor?: string
          }
    >
    data: Data[]
    enableSortBy?: boolean
    enableRowExpansion?: boolean
    enableRowSelection?: boolean
    enableZebraStripes?: boolean
    disableFooter?: boolean
    disableFuzzyHighlight?: boolean
    disableScrollbar?: boolean
    globalFilter?: DataTableState<Data>['globalFilter']
    filters?: DataTableState<Data>['filters']
    sortBy?: DataTableState<Data>['sortBy']
    inverseHeader?: boolean
    rowsPerPageOptions?: number[]
    options?: Partial<DataTableOptions<Data>>
    initialState?: Partial<DataTableState<Data>>
    plugins?: PluginHook<Data>[]
    defaultColumn?: Partial<DataTableColumn<Data>>
    filterTypes?: Record<string, any>
    selectedRowIds?: Record<IdType<Data>, boolean>
    expanded?: Record<IdType<Data>, boolean>
    pageIndex?: number
    pageSize?: number
    showSearch?: boolean
    showFilters?: boolean
    onSelect?: (info: TableEventInfo<Data>) => void
    onTableUpdate?: (table: DataTableInstance<Data>) => void
    /**
     * Enables the filter toggle switch
     */
    enableFilters?: boolean
    /**
     * Enables the search toggle switch
     */
    enableSearch?: boolean
    /**
     * The menu items data structure
     */
    menuItems?: MenuItemProps[]
    /**
     * Enables the toolbar to be visible
     */
    showToolbar?: boolean
    /**
     * Size of each cell
     */
    size?: 'small' | 'medium' | 'large' | 'custom'
    /**
     * Shape of the whole table
     */
    shape?: 'rounded' | 'squared'
    /**
     * Override props for `DataTableProvider` to either override current functionality
     * or provide new context to children.
     */
    override?: object
}

export { DataTableProvider, DataTableContext, DataTableConsumer }

export type { DataTableContextValues, DataTableProviderProps }

export default DataTableProvider
