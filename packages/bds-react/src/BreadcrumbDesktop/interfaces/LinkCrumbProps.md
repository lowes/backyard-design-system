# Interface: LinkCrumbProps

## Hierarchy

- `Omit`<`LinkProps`, ``"children"``\>

  ↳ **`LinkCrumbProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### bold

• `Optional` **bold**: `boolean`

Whether or not text in link is bold

#### Inherited from

Omit.bold

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

• `Optional` **color**: `string`

Color of link text and icon

#### Inherited from

Omit.color

___

### iconAfter

• `Optional` **iconAfter**: `ReactNode`

Icon Node to display on right-side of link text

#### Inherited from

Omit.iconAfter

___

### iconBefore

• `Optional` **iconBefore**: `ReactNode`

Icon Node to display on left-side of link text

#### Inherited from

Omit.iconBefore

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"``

Size of Link
Small -> Small Height/Spacing Link
Medium -> (Default) Medium Height/Spacing Link

#### Inherited from

Omit.size

___

### to

• `Optional` **to**: `string`

Page to link to

#### Inherited from

Omit.to

___

### underline

• `Optional` **underline**: ``"never"`` \| ``"hover"`` \| ``"always"``

Controls when the link should have an underline

#### Inherited from

Omit.underline

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
