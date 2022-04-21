# Interface: MenuItemProps

## Hierarchy

- `ButtonProps`

  ↳ **`MenuItemProps`**

## Properties

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

### component

• `Optional` **component**: `ComponentClass`<{}, `any`\>

Component wrapper of the menu item
Can be an HTML tag (`li`) or component

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not the menu item is disabled for selecting

#### Overrides

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

• `Optional` **iconAfter**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon Component before to place in menu item

#### Overrides

ButtonProps.iconAfter

___

### iconBefore

• `Optional` **iconBefore**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon Component before to place in menu item

#### Overrides

ButtonProps.iconBefore

___

### label

• `Optional` **label**: `string`

Label of the menu item
uses `children` if not defined

#### Overrides

ButtonProps.label

___

### selected

• `Optional` **selected**: `boolean`

Whether or not the menu item is selected

#### Overrides

ButtonProps.selected

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

### value

• `Optional` **value**: `string`

Value of menu item

#### Overrides

ButtonProps.value

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
