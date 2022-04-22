# Interface: ChipProps

## Hierarchy

- `BackyardBaseProps`<[`ChipRef`](../README.md#chipref), `ChipOverrideProps`\>

  ↳ **`ChipProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### checked

• `Optional` **checked**: `boolean`

Whether or not `input` is checked
Uses controlled `checked` value if defined

#### Overrides

BackyardBaseProps.checked

___

### className

• `Optional` **className**: `string`

DOM Class Name of `input`

#### Overrides

BackyardBaseProps.className

___

### defaultChecked

• `Optional` **defaultChecked**: `boolean`

Whether or not `input` id checked by default
Uses uncontrolled `checked` value if defined

#### Overrides

BackyardBaseProps.defaultChecked

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not `input` is disabled

#### Overrides

BackyardBaseProps.disabled

___

### icon

• `Optional` **icon**: `ReactNode`

Main icon for `input` type `Chip`
Does not render on any other type

___

### id

• `Optional` **id**: `string`

DOM ID of `input`

#### Overrides

BackyardBaseProps.id

___

### label

• **label**: `string`

Required
Label text of `Chip`

#### Overrides

BackyardBaseProps.label

___

### name

• `Optional` **name**: `string`

DOM Name of `input`
Required for choice chips to sync

#### Overrides

BackyardBaseProps.name

___

### subdued

• `Optional` **subdued**: `boolean`

Whether to use the subdued interactive color

___

### value

• `Optional` **value**: `string`

Value of `input`

#### Overrides

BackyardBaseProps.value

___

### variant

• `Optional` **variant**: ``"choice"`` \| ``"filter"`` \| ``"input"``

Type of `Chip` to render
Choice -> Similar to Radio Input, can only have one selected for a given set of equivalent names
Filter -> Similar to Checkboxes, can select as many with a given set of names as desired
Input -> Chip contains a given value, and when activated, will be removed from the form

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLSpanElement`, ``""``\>

Props to extend `ChipBase` with
Useful for setting `style` of `ChipBase` instead of `input`

## Methods

### onChange

▸ `Optional` **onChange**(`event`, `info`): `void`

`onChange` trigger function when `input` value is changed

**`argument`** {React.ChangeEvent} event - DOM Event

**`argument`** {ChipEventInfo} info - { checked, value } of `event.target`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `info` | `ChipEventInfo` |

#### Returns

`void`

___

### onClick

▸ `Optional` **onClick**(`event`, `info`): `void`

`onClick` trigger function when `Chip` is clicked

**`argument`** {React.MouseEvent} event - DOM Event

**`argument`** {ChipEventInfo} info - { checked, value } of `event.target`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |
| `info` | `ChipEventInfo` |

#### Returns

`void`

___

### onDelete

▸ `Optional` **onDelete**(`event`, `info`): `void`

`onDelete` trigger function when 'input' type `Chip` is deleted

**`argument`** {ChipEvent} event - DOM Event

**`argument`** {ChipEventInfo} info - { checked, value } of `event.target`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChipEvent` |
| `info` | `ChipEventInfo` |

#### Returns

`void`

___

### onFocus

▸ `Optional` **onFocus**(`event`, `info`): `void`

`onKeyUp` trigger function when key is pressed and released on `Chip`

**`argument`** {React.FocusEvent} event - DOM Event

**`argument`** {ChipEventInfo} info - { checked, value } of `event.target`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`Element`, `Element`\> |
| `info` | `ChipEventInfo` |

#### Returns

`void`

___

### onKeyDown

▸ `Optional` **onKeyDown**(`event`, `info`): `void`

`onKeyDown` trigger function when key is pressed and released on `Chip`

**`argument`** {React.KeyboardEvent} event - DOM Event

**`argument`** {ChipEventInfo} info - { checked, value } of `event.target`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`Element`\> |
| `info` | `ChipEventInfo` |

#### Returns

`void`

___

### onKeyUp

▸ `Optional` **onKeyUp**(`event`, `info`): `void`

`onKeyUp` trigger function when key is pressed and released on `Chip`

**`argument`** {React.KeyboardEvent} event - DOM Event

**`argument`** {ChipEventInfo} info - { checked, value } of `event.target`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`Element`\> |
| `info` | `ChipEventInfo` |

#### Returns

`void`
