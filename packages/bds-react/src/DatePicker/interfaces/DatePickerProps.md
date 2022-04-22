# Interface: DatePickerProps

## Hierarchy

- `Omit`<`DatePickerNativeProps`, `DatePickerOverrideProps`\>

  ↳ **`DatePickerProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### calendarProps

• `Optional` **calendarProps**: `CalendarProps`

Calendar props to extend the calendar with if needed

___

### clearButtonProps

• `Optional` **clearButtonProps**: `IconButtonProps`

Props for clear button

#### Overrides

Omit.clearButtonProps

___

### closeKeys

• `Optional` **closeKeys**: `string`[]

Event keys that will trigger close when focused on

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

### date

• `Optional` **date**: `ParsableDate`

Parsable date for the current date
Can be updated externally and given as a default date

It can accept the following values
 JS Date instance => `new Date(2020, 06, 19)`
 String date => `'2020-07-19'`
 Number timestamp => `1595116800`

#### Overrides

Omit.date

___

### dates

• `Optional` **dates**: `ParsableDate`[] \| `ParsableDateObject`[]

List of parsable dates to only allow the user to select from

It can accept the following values
 JS Date instance => `new Date(2020, 06, 19)`
 String date => `'2020-07-19'`
 Number timestamp => `1595116800`
 ParsableDateObject => {
     label: 'Today, July 19, 2020',
     value: '2020-07-19' // Can be any `ParsableDate`
 }
 ParsableDateRange => {
     label: 'Today, July 19, 2020',
     start: '2020-07-19' // Can be any `ParsableDate`
     end: '2020-07-20' // Can be any `ParsableDate`
 }

#### Overrides

Omit.dates

___

### defaultValue

• `Optional` **defaultValue**: `string`

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

### disableDates

• `Optional` **disableDates**: `ParsableDate`[]

List of dates to disable

___

### disableFuture

• `Optional` **disableFuture**: `boolean`

Flag to disable all dates after today

___

### disableNative

• `Optional` **disableNative**: `boolean`

Whether or not native browser functionality is disabled

#### Inherited from

Omit.disableNative

___

### disablePast

• `Optional` **disablePast**: `boolean`

Flag to disable all dates before today

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

### maxDate

• `Optional` **maxDate**: `ParsableDate`

Parsable date to disable all dates after given date

#### Overrides

Omit.maxDate

___

### minDate

• `Optional` **minDate**: `ParsableDate`

Parsable date to disable all dates before given date

#### Overrides

Omit.minDate

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

### openKeys

• `Optional` **openKeys**: `string`[]

Event keys that will trigger open when focused on

___

### options

• `Optional` **options**: `ParsableDate`[] \| `ParsableDateObject`[] \| `ParsableDateRange`[]

#### Inherited from

Omit.options

___

### optionsLabel

• `Optional` **optionsLabel**: `string`

#### Inherited from

Omit.optionsLabel

___

### popoverProps

• `Optional` **popoverProps**: `Partial`<`PopoverProps`\>

Popover override props

___

### popperProps

• `Optional` **popperProps**: `Partial`<`PopoverProps`\>

Popover override props

Alias of `popoverProps`

___

### render

• `Optional` **render**: ``"custom"`` \| ``"native"``

Controls the rendered UI/UX of the component

Overrides automatically switching

___

### selectWrapperProps

• `Optional` **selectWrapperProps**: `object`

#### Inherited from

Omit.selectWrapperProps

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the input and popover

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

State of the native date picker
Either 'error' or 'default'

#### Overrides

Omit.state

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

### type

• `Optional` **type**: ``"date"`` \| ``"time"``

#### Inherited from

Omit.type

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

▸ `Optional` **onChange**(`event`, `value`): `void`

`onChange` trigger function for when either
the native component or the custom calendar change interaction occurs

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `value` | [`DatePickerChangeInfo`](DatePickerChangeInfo.md) |

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

### onClose

▸ `Optional` **onClose**(): `void`

`onClose` trigger function for when the calendar popover closes

#### Returns

`void`

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

___

### onKeyDown

▸ `Optional` **onKeyDown**(`event`): `void`

`onKeyDown` trigger event for
when the user presses a key on the `select`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`DatePickerNativeRef`\> |

#### Returns

`void`

#### Overrides

Omit.onKeyDown

___

### onOpen

▸ `Optional` **onOpen**(): `void`

`onOpen` trigger function for when the calendar popover opens

#### Returns

`void`
