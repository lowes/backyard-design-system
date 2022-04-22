# Interface: TextInputProps<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`TextInputRef`](../README.md#textinputref) |

## Hierarchy

- `BackyardBaseProps`<`T`, `TextInputOverrideProps`\>

  ↳ **`TextInputProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### component

• `Optional` **component**: `string` \| `ComponentClass`<`any`, `any`\> \| `FunctionComponent`<`any`\>

Component to render text input with

___

### customIcon

• `Optional` **customIcon**: `boolean`

Boolean prop to have custom icons show correct coloring

___

### defaultValue

• `Optional` **defaultValue**: `string`

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

### hiddenLabel

• `Optional` **hiddenLabel**: `boolean`

___

### interaction

• `Optional` **interaction**: `string` \| `boolean`

Initial interaction of component

___

### itemAfter

• `Optional` **itemAfter**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon displayed after text input

___

### itemBefore

• `Optional` **itemBefore**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon displayed before text input

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Visual shape of text input

#### Overrides

BackyardBaseProps.shape

___

### size

• `Optional` **size**: ``"small"`` \| ``"large"`` \| ``"medium"`` \| ``"jumbo"``

Size of component.

___

### state

• `Optional` **state**: ``"default"`` \| ``"error"`` \| ``"success"``

Visual state of component

___

### suffix

• `Optional` **suffix**: `string`

Adding a suffix abbreviation to the end of the field

___

### type

• `Optional` **type**: `string`

Type of text input

#### Overrides

BackyardBaseProps.type

___

### value

• `Optional` **value**: `any`

Value of text input

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

▸ `Optional` **onBlur**(`event`, `value`): `void`

`onBlur` trigger event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`Element`, `Element`\> |
| `value` | `any` |

#### Returns

`void`

___

### onChange

▸ `Optional` **onChange**(`event`, `value`): `void`

`onChange` trigger event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `value` | `any` |

#### Returns

`void`

___

### onClick

▸ `Optional` **onClick**(`event`, `value`): `void`

`onChange` trigger event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |
| `value` | `any` |

#### Returns

`void`

___

### onFocus

▸ `Optional` **onFocus**(`event`, `value`): `void`

`onFocus` trigger event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`Element`, `Element`\> |
| `value` | `any` |

#### Returns

`void`
