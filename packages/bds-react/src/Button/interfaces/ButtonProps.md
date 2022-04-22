# Interface: ButtonProps

## Hierarchy

- `BackyardBaseProps`<[`ButtonRef`](../README.md#buttonref), `ButtonOverrideProps`\>

  ↳ **`ButtonProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### children

• `Optional` **children**: `ReactNode`

React Children

#### Overrides

BackyardBaseProps.children

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

BackyardBaseProps.className

___

### color

• `Optional` **color**: ``"interactive"`` \| ``"green"`` \| ``"red"`` \| ``"neutral"``

Type of button
- Interactive -> (Default) Lowe's Primary Color Palette
- Commerce -> Lowe's Commerce Color Palette
- Contrast -> High Contrast Black/White Color Palette

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not button is disabled

#### Overrides

BackyardBaseProps.disabled

___

### elevation

• `Optional` **elevation**: `boolean`

Adds elevation to the button

___

### fullWidth

• `Optional` **fullWidth**: `boolean`

Makes button 100% the width of the container

___

### iconAfter

• `Optional` **iconAfter**: `ReactNode`

Icon Node to display on right-side of button text

Note: Do not use for an icon-only button, use `IconButton` for that

___

### iconBefore

• `Optional` **iconBefore**: `ReactNode`

Icon Node to display on left-side of button text

Note: Do not use for an icon-only button, use `IconButton` for that

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"`` \| ``"circle"`` \| ``"custom"``

Shape of button
- Rounded -> Medium Border Radius
- Squared -> (Default) Zero Border Radius
- Circle -> Maximum Border Radius (FAB Button)

#### Overrides

BackyardBaseProps.shape

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"`` \| ``"jumbo"`` \| ``"full-width"`` \| ``"extra_small"``

Size of Button
- Small -> Small Height/Spacing Button
- Medium -> (Default) Medium Height/Spacing Button
- Large -> Large Height/Spacing Button

___

### type

• `Optional` **type**: ``"button"`` \| ``"submit"`` \| ``"reset"``

#### Overrides

BackyardBaseProps.type

___

### variant

• `Optional` **variant**: ``"primary"`` \| ``"secondary"`` \| ``"tertiary"`` \| ``"ghost"`` \| ``"inverse"``

Variant of button
- Primary -> (Default) Solid Button w/ Background w/o Borders
- Secondary -> Outlined Button w/o Background w/ Borders
- Ghost -> No Background, No Borders

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

#### Overrides

BackyardBaseProps.onClick

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

#### Overrides

BackyardBaseProps.onFocus

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

#### Overrides

BackyardBaseProps.onKeyDown
