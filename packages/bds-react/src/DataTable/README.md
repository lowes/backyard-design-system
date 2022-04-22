# @lowes-tech/bds-react/DataTable

## Interfaces

- [DataTableBaseProps](interfaces/DataTableBaseProps.md)
- [DataTableBodyProps](interfaces/DataTableBodyProps.md)
- [DataTableCell](interfaces/DataTableCell.md)
- [DataTableColumnInstance](interfaces/DataTableColumnInstance.md)
- [DataTableColumnInterface](interfaces/DataTableColumnInterface.md)
- [DataTableColumnInterfaceExtended](interfaces/DataTableColumnInterfaceExtended.md)
- [DataTableContentProps](interfaces/DataTableContentProps.md)
- [DataTableContextValues](interfaces/DataTableContextValues.md)
- [DataTableFooterProps](interfaces/DataTableFooterProps.md)
- [DataTableHeaderProps](interfaces/DataTableHeaderProps.md)
- [DataTableHooks](interfaces/DataTableHooks.md)
- [DataTableInstance](interfaces/DataTableInstance.md)
- [DataTableOptions](interfaces/DataTableOptions.md)
- [DataTablePaginationProps](interfaces/DataTablePaginationProps.md)
- [DataTableProps](interfaces/DataTableProps.md)
- [DataTableProviderProps](interfaces/DataTableProviderProps.md)
- [DataTableRow](interfaces/DataTableRow.md)
- [DataTableState](interfaces/DataTableState.md)
- [DataTableToolbarProps](interfaces/DataTableToolbarProps.md)

## References

### default

