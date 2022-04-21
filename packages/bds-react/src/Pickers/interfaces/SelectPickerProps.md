# Interface: SelectPickerProps

## Hierarchy

- `Omit`<`SelectProps`, `SelectPickerOverrideProps`\>

  ↳ **`SelectPickerProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### children

• `Optional` **children**: `ReactElement`<`OptionProps`, `string` \| `JSXElementConstructor`<`any`\>\>[] \| `ReactElement`<`OptionGroupProps`, `string` \| `JSXElementConstructor`<`any`\>\>[]

List of options in declarative `Option` or `OptionGroup` elements

Is required if `options` is not defined,
Will be overridden by `options` if both defined.

#### Inherited from

Omit.children

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Inherited from

Omit.className

___

### clearButtonProps

• `Optional` **clearButtonProps**: `IconButtonProps`

___

### defaultValue

• `Optional` **defaultValue**: `string`

___

### disableNative

• `Optional` **disableNative**: `boolean`

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not input is disabled

#### Inherited from

Omit.disabled

___

### format

• `Optional` **format**: `string`

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

Label of the `Select` component

#### Inherited from

Omit.label

___

### options

• `Optional` **options**: `ParsableDate`[] \| `ParsableDateObject`[] \| `ParsableDateRange`[]

___

### optionsLabel

• `Optional` **optionsLabel**: `string`

___

### readOnly

• `Optional` **readOnly**: `boolean`

#### Overrides

Omit.readOnly

___

### selectWrapperProps

• `Optional` **selectWrapperProps**: `object`

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

#### Overrides

Omit.shape

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"`` \| ``"jumbo"``

Size of component

#### Inherited from

Omit.size

___

### stacked

• `Optional` **stacked**: `boolean`

#### Inherited from

Omit.stacked

___

### state

• `Optional` **state**: ``"default"`` \| ``"error"`` \| ``"success"``

Visual state of component

#### Inherited from

Omit.state

___

### textWrapperProps

• `Optional` **textWrapperProps**: `object`

___

### type

• `Optional` **type**: ``"date"`` \| ``"time"``

#### Overrides

Omit.type

___

### value

• `Optional` **value**: `string`

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\>

#### Overrides

Omit.wrapperProps

## Methods

### onBlur

▸ `Optional` **onBlur**(`event`, `option`): `void`

`onBlur` trigger event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `FocusEvent`<`HTMLSelectElement`, `Element`\> | DOM Event |
| `option` | `SelectOptionInfo` | option info object |

#### Returns

`void`

#### Inherited from

Omit.onBlur

___

### onChange

▸ `Optional` **onChange**(`event`, `option`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `option` | [`SelectPickerOptionInfo`](SelectPickerOptionInfo.md) |

#### Returns

`void`

___

### onClear

▸ `Optional` **onClear**(`event`): `void`

`onClear` trigger function for when
the clear button is clicked

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

___

### onClick

▸ `Optional` **onClick**(`event`, `option`): `void`

`onClick` trigger event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `MouseEvent`<`HTMLSelectElement`, `MouseEvent`\> | DOM Event |
| `option` | `SelectOptionInfo` | option info object |

#### Returns

`void`

#### Inherited from

Omit.onClick

___

### onFocus

▸ `Optional` **onFocus**(`event`, `option`): `void`

`onFocus` trigger event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `FocusEvent`<`HTMLSelectElement`, `Element`\> | DOM Event |
| `option` | `SelectOptionInfo` | option info object |

#### Returns

`void`

#### Inherited from

Omit.onFocus

___

### onKeyDown

▸ `Optional` **onKeyDown**(`event`, `option`): `void`

`onKeyDown` trigger event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `KeyboardEvent`<`HTMLSelectElement`\> | DOM Event |
| `option` | `SelectOptionInfo` | option info object |

#### Returns

`void`

#### Inherited from

Omit.onKeyDown
