# Interface: RatingProps

## Hierarchy

- `BackyardBaseProps`<[`RatingRef`](../README.md#ratingref), `RatingOverrideProps`\>

  ↳ **`RatingProps`**

## Properties

### IconContainerComponent

• `Optional` **IconContainerComponent**: `ComponentClass`<`IconContainerProps`, `any`\>

The component containing the icon.

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

BackyardBaseProps.className

___

### count

• `Optional` **count**: `number`

Number of ratings, if available
Automatically converts `Rating` component to a read-only component

___

### defaultValue

• `Optional` **defaultValue**: `number`

The default value. Use when the component is not controlled.

#### Overrides

BackyardBaseProps.defaultValue

___

### emptyIcon

• `Optional` **emptyIcon**: `ReactNode`

The icon to display when empty.

___

### emptyLabelText

• `Optional` **emptyLabelText**: `string`

Label text when `Rating` component is empty (no stars selected)

___

### icon

• `Optional` **icon**: `ReactNode`

The icon to display.

___

### interactive

• `Optional` **interactive**: `boolean`

Whether or not rating component is interactive

___

### max

• `Optional` **max**: `number`

Maximum rating.

#### Overrides

BackyardBaseProps.max

___

### name

• `Optional` **name**: `string`

The name attribute of the radio input for forms
Required if interactive

#### Overrides

BackyardBaseProps.name

___

### precision

• `Optional` **precision**: `number`

The minimum increment value change allowed.

___

### size

• `Optional` **size**: ``"jumbo"`` \| ``"large"`` \| ``"medium"`` \| ``"small"``

The size of the rating.

___

### value

• `Optional` **value**: `number`

The rating value.

#### Overrides

BackyardBaseProps.value

## Methods

### getLabelText

▸ `Optional` **getLabelText**(`value`): `string`

Accepts a function which returns a string value that provides a user-friendly name for the current value of the rating.

For localization purposes, you can use the provided [translations](/guides/localization/).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The rating label's value to format. |

#### Returns

`string`

___

### onChange

▸ `Optional` **onChange**(`event`, `value`): `void`

Callback fired when the value changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> | The event source of the callback. |
| `value` | `number` | The new value. |

#### Returns

`void`

___

### onChangeHover

▸ `Optional` **onChangeHover**(`event`, `value`): `void`

Callback function that is fired when the hover state changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> | The event source of the callback. |
| `value` | `number` | The new value. |

#### Returns

`void`
