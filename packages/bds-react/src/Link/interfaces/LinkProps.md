# Interface: LinkProps

## Hierarchy

- `BackyardBaseProps`<[`LinkRef`](../README.md#linkref), `LinkOverrideProps`\>

  ↳ **`LinkProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### bold

• `Optional` **bold**: `boolean`

Whether or not text in link is bold

___

### children

• `Optional` **children**: `ReactNode`

Children

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

• `Optional` **color**: `string`

Color of link text and icon

#### Overrides

BackyardBaseProps.color

___

### iconAfter

• `Optional` **iconAfter**: `ReactNode`

Icon Node to display on right-side of link text

___

### iconBefore

• `Optional` **iconBefore**: `ReactNode`

Icon Node to display on left-side of link text

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"``

Size of Link
Small -> Small Height/Spacing Link
Medium -> (Default) Medium Height/Spacing Link

___

### to

• `Optional` **to**: `string`

Page to link to

___

### underline

• `Optional` **underline**: ``"never"`` \| ``"hover"`` \| ``"always"``

Controls when the link should have an underline

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
