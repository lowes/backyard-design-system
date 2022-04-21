# Interface: MultiselectProps

## Hierarchy

- `Omit`<`SelectProps` & `ToggleProps`, `MultiselectOverrideProps`\>

  ↳ **`MultiselectProps`**

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

DOM Class Name

#### Inherited from

Omit.className

___

### closeKeys

• `Optional` **closeKeys**: `string`[]

Event keys that will trigger a close when focused on

___

### defaultValue

• `Optional` **defaultValue**: `string`[]

Default value of the multiselect

___

### delayClose

• `Optional` **delayClose**: `number`

Amount in milliseconds to delay closing the popover

___

### delayOpen

• `Optional` **delayOpen**: `number`

Amount in milliseconds to delay opening the popover

___

### disableCloseOnSelect

• `Optional` **disableCloseOnSelect**: `boolean`

Whether or not popover will automatically close when
user selected a value from the list

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

### iconClosed

• `Optional` **iconClosed**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon displayed when closed

#### Inherited from

Omit.iconClosed

___

### iconOpened

• `Optional` **iconOpened**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon displayed when opened

#### Inherited from

Omit.iconOpened

___

### id

• `Optional` **id**: `string`

`id` of the select input

#### Overrides

Omit.id

___

### interaction

• `Optional` **interaction**: `string` \| `boolean`

Initial interaction given to component

#### Inherited from

Omit.interaction

___

### itemBefore

• `Optional` **itemBefore**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Inherited from

Omit.itemBefore

___

### label

• `Optional` **label**: `string`

Label of the multiselect

#### Overrides

Omit.label

___

### listSelectorProps

• `Optional` **listSelectorProps**: `ListSelectorMultipleProps`

List Selector props to override list selector with

___

### maxHeight

• `Optional` **maxHeight**: `string`

Set maximum popover height in `rem`

Defaults to showing five and a half options

___

### noSelectAll

• `Optional` **noSelectAll**: `boolean`

Whether or not to display the select all toggle

Enabled by default

___

### open

• `Optional` **open**: `boolean`

Whether or not the multiselect popover is open

#### Overrides

Omit.open

___

### openKeys

• `Optional` **openKeys**: `string`[]

Event keys that will trigger open when focused on

___

### options

• `Optional` **options**: `MultiselectOption`[]

Options to define dropdown children from

Required if `children` not defined.
Overrides `children` if defined.

#### Overrides

Omit.options

___

### popoverContent

• `Optional` **popoverContent**: [`MultiselectPopoverContent`](../README.md#multiselectpopovercontent)

Content above and/or below the `ListSelector` in the Popover

___

### popoverProps

• `Optional` **popoverProps**: `Partial`<`PopoverProps`\>

Popper props to override popover with

___

### popperProps

• `Optional` **popperProps**: `Partial`<`PopoverProps`\>

Popper props to override popover with

Alias of `popoverProps`

___

### selectedButtonProps

• `Optional` **selectedButtonProps**: `ToggleButtonProps`

Props to define a selected toggle button

#### Inherited from

Omit.selectedButtonProps

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the input and popover

#### Overrides

Omit.shape

___

### size

• `Optional` **size**: ``"jumbo"`` \| ``"large"`` \| ``"medium"`` \| ``"small"``

Size of component

___

### stacked

• `Optional` **stacked**: `boolean`

#### Inherited from

Omit.stacked

___

### state

• `Optional` **state**: ``"default"`` \| ``"error"`` \| ``"success"``

State of the native date picker
Either 'error' or 'default'

#### Overrides

Omit.state

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

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\>

Wrapper props object for text input.
Useful for setting the style of text input
visual container instead of input directly

#### Inherited from

Omit.wrapperProps

## Methods

### onBlur

▸ `Optional` **onBlur**(`event`): `void`

`onBlur` trigger event for when the
user blurs focus on the `select`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`HTMLSelectElement`, `Element`\> |

#### Returns

`void`

___

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

___

### onClose

▸ `Optional` **onClose**(): `void`

`onClose` trigger function for when the calendar popover closes

#### Returns

`void`

___

### onKeyDown

▸ `Optional` **onKeyDown**(`event`): `void`

`onKeyDown` trigger event for
when the user presses a key on the `select`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`HTMLSelectElement`\> |

#### Returns

`void`

___

### onMouseDown

▸ `Optional` **onMouseDown**(): `void`

`onMouseDown` trigger function

#### Returns

`void`

#### Overrides

Omit.onMouseDown

___

### onOpen

▸ `Optional` **onOpen**(): `void`

`onOpen` trigger function for when the calendar popover opens

#### Returns

`void`
