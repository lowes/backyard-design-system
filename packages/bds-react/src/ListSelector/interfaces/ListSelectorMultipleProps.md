# Interface: ListSelectorMultipleProps

## Hierarchy

- `Omit`<`ToggleProps`, `ListSelectorMultipleOverrideProps`\>

  ↳ **`ListSelectorMultipleProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### buttonProps

• `Optional` **buttonProps**: `ToggleButtonProps`

Props to define a unselected toggle button

#### Inherited from

Omit.buttonProps

___

### children

• `Optional` **children**: `ReactElement`<`OptionProps`, `string` \| `JSXElementConstructor`<`any`\>\>[]

Children to define options from

Required is `options` not defined,
Is overridden by `options` if defined

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

• `Optional` **defaultValue**: `string`[]

Default value of the multiselect

___

### enableGlobalKeyDown

• `Optional` **enableGlobalKeyDown**: `boolean`

Enables the global key down listener to listen for arrow key interactions

___

### enforceSelected

• `Optional` **enforceSelected**: `boolean`

Whether or not toggle should enforce at least one toggle
to be selected at all times

When enabled, defaults `Toggle` value to value of first `ToggleButton` child
if `defaultValue` prop is not given

#### Inherited from

Omit.enforceSelected

___

### exclusive

• `Optional` **exclusive**: `boolean`

Whether or not toggle buttons are exclusively toggled

When enabled, `Toggle` values are a single `string`
When disabled, `Toggle` values are an array of `string`s

#### Inherited from

Omit.exclusive

___

### options

• `Optional` **options**: [`ListSelectorOption`](ListSelectorOption.md)[]

Options to define dropdown children from

Required if `children` not defined.
Overrides `children` if defined.

___

### selectedButtonProps

• `Optional` **selectedButtonProps**: `ToggleButtonProps`

Props to define a selected toggle button

#### Inherited from

Omit.selectedButtonProps

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the edges of the button group

#### Inherited from

Omit.shape

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"``

#### Inherited from

Omit.size

___

### value

• `Optional` **value**: `string`[]

Controlled value for dropdown

___

### variant

• `Optional` **variant**: ``"secondary"`` \| ``"ghost"``

Toggle variants

#### Inherited from

Omit.variant

___

### width

• `Optional` **width**: `string`

Width override for ListWrapper
Can be given a token (such as `size_128`) or other value (like `15rem`)

## Methods

### onChange

▸ `Optional` **onChange**(`event`, `value`): `void`

`onChange` trigger function for when either
the native component or the custom calendar change interaction occurs

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |
| `value` | `string`[] |

#### Returns

`void`
