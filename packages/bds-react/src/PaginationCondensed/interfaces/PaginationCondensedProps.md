# Interface: PaginationCondensedProps

## Hierarchy

- `BackyardBaseProps`<[`PaginationCondensedRef`](../README.md#paginationcondensedref), `PaginationCondensedOverrideProps`\>

  ↳ **`PaginationCondensedProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### boundaryCount

• `Optional` **boundaryCount**: `number`

Number of pages at the beginning and end

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

BackyardBaseProps.className

___

### count

• `Optional` **count**: `number`

Number of pages

___

### defaultPage

• `Optional` **defaultPage**: `number`

The page selected by default when the component is uncontrolled

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not all pagination items are disabled

#### Overrides

BackyardBaseProps.disabled

___

### hideNextButton

• `Optional` **hideNextButton**: `boolean`

Whether or not to hide the next button

___

### hidePrevButton

• `Optional` **hidePrevButton**: `boolean`

Whether or not to hide the previous button.

___

### max

• `Optional` **max**: `number`

#### Overrides

BackyardBaseProps.max

___

### min

• `Optional` **min**: `number`

#### Overrides

BackyardBaseProps.min

___

### page

• `Optional` **page**: `number`

The current page (controlled)

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"`` \| ``"circle"``

Shape of the component

#### Overrides

BackyardBaseProps.shape

___

### showFirstButton

• `Optional` **showFirstButton**: `boolean`

Whether or not to hide the first button

___

### showLastButton

• `Optional` **showLastButton**: `boolean`

Whether or not to hide the last button

___

### siblingCount

• `Optional` **siblingCount**: `number`

Number of pages before and after the current page

___

### size

• `Optional` **size**: ``"medium"`` \| ``"small"``

The size of the pagination items
Note: Only used with the `dotted` variant

___

### step

• `Optional` **step**: `number`

#### Overrides

BackyardBaseProps.step

___

### variant

• `Optional` **variant**: ``"condensed"``

The variant to use

## Methods

### getItemAriaLabel

▸ `Optional` **getItemAriaLabel**(`type`, `page`, `selected`): `string`

Function that maps to a string for generating aria labels

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"dot"`` \| ``"page"`` \| ``"first"`` \| ``"last"`` \| ``"next"`` \| ``"previous"`` \| ``"start-ellipsis"`` \| ``"end-ellipsis"`` | The link or button type to format ('page' \| 'first' \| 'last' \| 'next' \| 'previous') |
| `page` | `number` | The page number to format |
| `selected` | `boolean` | If true, the current page is selected |

#### Returns

`string`

___

### onChange

▸ `Optional` **onChange**(`event`, `value`): `void`

`onChange` trigger function

**`argument`** {Event} event - DOM event

**`argument`** {number} value - page number

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `value` | `number` |

#### Returns

`void`

___

### renderItem

▸ `Optional` **renderItem**(`props`, `index`): `ComponentClass`<{}, `any`\>

Renders pagination item
Useful if something other than buttons are needed

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<`PaginationItemProps`\> |
| `index` | `number` |

#### Returns

`ComponentClass`<{}, `any`\>
