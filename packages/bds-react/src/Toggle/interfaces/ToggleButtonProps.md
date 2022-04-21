# Interface: ToggleButtonProps

## Hierarchy

- `Omit`<`ButtonProps`, `ToggleButtonOverrideProps`\>

  ↳ **`ToggleButtonProps`**

## Properties

### ariaLabel

• `Optional` **ariaLabel**: `string`

Aria label to give to toggle button
Defaults to 'toggle button'

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

#### Inherited from

Omit.className

___

### component

• `Optional` **component**: `ElementType`<`any`\>

Component to render as

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not button is disabled

#### Inherited from

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

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"`` \| ``"circle"`` \| ``"custom"``

Shape of button
- Rounded -> Medium Border Radius
- Squared -> (Default) Zero Border Radius
- Circle -> Maximum Border Radius (FAB Button)

#### Inherited from

Omit.shape

___

### size

• `Optional` **size**: ``"small"``

___

### state

• `Optional` **state**: ``"selected"`` \| ``"unselected"``

Color of toggle button

___

### type

• `Optional` **type**: ``"button"`` \| ``"submit"`` \| ``"reset"``

#### Inherited from

Omit.type

___

### value

• `Optional` **value**: [`ToggleValue`](../README.md#togglevalue)

Value of the toggle button

___

### variant

• `Optional` **variant**: ``"secondary"`` \| ``"ghost"`` \| ``"primary"`` \| ``"tertiary"`` \| ``"inverse"``

Variant of button
- Primary -> (Default) Solid Button w/ Background w/o Borders
- Secondary -> Outlined Button w/o Background w/ Borders
- Ghost -> No Background, No Borders

#### Inherited from

Omit.variant

## Methods

### onClick

▸ `Optional` **onClick**(`event`, `state`): `void`

onClick trigger function for when toggle button is clicked

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |
| `state` | [`ToggleValue`](../README.md#togglevalue) |

#### Returns

`void`

___

### onDeselect

▸ `Optional` **onDeselect**(`event`, `value`): `void`

onDeselect trigger function for when toggle button is deselected

Note: will trigger when a different button is selected when `exclusive`
 option is enabled, because button will be deselected in place of a new one

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |
| `value` | [`ToggleValue`](../README.md#togglevalue) |

#### Returns

`void`

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

___

### onSelect

▸ `Optional` **onSelect**(`event`, `value`): `void`

onSelect trigger function for when toggle button is selected

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |
| `value` | [`ToggleValue`](../README.md#togglevalue) |

#### Returns

`void`
