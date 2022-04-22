# Interface: TextAreaProps

## Hierarchy

- `TextInputProps`

  ↳ **`TextAreaProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

TextInputProps.as

___

### children

• `Optional` **children**: `ReactNode`

Children

#### Overrides

TextInputProps.children

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

TextInputProps.className

___

### component

• `Optional` **component**: `string` \| `ComponentClass`<`any`, `any`\> \| `FunctionComponent`<`any`\>

Component to render text input with

#### Inherited from

TextInputProps.component

___

### customIcon

• `Optional` **customIcon**: `boolean`

Boolean prop to have custom icons show correct coloring

#### Inherited from

TextInputProps.customIcon

___

### defaultValue

• `Optional` **defaultValue**: `string`

Default value of input

#### Overrides

TextInputProps.defaultValue

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not input is disabled

#### Overrides

TextInputProps.disabled

___

### helperText

• `Optional` **helperText**: `string`

Helper text to display

___

### hiddenLabel

• `Optional` **hiddenLabel**: `boolean`

#### Inherited from

TextInputProps.hiddenLabel

___

### interaction

• `Optional` **interaction**: `string` \| `boolean`

Initial interaction of component

#### Inherited from

TextInputProps.interaction

___

### itemAfter

• `Optional` **itemAfter**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon displayed after text input

#### Inherited from

TextInputProps.itemAfter

___

### itemBefore

• `Optional` **itemBefore**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon displayed before text input

#### Inherited from

TextInputProps.itemBefore

___

### label

• `Optional` **label**: `string`

#### Overrides

TextInputProps.label

___

### max

• `Optional` **max**: `number`

Maximum number of characters allowed
When defined, text area will show character count

#### Overrides

TextInputProps.max

___

### resizer

• `Optional` **resizer**: `boolean`

Whether or not resizer is present

___

### rows

• `Optional` **rows**: `number`

Default number of rows to show, changes default height

#### Overrides

TextInputProps.rows

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Visual shape of text input

#### Overrides

TextInputProps.shape

___

### size

• `Optional` **size**: ``"small"`` \| ``"large"`` \| ``"medium"`` \| ``"jumbo"``

Size of component.

#### Inherited from

TextInputProps.size

___

### state

• `Optional` **state**: ``"default"`` \| ``"error"`` \| ``"success"``

Visual state of component

#### Overrides

TextInputProps.state

___

### suffix

• `Optional` **suffix**: `string`

Adding a suffix abbreviation to the end of the field

#### Inherited from

TextInputProps.suffix

___

### type

• `Optional` **type**: `string`

Type of text input

#### Overrides

TextInputProps.type

___

### value

• `Optional` **value**: `any`

Value of text input

#### Inherited from

TextInputProps.value

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\> & { `rows?`: `number`  }

Wrapper props object for text input.
Useful for setting the style of text input
visual container instead of input directly

#### Overrides

TextInputProps.wrapperProps

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

#### Inherited from

TextInputProps.onBlur

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

#### Inherited from

TextInputProps.onChange

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

#### Inherited from

TextInputProps.onClick

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

#### Inherited from

TextInputProps.onFocus
