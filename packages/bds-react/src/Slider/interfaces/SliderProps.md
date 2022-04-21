# Interface: SliderProps

## Properties

### className

• `Optional` **className**: `string`

___

### defaultValue

• `Optional` **defaultValue**: `number`

The default value for the slider.

___

### disabled

• `Optional` **disabled**: `boolean`

Wether or not the slider is disabled.

___

### max

• `Optional` **max**: `number`

The max value of the slider.

___

### min

• `Optional` **min**: `number`

The min value of the slider.

___

### orientation

• `Optional` **orientation**: ``"horizontal"`` \| ``"vertical"``

The orientation of the slider.

___

### popoverProps

• `Optional` **popoverProps**: `Partial`<`TooltipPopperProps`\>

The tooltip popper's prop overrides

___

### popperProps

• `Optional` **popperProps**: `Partial`<`TooltipPopperProps`\>

The tooltip popper's prop overrides

Alias of `popoverProps`

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the tooltip

___

### showInput

• `Optional` **showInput**: `boolean`

If the input should be rendered.

___

### step

• `Optional` **step**: `number`

The value the slider will increment and decrement.

___

### thumbClassName

• `Optional` **thumbClassName**: `String`

Adds a className to the thumb component.

___

### tooltip

• `Optional` **tooltip**: `Boolean`

The tooltip being displayed.

___

### tooltipProps

• `Optional` **tooltipProps**: `TooltipProps`

Tooltip prop overrides

___

### value

• `Optional` **value**: `number`

The value of the slider.

## Methods

### onBlur

▸ `Optional` **onBlur**(`event`): `void`

`onBlur` trigger function

**`argument`** {Event} event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`Element`, `Element`\> |

#### Returns

`void`

___

### onChange

▸ `Optional` **onChange**(`event`): `void`

`onChange` trigger function

**`argument`** {Event} event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |

#### Returns

`void`

___

### onChangeCommitted

▸ `Optional` **onChangeCommitted**(`event`): `void`

`onChangeCommitted` trigger function

**`argument`** {Event} event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |

#### Returns

`void`

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

___

### onMouseDown

▸ `Optional` **onMouseDown**(`event`): `void`

`onMouseDown` trigger function

**`argument`** {Event} event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`
