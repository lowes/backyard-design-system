# Interface: DataTableContextValues<Data\>

Context values that can be passed to children via

`const context = React.useContext(DataTableContext)`

## Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` |

## Hierarchy

- [`DataTableInstance`](DataTableInstance.md)<`Data`\>

  ↳ **`DataTableContextValues`**

## Properties

### disableFooter

• **disableFooter**: `boolean`

___

### disableFuzzyHighlight

• **disableFuzzyHighlight**: `boolean`

___

### disableScrollbar

• **disableScrollbar**: `boolean`

___

### enableFilters

• **enableFilters**: `boolean`

Enables the filter toggle switch

___

### enableRowExpansion

• **enableRowExpansion**: `boolean`

___

### enableRowSelection

• **enableRowSelection**: `boolean`

___

### enableSearch

• **enableSearch**: `boolean`

Enables the search toggle switch

___

### enableSortBy

• **enableSortBy**: `boolean`

___

### enableZebraStripes

• **enableZebraStripes**: `boolean`

___

### expanded

• **expanded**: `Record`<`IdType`<`Data`\>, `boolean`\>

___

### inverseHeader

• **inverseHeader**: `boolean`

___

### menuItems

• **menuItems**: `MenuItemProps`[]

The menu items data structure

___

### onSelect

• `Optional` **onSelect**: (`info`: `TableEventInfo`<`Data`\>) => `void`

#### Type declaration

▸ (`info`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `TableEventInfo`<`Data`\> |

##### Returns

`void`

___

### options

• **options**: `Partial`<[`DataTableOptions`](DataTableOptions.md)<`Data`\>\>

`react-table` options

___

### pageIndex

• **pageIndex**: `number`

___

### pageSize

• **pageSize**: `number`

___

### rowsPerPageOptions

• **rowsPerPageOptions**: `number`[]

___

### selectedRowIds

• **selectedRowIds**: `Record`<`IdType`<`Data`\>, `boolean`\>

___

### shape

• **shape**: ``"rounded"`` \| ``"squared"``

___

### showFilters

• **showFilters**: `boolean`

Show the filters for the table.

___

### showSearch

• **showSearch**: `boolean`

Show the search for the table.

___

### showToolbar

• **showToolbar**: `boolean`

Enables the toolbar to be visible

___

### size

• **size**: ``"small"`` \| ``"medium"`` \| ``"large"`` \| ``"custom"``

___

### toolbar

• **toolbar**: `any`

## Methods

### getColumnWidths

▸ `Optional` **getColumnWidths**(`column`): `ColumnWidths`<`Data`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `column` | `Column`<`Data`\> |

#### Returns

`ColumnWidths`<`Data`\>

___

### setShowFilters

▸ **setShowFilters**(`boolean`): `void`

Sets the value for the showFilters property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `boolean` | `any` |

#### Returns

`void`

___

### setShowSearch

▸ **setShowSearch**(`boolean`): `void`

Sets the value for the showSearch property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `boolean` | `any` |

#### Returns

`void`
