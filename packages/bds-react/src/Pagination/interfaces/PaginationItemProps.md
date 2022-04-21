# Interface: PaginationItemProps

## Hierarchy

- `Omit`<`IconButtonProps`, `PaginationItemOverrideProps`\>

  ↳ **`PaginationItemProps`**

## Properties

### ariaTitle

• `Optional` **ariaTitle**: `string`

See `ButtonProps`

#### Inherited from

Omit.ariaTitle

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### children

• `Optional` **children**: `ReactNode`

React Children

#### Inherited from

Omit.children

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

Omit.className

___

### color

• `Optional` **color**: ``"interactive"``

The active color

#### Overrides

Omit.color

___

### component

• `Optional` **component**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

The component used for the root node.
Either a string to use a HTML element or a component.

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not the item will be disabled

#### Overrides

Omit.disabled

___

### elevation

• `Optional` **elevation**: `boolean`

Adds elevation to the button

#### Inherited from

Omit.elevation

___

### fullWidth

• `Optional` **fullWidth**: `boolean`

Makes button 100% the width of the container

#### Inherited from

Omit.fullWidth

___

### iconAfter

• `Optional` **iconAfter**: `ReactNode`

Icon Node to display on right-side of button text

Note: Do not use for an icon-only button, use `IconButton` for that

#### Inherited from

Omit.iconAfter

___

### iconBefore

• `Optional` **iconBefore**: `ReactNode`

Icon Node to display on left-side of button text

Note: Do not use for an icon-only button, use `IconButton` for that

#### Inherited from

Omit.iconBefore

___

### page

• `Optional` **page**: `number`

The current page number

___

### selected

• `Optional` **selected**: `boolean`

Whether the pagination item is selected

#### Overrides

Omit.selected

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"`` \| ``"circle"``

Shape of the pagination item

___

### size

• `Optional` **size**: ``"medium"`` \| ``"small"``

The size of the pagination item

#### Overrides

Omit.size

___

### type

• `Optional` **type**: ``"page"`` \| ``"dot"`` \| ``"first"`` \| ``"last"`` \| ``"next"`` \| ``"previous"`` \| ``"start-ellipsis"`` \| ``"end-ellipsis"``

The type of pagination item

___

### variant

• `Optional` **variant**: ``"ghost"`` \| ``"primary"``

The pagination item variant

#### Overrides

Omit.variant

## Methods

### onClick

▸ `Optional` **onClick**(`event`): `void`

`onClick` trigger function

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Inherited from

Omit.onClick

___

### onFocus

▸ `Optional` **onFocus**(`event`): `void`

`onFocus` trigger function

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`Element`, `Element`\> |

#### Returns

`void`

#### Inherited from

Omit.onFocus

___

### onKeyDown

▸ `Optional` **onKeyDown**(`event`): `void`

`onKeyDown` trigger function

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`Element`\> |

#### Returns

`void`

#### Inherited from

Omit.onKeyDown
