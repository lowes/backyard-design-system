# Interface: SelectProps

## Hierarchy

- `BackyardBaseProps`<[`SelectRef`](../README.md#selectref), `SelectOverrideProps`\>

  ↳ **`SelectProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### children

• `Optional` **children**: `ReactElement`<[`OptionGroupProps`](OptionGroupProps.md), `string` \| `JSXElementConstructor`<`any`\>\>[] \| `ReactElement`<[`OptionProps`](OptionProps.md), `string` \| `JSXElementConstructor`<`any`\>\>[]

List of options in declarative `Option` or `OptionGroup` elements

Is required if `options` is not defined,
Will be overridden by `options` if both defined.

#### Overrides

BackyardBaseProps.children

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

BackyardBaseProps.className

___

### defaultValue

• `Optional` **defaultValue**: `string` \| `number`

Default value of input

#### Overrides

BackyardBaseProps.defaultValue

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not input is disabled

#### Overrides

BackyardBaseProps.disabled

___

### iconClosed

• `Optional` **iconClosed**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon displayed when closed

___

### iconOpened

• `Optional` **iconOpened**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon displayed when opened

___

### interaction

• `Optional` **interaction**: `string` \| `boolean`

Initial interaction given to component

___

### itemBefore

• `Optional` **itemBefore**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

___

### label

• `Optional` **label**: `string` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Label of the `Select` component

___

### options

• `Optional` **options**: [`SelectOption`](SelectOption.md)[]

Data-driven list of options to provide to select

Is required if `children` not defined,
Will override `children` if both defined.

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Visual shape of text input

#### Overrides

BackyardBaseProps.shape

___

### size

• `Optional` **size**: ``"jumbo"`` \| ``"large"`` \| ``"medium"`` \| ``"small"``

Size of component

___

### stacked

• `Optional` **stacked**: `boolean`

___

### state

• `Optional` **state**: ``"default"`` \| ``"error"`` \| ``"success"``

Visual state of component

___

### type

• `Optional` **type**: `string`

Type of text input

#### Overrides

BackyardBaseProps.type

___

### value

• `Optional` **value**: `string` \| `number`

Controlled value of the select input

#### Overrides

BackyardBaseProps.value

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\>

Wrapper props object for text input.
Useful for setting the style of text input
visual container instead of input directly

## Methods

### onBlur

▸ `Optional` **onBlur**(`event`, `option`): `void`

`onBlur` trigger event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `FocusEvent`<`HTMLSelectElement`, `Element`\> | DOM Event |
| `option` | [`SelectOptionInfo`](../README.md#selectoptioninfo) | option info object |

#### Returns

`void`

___

### onChange

▸ `Optional` **onChange**(`event`, `option`): `void`

`onChange` trigger event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `ChangeEvent`<`HTMLSelectElement`\> | DOM Event |
| `option` | [`SelectOptionInfo`](../README.md#selectoptioninfo) | option info object |

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
| `option` | [`SelectOptionInfo`](../README.md#selectoptioninfo) | option info object |

#### Returns

`void`

___

### onFocus

▸ `Optional` **onFocus**(`event`, `option`): `void`

`onFocus` trigger event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `FocusEvent`<`HTMLSelectElement`, `Element`\> | DOM Event |
| `option` | [`SelectOptionInfo`](../README.md#selectoptioninfo) | option info object |

#### Returns

`void`

___

### onKeyDown

▸ `Optional` **onKeyDown**(`event`, `option`): `void`

`onKeyDown` trigger event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `KeyboardEvent`<`HTMLSelectElement`\> | DOM Event |
| `option` | [`SelectOptionInfo`](../README.md#selectoptioninfo) | option info object |

#### Returns

`void`
