# Interface: DataTableProviderProps<Data\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` = {} |

## Hierarchy

- `Omit`<[`DataTableOptions`](DataTableOptions.md)<`Data`\>, `DataTableProviderOverrideProps`\>

  ↳ **`DataTableProviderProps`**

## Properties

### children

• **children**: `ReactNode`

React Children to provide context to

___

### columns

• **columns**: ([`DataTableColumn`](../README.md#datatablecolumn)<`Data`\> \| { `Header?`: `string` ; `accessor?`: `string`  })[]

___

### data

• **data**: `Data`[]

___

### defaultColumn

• `Optional` **defaultColumn**: `Partial`<[`DataTableColumn`](../README.md#datatablecolumn)<`Data`\>\>

___

### disableFooter

• `Optional` **disableFooter**: `boolean`

___

### disableFuzzyHighlight

• `Optional` **disableFuzzyHighlight**: `boolean`

___

### disableScrollbar

• `Optional` **disableScrollbar**: `boolean`

___

### enableFilters

• `Optional` **enableFilters**: `boolean`

Enables the filter toggle switch

___

### enableRowExpansion

• `Optional` **enableRowExpansion**: `boolean`

___

### enableRowSelection

• `Optional` **enableRowSelection**: `boolean`

___

### enableSearch

• `Optional` **enableSearch**: `boolean`

Enables the search toggle switch

___

### enableSortBy

• `Optional` **enableSortBy**: `boolean`

___

### enableZebraStripes

• `Optional` **enableZebraStripes**: `boolean`

___

### expanded

• `Optional` **expanded**: `Record`<`IdType`<`Data`\>, `boolean`\>

___

### filterTypes

• `Optional` **filterTypes**: `Record`<`string`, `any`\>

___

### filters

• `Optional` **filters**: `Filters`<`Data`\>

___

### globalFilter

• `Optional` **globalFilter**: `any`

___

### initialState

• `Optional` **initialState**: `Partial`<[`DataTableState`](DataTableState.md)<`Data`\>\>

___

### inverseHeader

• `Optional` **inverseHeader**: `boolean`

___

### menuItems

• `Optional` **menuItems**: `MenuItemProps`[]

The menu items data structure

___

### options

• `Optional` **options**: `Partial`<[`DataTableOptions`](DataTableOptions.md)<`Data`\>\>

___

### override

• `Optional` **override**: `object`

Override props for `DataTableProvider` to either override current functionality
or provide new context to children.

___

### pageIndex

• `Optional` **pageIndex**: `number`

___

### pageSize

• `Optional` **pageSize**: `number`

___

### plugins

• `Optional` **plugins**: `PluginHook`<`Data`\>[]

___

### rowsPerPageOptions

• `Optional` **rowsPerPageOptions**: `number`[]

___

### selectedRowIds

• `Optional` **selectedRowIds**: `Record`<`IdType`<`Data`\>, `boolean`\>

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the whole table

___

### showFilters

• `Optional` **showFilters**: `boolean`

___

### showSearch

• `Optional` **showSearch**: `boolean`

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

## Methods

### onSelect

▸ `Optional` **onSelect**(`info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `TableEventInfo`<`Data`\> |

#### Returns

`void`

___

### onTableUpdate

▸ `Optional` **onTableUpdate**(`table`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | [`DataTableInstance`](DataTableInstance.md)<`Data`\> |

#### Returns

`void`
