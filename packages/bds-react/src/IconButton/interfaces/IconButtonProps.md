# Interface: IconButtonProps

## Hierarchy

- `ButtonProps`

  ↳ **`IconButtonProps`**

## Properties

### ariaTitle

• `Optional` **ariaTitle**: `string`

See `ButtonProps`

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

ButtonProps.as

___

### children

• `Optional` **children**: `ReactNode`

React Children

#### Inherited from

ButtonProps.children

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Inherited from

ButtonProps.className

___

### color

• `Optional` **color**: ``"interactive"`` \| ``"green"`` \| ``"red"`` \| ``"neutral"``

Type of button
- Interactive -> (Default) Lowe's Primary Color Palette
- Commerce -> Lowe's Commerce Color Palette
- Contrast -> High Contrast Black/White Color Palette

#### Inherited from

ButtonProps.color

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not button is disabled

#### Inherited from

ButtonProps.disabled

___

### elevation

• `Optional` **elevation**: `boolean`

Adds elevation to the button

#### Inherited from

ButtonProps.elevation

___

### fullWidth

• `Optional` **fullWidth**: `boolean`

Makes button 100% the width of the container

#### Inherited from

ButtonProps.fullWidth

___

### iconAfter

• `Optional` **iconAfter**: `ReactNode`

Icon Node to display on right-side of button text

Note: Do not use for an icon-only button, use `IconButton` for that

#### Inherited from

ButtonProps.iconAfter

___

### iconBefore

• `Optional` **iconBefore**: `ReactNode`

Icon Node to display on left-side of button text

Note: Do not use for an icon-only button, use `IconButton` for that

#### Inherited from

ButtonProps.iconBefore

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"`` \| ``"circle"`` \| ``"custom"``

Shape of button
- Rounded -> Medium Border Radius
- Squared -> (Default) Zero Border Radius
- Circle -> Maximum Border Radius (FAB Button)

#### Inherited from

ButtonProps.shape

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"`` \| ``"jumbo"`` \| ``"full-width"`` \| ``"extra_small"``

Size of Button
- Small -> Small Height/Spacing Button
- Medium -> (Default) Medium Height/Spacing Button
- Large -> Large Height/Spacing Button

#### Inherited from

ButtonProps.size

___

### type

• `Optional` **type**: ``"button"`` \| ``"submit"`` \| ``"reset"``

#### Inherited from

ButtonProps.type

___

### variant

• `Optional` **variant**: ``"primary"`` \| ``"secondary"`` \| ``"tertiary"`` \| ``"ghost"`` \| ``"inverse"``

Variant of button
- Primary -> (Default) Solid Button w/ Background w/o Borders
- Secondary -> Outlined Button w/o Background w/ Borders
- Ghost -> No Background, No Borders

#### Inherited from

ButtonProps.variant

## Methods

### onClick

▸ `Optional` **onClick**(`event`): `void`

`onClick` trigger function

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Inherited from

ButtonProps.onClick

___

### onFocus

▸ `Optional` **onFocus**(`event`): `void`

`onFocus` trigger function

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`Element`, `Element`\> |

#### Returns

`void`

#### Inherited from

ButtonProps.onFocus

___

### onKeyDown

▸ `Optional` **onKeyDown**(`event`): `void`

`onKeyDown` trigger function

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`Element`\> |

#### Returns

`void`

#### Inherited from

ButtonProps.onKeyDown
