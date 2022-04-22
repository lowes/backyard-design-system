# Interface: PaginationProps

## Hierarchy

- `Omit`<`PaginationCondensedProps` & `PaginationFullProps`, `PaginationOverrideProps`\>

  ↳ **`PaginationProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### boundaryCount

• `Optional` **boundaryCount**: `number`

Number of pages at the beginning and end

#### Overrides

Omit.boundaryCount

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

Omit.className

___

### count

• **count**: `number`

Number of pages

#### Overrides

Omit.count

___

### defaultPage

• `Optional` **defaultPage**: `number`

The page selected by default when the component is uncontrolled

#### Overrides

Omit.defaultPage

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not all pagination items are disabled

#### Overrides

Omit.disabled

___

### hideNextButton

• `Optional` **hideNextButton**: `boolean`

Whether or not to hide the next button

#### Overrides

Omit.hideNextButton

___

### hidePrevButton

• `Optional` **hidePrevButton**: `boolean`

Whether or not to hide the previous button.

#### Overrides

Omit.hidePrevButton

___

### max

• `Optional` **max**: `number`

#### Inherited from

Omit.max

___

### min

• `Optional` **min**: `number`

#### Inherited from

Omit.min

___

### page

• `Optional` **page**: `number`

The current page (controlled)

#### Overrides

Omit.page

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"`` \| ``"circle"``

Shape of the component

#### Overrides

Omit.shape

___

### showFirstButton

• `Optional` **showFirstButton**: `boolean`

Whether or not to hide the first button

#### Overrides

Omit.showFirstButton

___

### showLastButton

• `Optional` **showLastButton**: `boolean`

Whether or not to hide the last button

#### Overrides

Omit.showLastButton

___

### siblingCount

• `Optional` **siblingCount**: `number`

Number of pages before and after the current page

#### Overrides

Omit.siblingCount

___

### size

• `Optional` **size**: ``"medium"`` \| ``"small"``

The size of the pagination items
Note: Only used with the `dotted` variant

#### Overrides

Omit.size

___

### step

• `Optional` **step**: `number`

#### Inherited from

Omit.step

___

### variant

• `Optional` **variant**: ``"condensed"`` \| ``"numbered"`` \| ``"dotted"``

The variant to use

## Methods

### getItemAriaLabel

▸ `Optional` **getItemAriaLabel**(`type`, `page`, `selected`): `string`

Function that maps to a string for generating aria labels

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"page"`` \| ``"dot"`` \| ``"first"`` \| ``"last"`` \| ``"next"`` \| ``"previous"`` \| ``"start-ellipsis"`` \| ``"end-ellipsis"`` | The link or button type to format ('page' \| 'first' \| 'last' \| 'next' \| 'previous') |
| `page` | `number` | The page number to format |
| `selected` | `boolean` | If true, the current page is selected |

#### Returns

`string`

#### Overrides

Omit.getItemAriaLabel

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

#### Overrides

Omit.onChange

___

### renderItem

▸ `Optional` **renderItem**(`props`, `index`): `ComponentClass`<{}, `any`\>

Renders pagination item
Useful if something other than buttons are needed

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<[`PaginationItemProps`](PaginationItemProps.md)\> |
| `index` | `number` |

#### Returns

`ComponentClass`<{}, `any`\>

#### Overrides

Omit.renderItem
