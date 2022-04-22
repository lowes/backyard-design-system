# Interface: MenuItemCrumbProps

## Hierarchy

- `Omit`<`MenuItemProps`, ``"children"``\>

  ↳ **`MenuItemCrumbProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### children

• `Optional` **children**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Children are option in Link Crumbs

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Inherited from

Omit.className

___

### color

• `Optional` **color**: ``"interactive"`` \| ``"green"`` \| ``"red"`` \| ``"neutral"``

Type of button
- Interactive -> (Default) Lowe's Primary Color Palette
- Commerce -> Lowe's Commerce Color Palette
- Contrast -> High Contrast Black/White Color Palette

#### Inherited from

Omit.color

___

### component

• `Optional` **component**: `ComponentClass`<{}, `any`\>

Component wrapper of the menu item
Can be an HTML tag (`li`) or component

#### Inherited from

Omit.component

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not the menu item is disabled for selecting

#### Inherited from

Omit.disabled

___

### elevation

• `Optional` **elevation**: `boolean`

Adds elevation to the button

#### Inherited from

Omit.elevation

___

### fullWidth

• `Optional` **fullWidth**: `boolean`

Makes button 100% the width of the container

#### Inherited from

Omit.fullWidth

___

### iconAfter

• `Optional` **iconAfter**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon Component before to place in menu item

#### Inherited from

Omit.iconAfter

___

### iconBefore

• `Optional` **iconBefore**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon Component before to place in menu item

#### Inherited from

Omit.iconBefore

___

### label

• `Optional` **label**: `string`

Label of the menu item
uses `children` if not defined

#### Inherited from

Omit.label

___

### selected

• `Optional` **selected**: `boolean`

Whether or not the menu item is selected

#### Inherited from

Omit.selected

___

### shape

• `Optional` **shape**: ``"circle"`` \| ``"rounded"`` \| ``"squared"`` \| ``"custom"``

Shape of button
- Rounded -> Medium Border Radius
- Squared -> (Default) Zero Border Radius
- Circle -> Maximum Border Radius (FAB Button)

#### Inherited from

Omit.shape

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"`` \| ``"jumbo"`` \| ``"full-width"`` \| ``"extra_small"``

Size of Button
- Small -> Small Height/Spacing Button
- Medium -> (Default) Medium Height/Spacing Button
- Large -> Large Height/Spacing Button

#### Inherited from

Omit.size

___

### type

• `Optional` **type**: ``"button"`` \| ``"submit"`` \| ``"reset"``

#### Inherited from

Omit.type

___

### value

• `Optional` **value**: `string`

Value of menu item

#### Inherited from

Omit.value

___

### variant

• `Optional` **variant**: ``"primary"`` \| ``"inverse"`` \| ``"secondary"`` \| ``"tertiary"`` \| ``"ghost"``

Variant of button
- Primary -> (Default) Solid Button w/ Background w/o Borders
- Secondary -> Outlined Button w/o Background w/ Borders
- Ghost -> No Background, No Borders

#### Inherited from

Omit.variant

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

Omit.onClick

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

Omit.onFocus

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

Omit.onKeyDown
