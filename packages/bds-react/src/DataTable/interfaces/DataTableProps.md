# Interface: DataTableProps<Data\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` = {} |

## Hierarchy

- `Omit`<[`DataTableBaseProps`](DataTableBaseProps.md), `DataTableOverrideProps`\>

  ↳ **`DataTableProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### columns

• **columns**: ({ `Header?`: `string` ; `accessor?`: `string`  } \| [`DataTableColumn`](../README.md#datatablecolumn)<`Data`\>)[]

The column data structure

___

### data

• **data**: `Data`[]

The table data structure

___

### defaultColumn

• `Optional` **defaultColumn**: `Partial`<[`DataTableColumn`](../README.md#datatablecolumn)<`Data`\>\>

Use to alter/expand the behavior of the default column

___

### disableFooter

• `Optional` **disableFooter**: `boolean`

Whether or not the footer (pagination) is disabled

___

### disableFuzzyHighlight

• `Optional` **disableFuzzyHighlight**: `boolean`

Whether or not the fuzzy highlight effect on the column values is disabled

___

### disableScrollbar

• `Optional` **disableScrollbar**: `boolean`

Whether or not the default scrollbars within the data table are disabled

Prevents overflowing so the root app must handle scrolling on overflow

___

### enableFilters

• `Optional` **enableFilters**: `boolean`

Enables the filter toggle switch

___

### enableRowExpansion

• `Optional` **enableRowExpansion**: `boolean`

Whether or not the row expansion feature is enabled

___

### enableRowSelection

• `Optional` **enableRowSelection**: `boolean`

Whether or not the row selection feature is enabled

___

### enableSearch

• `Optional` **enableSearch**: `boolean`

Enables the search toggle switch

___

### enableSortBy

• `Optional` **enableSortBy**: `boolean`

Whether or not the sorting feature is enabled

___

### enableZebraStripes

• `Optional` **enableZebraStripes**: `boolean`

Whether or not the row alternates zebra stripe background colors

___

### expanded

• `Optional` **expanded**: `Record`<`IdType`<`Data`\>, `boolean`\>

Use to provide a list of rows that are expanded

Can be used for initial list and will react to external changes

___

### filterTypes

• `Optional` **filterTypes**: `Record`<`string`, `any`\>

Use to alter/expand the available set of filter type components

___

### filters

• `Optional` **filters**: `Filters`<`Data`\>

Use to provide a list of column filter rules

Can be used for initial value and will react to changes externally

___

### globalFilter

• `Optional` **globalFilter**: `any`

Use to provide a global filter

Can be used for initial value and will react to changes externally

___

### initialState

• `Optional` **initialState**: `Partial`<[`DataTableState`](DataTableState.md)<`Data`\>\>

Initial state for `react-table` to use

See `react-table` documentation for more info

**`link`** https://react-table.tanstack.com/docs/api/overview

___

### inverseHeader

• `Optional` **inverseHeader**: `boolean`

Whether or not the header's background color is inversed

___

### menuItems

• `Optional` **menuItems**: `MenuItemProps`[]

List of menu items to provide to default menu

___

### onSelect

• `Optional` **onSelect**: (`info`: `TableEventInfo`<`Data`\>) => `void`

#### Type declaration

▸ (`info`): `void`

Triggers whenever a row is selected

Only useful if `enableRowSelection` is true

##### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `TableEventInfo`<`Data`\> |

##### Returns

`void`

___

### onTableUpdate

• `Optional` **onTableUpdate**: (`table`: [`DataTableInstance`](DataTableInstance.md)<`Data`\>) => `void`

#### Type declaration

▸ (`table`): `void`

Triggers whenever `react-table`'s state is update

This happens when the user interacts with the table through
a filter, sort, pagination change, or changes the rows per page

##### Parameters

| Name | Type |
| :------ | :------ |
| `table` | [`DataTableInstance`](DataTableInstance.md)<`Data`\> |

##### Returns

`void`

___

### options

• `Optional` **options**: `Partial`<[`DataTableOptions`](DataTableOptions.md)<`Data`\>\>

Options for `react-table`

See `react-table` documentation for more info

**`link`** https://react-table.tanstack.com/docs/api/overview

___

### override

• `Optional` **override**: `object`

Override props for `DataTableProvider` to either override current functionality
or provide new context to children.

___

### pageIndex

• `Optional` **pageIndex**: `number`

Use to provide the page index

Can be used for initial page index and will react to external changes

___

### pageSize

• `Optional` **pageSize**: `number`

Use to provide the page size

Can be used for initial page size and will react to external changes

___

### plugins

• `Optional` **plugins**: `PluginHook`<`Data`\>[]

Use to modify or to add `react-table` plugin hooks

See `react-tabl` documentation for more info

**`link`** https://react-table.tanstack.com/docs/api/overview

___

### rowsPerPageOptions

• `Optional` **rowsPerPageOptions**: `number`[]

List of options for row count per page to provide to user through the pagination

___

### selectedRowIds

• `Optional` **selectedRowIds**: `Record`<`IdType`<`Data`\>, `boolean`\>

Use to rovide a list of rows that are selected

Can be used for initial list and will react to external changes

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the whole data table

#### Overrides

Omit.shape

___

### showFilters

• `Optional` **showFilters**: `boolean`

Enables column level filters

___

### showSearch

• `Optional` **showSearch**: `boolean`

Enables the global filter feature

___

### showToolbar

• `Optional` **showToolbar**: `boolean`

Enables the toolbar to be visible

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"`` \| ``"custom"``

Size of each cell

___

### sortBy

• `Optional` **sortBy**: `SortingRule`<`Data`\>[]

Use to provide a list of sorting rules

Can be used for initial value and will react to changes externally

___

### toolbar

• `Optional` **toolbar**: `any`

Provide additional components to the `DataTable` toolbar here