Renames and re-exports [DataTable](README.md#datatable)

## Type aliases

### ColumnExtended

Ƭ **ColumnExtended**<`D`\>: `Omit`<`Column`<`D`\>, [`DataTableColumnInterfaceOverride`](README.md#datatablecolumninterfaceoverride)\> & [`DataTableColumnWidths`](README.md#datatablecolumnwidths)<`D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `object` = {} |

___

### DataTableBaseRef

Ƭ **DataTableBaseRef**: `HTMLDivElement`

___

### DataTableBodyCellProps

Ƭ **DataTableBodyCellProps**<`D`\>: `CellProps`<`D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `object` = {} |

___

### DataTableBodyRef

Ƭ **DataTableBodyRef**: `HTMLTableElement`

___

### DataTableCellProps

Ƭ **DataTableCellProps**<`D`\>: `CellProps`<`D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `object` = {} |

___

### DataTableColumn

Ƭ **DataTableColumn**<`D`\>: [`ColumnExtended`](README.md#columnextended)<`D`\> & [`DataTableColumnInterface`](interfaces/DataTableColumnInterface.md)<`D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `object` = {} |

___

### DataTableColumnGroup

Ƭ **DataTableColumnGroup**<`D`\>: `ColumnGroup`<`D`\> & [`DataTableColumnInterface`](interfaces/DataTableColumnInterface.md)<`D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `object` = {} |

___

### DataTableColumnInterfaceOverride

Ƭ **DataTableColumnInterfaceOverride**: ``"minWidth"`` \| ``"maxWidth"``

___

### DataTableColumnWidths

Ƭ **DataTableColumnWidths**<`D`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `object` = {} |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Wrapper?` | `any` |
| `maxWidth?` | `string` \| `number` |
| `minWidth?` | `string` \| `number` |
| `totalWidth?` | `UseTableColumnProps`<`D`\>[``"totalWidth"``] |
| `width?` | `string` \| `number` |

___

### DataTableContentRef

Ƭ **DataTableContentRef**: `HTMLTableElement`

___

### DataTableFooterRef

Ƭ **DataTableFooterRef**: `HTMLTableElement`

___

### DataTableHeaderCellProps

Ƭ **DataTableHeaderCellProps**<`D`\>: `HeaderProps`<`D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `object` = {} |

___

### DataTableHeaderRef

Ƭ **DataTableHeaderRef**: `HTMLTableElement`

___

### DataTableRef

Ƭ **DataTableRef**: [`DataTableBaseRef`](README.md#datatablebaseref)

___

### DataTableToolbarRef

Ƭ **DataTableToolbarRef**: `HTMLDivElement`

## Variables

### DataTableConsumer

• **DataTableConsumer**: `React.Consumer`<[`DataTableContextValues`](interfaces/DataTableContextValues.md)<`any`\>\> = `DataTableContext.Consumer`

DataTable Consumer

___

### DataTableContext

• **DataTableContext**: `React.Context`<[`DataTableContextValues`](interfaces/DataTableContextValues.md)<`any`\>\>

DataTable Context

## Functions

### DataTable

▸ `Const` **DataTable**<`Data`\>(`__namedParameters`): `Element`

Backyard React Data Table

Examples:

- [DataTable](https://backyard.lowes.com/Components/DataTable)

API:

- [DataTable API](https://backyard.lowes.com/ComponentsAPI/DataTable)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`DataTableProps`](interfaces/DataTableProps.md)<`Data`\> |

#### Returns

`Element`

___

### DataTablePagination

▸ `Const` **DataTablePagination**<`Data`\>(`__namedParameters`): `ReactElement`<[`DataTablePaginationProps`](interfaces/DataTablePaginationProps.md), `string` \| `JSXElementConstructor`<`any`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`DataTablePaginationProps`](interfaces/DataTablePaginationProps.md) |

#### Returns

`ReactElement`<[`DataTablePaginationProps`](interfaces/DataTablePaginationProps.md), `string` \| `JSXElementConstructor`<`any`\>\>

___

### DataTableProvider

▸ `Const` **DataTableProvider**<`Data`\>(`__namedParameters`): `ReactElement`<[`DataTableProviderProps`](interfaces/DataTableProviderProps.md)<`Data`\>, `string` \| `JSXElementConstructor`<`any`\>\>

Backyard React Data Table Provider

Provides values to children and handles state management of the `DataTable`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`DataTableProviderProps`](interfaces/DataTableProviderProps.md)<`Data`\> |

#### Returns

`ReactElement`<[`DataTableProviderProps`](interfaces/DataTableProviderProps.md)<`Data`\>, `string` \| `JSXElementConstructor`<`any`\>\>

___

### HighlightText

▸ `Const` **HighlightText**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.highlight` | `string` |
| `__namedParameters.text` | `String` |

#### Returns

`Element`

___

### SelectFilter

▸ `Const` **SelectFilter**<`Data`\>(`optionValues`): (`__namedParameters`: `FilterProps`<`Data`\>) => `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionValues` | `string`[] |

#### Returns

`fn`

▸ (`__namedParameters`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `FilterProps`<`Data`\> |

##### Returns

`Element`

___

### TextFilter

▸ **TextFilter**<`Data`\>(`__namedParameters`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `FilterProps`<`Data`\> |

#### Returns

`Element`

___

### addHighlightCell

▸ `Const` **addHighlightCell**<`Data`\>(`hooks`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hooks` | `Hooks`<`Data`\> |

#### Returns

`void`

___

### useDataTable

▸ `Const` **useDataTable**<`Data`\>(): [`DataTableContextValues`](interfaces/DataTableContextValues.md)<`Data`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` = {} |

#### Returns

[`DataTableContextValues`](interfaces/DataTableContextValues.md)<`Data`\>

___

### useExpandColumn

▸ `Const` **useExpandColumn**(`theme`, `enableRowExpansion`): <Data\>(`hooks`: `Hooks`<`Data`\>) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `BackyardTheme` |
| `enableRowExpansion` | `boolean` |

#### Returns

`fn`

▸ <`Data`\>(`hooks`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` = {} |

##### Parameters

| Name | Type |
| :------ | :------ |
| `hooks` | `Hooks`<`Data`\> |

##### Returns

`void`

___

### useHighlightCell

▸ `Const` **useHighlightCell**(`disableFuzzyHighlight`): <Data\>(`hooks`: `Hooks`<`Data`\>) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disableFuzzyHighlight` | `boolean` |

#### Returns

`fn`

▸ <`Data`\>(`hooks`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` = {} |

##### Parameters

| Name | Type |
| :------ | :------ |
| `hooks` | `Hooks`<`Data`\> |

##### Returns

`void`

___

### useSelectColumn

▸ `Const` **useSelectColumn**<`Data`\>(`theme`, `enableRowSelection`): (`hooks`: `Hooks`<`Data`\>) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `BackyardTheme` |
| `enableRowSelection` | `boolean` |

#### Returns

`fn`

▸ (`hooks`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `hooks` | `Hooks`<`Data`\> |

##### Returns

`void`
