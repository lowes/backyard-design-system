# Interface: ToggleProps

## Hierarchy

- `Omit`<`ButtonGroupProps`, `ToggleOverrideProps`\>

  ↳ **`ToggleProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### buttonProps

• `Optional` **buttonProps**: [`ToggleButtonProps`](ToggleButtonProps.md)

Props to define a unselected toggle button

___

### children

• `Optional` **children**: `ReactNode`

The buttons passed to the button group

#### Inherited from

Omit.children

___

### className

• `Optional` **className**: `string`

Adds a classname to the button group.

#### Inherited from

Omit.className

___

### color

• `Optional` **color**: ``"interactive"`` \| ``"neutral"``

Color of the grouped buttons

#### Inherited from

Omit.color

___

### defaultValue

• `Optional` **defaultValue**: `string` \| `string`[]

Default value of the `Toggle`

Can be a single `string` or an array of `string`s

#### Overrides

Omit.defaultValue

___

### enforceSelected

• `Optional` **enforceSelected**: `boolean`

Whether or not toggle should enforce at least one toggle
to be selected at all times

When enabled, defaults `Toggle` value to value of first `ToggleButton` child
if `defaultValue` prop is not given

___

### exclusive

• `Optional` **exclusive**: `boolean`

Whether or not toggle buttons are exclusively toggled

When enabled, `Toggle` values are a single `string`
When disabled, `Toggle` values are an array of `string`s

___

### selectedButtonProps

• `Optional` **selectedButtonProps**: [`ToggleButtonProps`](ToggleButtonProps.md)

Props to define a selected toggle button

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the edges of the button group

#### Overrides

Omit.shape

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"``

#### Inherited from

Omit.size

___

### value

• `Optional` **value**: `string` \| `string`[]

Controlled value of the `Toggle`

Can be a single `string` or an array of `string`s

#### Overrides

Omit.value

___

### variant

• `Optional` **variant**: ``"secondary"`` \| ``"ghost"``

Toggle variants

## Methods

### onChange

▸ `Optional` **onChange**(`event`, `state`): `void`

onChange trigger function for when toggled state changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |
| `state` | [`ToggleValue`](../README.md#togglevalue) |

#### Returns

`void`
