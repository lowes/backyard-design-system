# Interface: TextPickerProps

## Hierarchy

- `Omit`<`TextInputProps`, `TextPickerOverrideProps`\>

  ↳ **`TextPickerProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### clearButtonProps

• `Optional` **clearButtonProps**: `IconButtonProps`

___

### component

• `Optional` **component**: `string` \| `ComponentClass`<`any`, `any`\> \| `FunctionComponent`<`any`\>

Component to render text input with

#### Inherited from

Omit.component

___

### customIcon

• `Optional` **customIcon**: `boolean`

Boolean prop to have custom icons show correct coloring

#### Inherited from

Omit.customIcon

___

### defaultValue

• `Optional` **defaultValue**: `string`

#### Overrides

Omit.defaultValue

___

### disableNative

• `Optional` **disableNative**: `boolean`

Whether or not native browser functionality is disabled

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not input is disabled

#### Inherited from

Omit.disabled

___

### hiddenLabel

• `Optional` **hiddenLabel**: `boolean`

#### Inherited from

Omit.hiddenLabel

___

### interaction

• `Optional` **interaction**: `string` \| `boolean`

Initial interaction of component

#### Inherited from

Omit.interaction

___

### itemAfter

• `Optional` **itemAfter**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon displayed after text input

#### Inherited from

Omit.itemAfter

___

### itemBefore

• `Optional` **itemBefore**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon displayed before text input

#### Inherited from

Omit.itemBefore

___

### mask

• `Optional` **mask**: `string` \| (`string` \| `RegExp`)[]

___

### maskPlaceholder

• `Optional` **maskPlaceholder**: `string`

___

### max

• `Optional` **max**: `string`

___

### min

• `Optional` **min**: `string`

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

Size of component.

#### Inherited from

Omit.size

___

### state

• `Optional` **state**: ``"default"`` \| ``"error"`` \| ``"success"``

Visual state of component

#### Inherited from

Omit.state

___

### suffix

• `Optional` **suffix**: `string`

Adding a suffix abbreviation to the end of the field

#### Inherited from

Omit.suffix

___

### textWrapperProps

• `Optional` **textWrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\>

___

### type

• `Optional` **type**: ``"date"`` \| ``"time"`` \| ``"datetime-local"`` \| ``"week"`` \| ``"month"``

#### Overrides

Omit.type

___

### value

• `Optional` **value**: `string`

#### Overrides

Omit.value

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\>

#### Overrides

Omit.wrapperProps

## Methods

### beforeMaskedStateChange

▸ `Optional` **beforeMaskedStateChange**(`nextState?`): `InputState`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextState?` | `InputState` |

#### Returns

`InputState`

___

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

Omit.onBlur

___

### onChange

▸ `Optional` **onChange**(`event`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `value` | `string` |

#### Returns

`void`

#### Overrides

Omit.onChange

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

Omit.onClick

___

### onDateChange

▸ `Optional` **onDateChange**(`event`, `info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `info` | `TextPickerInfo` |

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

#### Inherited from

Omit.onFocus
