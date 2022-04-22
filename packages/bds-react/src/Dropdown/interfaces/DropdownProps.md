# Interface: DropdownProps

## Hierarchy

- `Omit`<`SelectProps` & `ListSelectorProps`, `DropdownOverrideProps`\>

  ↳ **`DropdownProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### children

• `Optional` **children**: `ReactElement`<`OptionProps`, `string` \| `JSXElementConstructor`<`any`\>\>[]

Children to define options from

Required is `options` not defined,
Is overridden by `options` if defined

___

### closeKeys

• `Optional` **closeKeys**: `string`[]

Event keys that will trigger close when focused on

___

### defaultValue

• `Optional` **defaultValue**: `string` & `number` & `string` & `ListSelectorValue`[] & `number` & `ListSelectorValue`[]

Default value of input

#### Inherited from

Omit.defaultValue

___

### delayClose

• `Optional` **delayClose**: `number`

Amount in milliseconds to delay closing the popover
when a value is selected from the list

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

### enableGlobalKeyDown

• `Optional` **enableGlobalKeyDown**: `boolean`

Enables the global key down listener to listen for arrow key interactions

#### Inherited from

Omit.enableGlobalKeyDown

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

• `Optional` **label**: `string` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

___

### listSelectorProps

• `Optional` **listSelectorProps**: `ListSelectorProps`

List Selector props to override list selector with

___

### maxHeight

• `Optional` **maxHeight**: `string`

Set maximum popover height

Defaults to showing five and a half options

___

### openKeys

• `Optional` **openKeys**: `string`[]

Event keys that will trigger open when focused on

___

### options

• `Optional` **options**: [`DropdownOption`](DropdownOption.md)[]

Options to define dropdown children from

Required if `children` not defined.
Overrides `children` if defined.

#### Overrides

Omit.options

___

### optionsLabel

• `Optional` **optionsLabel**: `string`

Label to place above options in select menu

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

### ref

• `Optional` **ref**: `any`

#### Overrides

Omit.ref

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Visual shape of text input

#### Inherited from

Omit.shape

___

### size

• `Optional` **size**: ``"medium"`` \| ``"small"`` \| ``"large"``

___

### stacked

• `Optional` **stacked**: `boolean`

#### Overrides

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

• `Optional` **value**: `string` \| `number`

Controlled value for dropdown

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
| `event` | `ChangeEvent`<`Element`\> |
| `value` | [`DropdownChangeInfo`](DropdownChangeInfo.md) |

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

### onOpen

▸ `Optional` **onOpen**(): `void`

`onOpen` trigger function for when the calendar popover opens

#### Returns

`void`

___

### renderItem

▸ `Optional` **renderItem**(`props`, `ref?`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

List item to render

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ListOptionProps` |
| `ref?` | `Ref`<`any`\> |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Inherited from

Omit.renderItem
