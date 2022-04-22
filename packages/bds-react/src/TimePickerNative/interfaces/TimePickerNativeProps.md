# Interface: TimePickerNativeProps

## Hierarchy

- `Omit`<`SelectAndTextPickerProps`, `TimePickerNativeOverrideProps`\>

  ↳ **`TimePickerNativeProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### clearButtonProps

• `Optional` **clearButtonProps**: `IconButtonProps`

#### Inherited from

Omit.clearButtonProps

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

#### Inherited from

Omit.defaultValue

___

### disableNative

• `Optional` **disableNative**: `boolean`

Whether or not native browser functionality is disabled

#### Inherited from

Omit.disableNative

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not input is disabled

#### Inherited from

Omit.disabled

___

### format

• `Optional` **format**: `string`

#### Inherited from

Omit.format

___

### hiddenLabel

• `Optional` **hiddenLabel**: `boolean`

#### Inherited from

Omit.hiddenLabel

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

#### Inherited from

Omit.mask

___

### maskPlaceholder

• `Optional` **maskPlaceholder**: `string`

#### Inherited from

Omit.maskPlaceholder

___

### maxTime

• `Optional` **maxTime**: `string`

Maximum time allowed in time picker
Must be 24h format string ('HH:mm')

___

### minTime

• `Optional` **minTime**: `string`

Minimum time allowed in time picker
Must be 24h format string ('HH:mm')

___

### onBlur

• `Optional` **onBlur**: (`event`: `FocusEvent`<`Element`, `Element`\>, `value`: `any`) => `void` & (`event`: `FocusEvent`<`HTMLSelectElement`, `Element`\>, `option`: `SelectOptionInfo`) => `void`

`onBlur` trigger event

#### Inherited from

Omit.onBlur

___

### onClick

• `Optional` **onClick**: (`event`: `MouseEvent`<`Element`, `MouseEvent`\>, `value`: `any`) => `void` & (`event`: `MouseEvent`<`HTMLSelectElement`, `MouseEvent`\>, `option`: `SelectOptionInfo`) => `void`

`onChange` trigger event

#### Inherited from

Omit.onClick

___

### onFocus

• `Optional` **onFocus**: (`event`: `FocusEvent`<`Element`, `Element`\>, `value`: `any`) => `void` & (`event`: `FocusEvent`<`HTMLSelectElement`, `Element`\>, `option`: `SelectOptionInfo`) => `void`

`onFocus` trigger event

#### Inherited from

Omit.onFocus

___

### options

• `Optional` **options**: `ParsableDate`[] \| `ParsableDateObject`[] \| `ParsableDateRange`[]

#### Inherited from

Omit.options

___

### optionsLabel

• `Optional` **optionsLabel**: `string`

Options label from `SelectPicker`

#### Overrides

Omit.optionsLabel

___

### selectWrapperProps

• `Optional` **selectWrapperProps**: `object`

#### Inherited from

Omit.selectWrapperProps

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the component

#### Overrides

Omit.shape

___

### size

• `Optional` **size**: ``"small"`` \| ``"large"`` \| ``"medium"`` \| ``"jumbo"``

Size of component.

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

### step

• `Optional` **step**: `number`

Step allowed by the native input

#### Overrides

Omit.step

___

### suffix

• `Optional` **suffix**: `string`

Adding a suffix abbreviation to the end of the field

#### Inherited from

Omit.suffix

___

### textWrapperProps

• `Optional` **textWrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\> & `object`

#### Inherited from

Omit.textWrapperProps

___

### time

• `Optional` **time**: `ParsableDate`

Current parsable time
Can be used as a default and changed externally

___

### times

• `Optional` **times**: `ParsableDate`[] \| `ParsableDateObject`[] \| `ParsableDateRange`[]

List of parsable times
Can be in the format of a timestamp, a Date instance, a 24h string, or a `TimeItem` for list selection

___

### type

• `Optional` **type**: ``"date"`` \| ``"time"``

#### Inherited from

Omit.type

___

### value

• `Optional` **value**: `string`

#### Inherited from

Omit.value

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\>

#### Inherited from

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

#### Inherited from

Omit.beforeMaskedStateChange

___

### onChange

▸ `Optional` **onChange**(`event`, `info`): `void`

`onChange` trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `info` | [`TimePickerNativeChangeInfo`](../README.md#timepickernativechangeinfo) |

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

#### Overrides

Omit.onClear

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

#### Inherited from

Omit.onDateChange
