# Interface: StepperProps

## Hierarchy

- `Omit`<`TextInputProps`, `StepperOverrideProps`\>

  ↳ **`StepperProps`**

## Properties

### ariaLabel

• `Optional` **ariaLabel**: `string`

Aria Label for `input` of `Stepper` to read out

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### className

• `Optional` **className**: `string`

DOM Class Name of `input` in `Stepper`

#### Overrides

Omit.className

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

### decrementNumLabel

• `Optional` **decrementNumLabel**: `string`

Description for Aria to read on decrement `IconButton`

___

### decrementProps

• `Optional` **decrementProps**: `IconButtonProps`

Props to override decrement button with

___

### defaultValue

• `Optional` **defaultValue**: `number`

Default value of an uncontrolled `Stepper`

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not `Stepper` is disabled

#### Overrides

Omit.disabled

___

### hiddenLabel

• `Optional` **hiddenLabel**: `boolean`

#### Inherited from

Omit.hiddenLabel

___

### hideButtons

• `Optional` **hideButtons**: `boolean`

Whether or not buttons are included with the stepper input

___

### iconDescription

• `Optional` **iconDescription**: `string`

Description for Aria to read on both `IconButton`s

___

### id

• `Optional` **id**: `string`

DOM ID of `input` in `Stepper`

#### Overrides

Omit.id

___

### incrementNumLabel

• `Optional` **incrementNumLabel**: `string`

Description for Aria to read on increment `IconButton`

___

### incrementProps

• `Optional` **incrementProps**: `IconButtonProps`

Props to override increment button with

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

### label

• `Optional` **label**: `string`

Label for the `Stepper`

#### Overrides

Omit.label

___

### max

• `Optional` **max**: `number`

Max value to clamp and allow

#### Overrides

Omit.max

___

### min

• `Optional` **min**: `number`

Min value to clamp and allow

#### Overrides

Omit.min

___

### roundToStep

• `Optional` **roundToStep**: `boolean`

Whether or not when user types number to clamp to the nearest possible step, based on minimum value

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of `input` and `IconButton`s

#### Overrides

Omit.shape

___

### size

• `Optional` **size**: ``"jumbo"`` \| ``"large"`` \| ``"medium"`` \| ``"small"``

Size of the input and buttons

Default: 'large'

#### Overrides

Omit.size

___

### state

• `Optional` **state**: ``"default"`` \| ``"error"``

State of `Stepper`
Allows redraw when pushing 'error' to this prop

#### Overrides

Omit.state

___

### step

• `Optional` **step**: `number`

Number to step by for each increment and decrement

#### Overrides

Omit.step

___

### suffix

• `Optional` **suffix**: `string`

Adding a suffix abbreviation to the end of the field

#### Inherited from

Omit.suffix

___

### type

• `Optional` **type**: `string`

Type of text input

#### Inherited from

Omit.type

___

### value

• `Optional` **value**: `number`

Value of `input` in `Stepper`

#### Overrides

Omit.value

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\>

Props to extend `StepperWrapper`
Useful for setting `style` overrides for the wrapper

#### Overrides

Omit.wrapperProps

## Methods

### onBlur

▸ `Optional` **onBlur**(`event`, `info`): `void`

`onBlur` trigger function

**`argument`** {Event} event - DOM Event of onBlur event

**`argument`** {object<string, value>} object - { action, current, previous } value

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`Element`, `Element`\> |
| `info` | [`StepperValueInfo`](../README.md#steppervalueinfo) |

#### Returns

`void`

___

### onChange

▸ `Optional` **onChange**(`event`, `info`): `void`

`onChange` trigger function

**`argument`** {Event} event - DOM Event of onChange event

**`argument`** {object<string, value>} object - { action, current, previous } value

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `info` | [`StepperValueInfo`](../README.md#steppervalueinfo) |

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

### onFocus

▸ `Optional` **onFocus**(`event`): `void`

`onFocus` trigger function

**`argument`** {Event} event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`Element`, `Element`\> |

#### Returns

`void`

#### Overrides

Omit.onFocus
