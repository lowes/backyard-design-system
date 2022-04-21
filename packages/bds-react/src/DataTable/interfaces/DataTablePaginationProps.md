# Interface: DataTablePaginationProps

## Hierarchy

- `BackyardBaseProps`<`DataPaginationRef`, `DataTableOverrideProps`\>

  ↳ **`DataTablePaginationProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### paginationProps

• `Optional` **paginationProps**: `PaginationProps`

Props for the pagination component.

___

### rowsPerPageOptions

• `Optional` **rowsPerPageOptions**: `number`[]

An array of items per page options.

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

Footer sizes.

## Methods

### onChange

▸ `Optional` **onChange**(`event`, `page`): `void`

The onChange function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `page` | `number` |

#### Returns

`void`
