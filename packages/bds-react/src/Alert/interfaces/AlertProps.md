# Interface: AlertProps

## Hierarchy

- `BackyardBaseProps`<[`AlertRef`](../README.md#alertref), `AlertOverrideProps`\>

  ↳ **`AlertProps`**

## Properties

### action

• `Optional` **action**: `ReactNode`

Action text of alert, if defined

___

### actionLinkProps

• `Optional` **actionLinkProps**: `LinkProps`

Exposes props of `Link` action

Useful if you need more customizability than the helper props `actionTo` and `onActionClick`

___

### actionTo

• `Optional` **actionTo**: `string`

`to` helper prop of action `Link`

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### autoCloseAfter

• `Optional` **autoCloseAfter**: `number`

Milliseconds to auto close in, if defined

___

### children

• `Optional` **children**: `ReactNode`

Children of subtitle span

#### Overrides

BackyardBaseProps.children

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

BackyardBaseProps.className

___

### closeButtonProps

• `Optional` **closeButtonProps**: `IconButtonProps`

Close `IconButton` prop overrides

___

### closeDelay

• `Optional` **closeDelay**: `number`

Milliseconds of delay until deletion from DOM after close clicked

Useful for allowing animations to play before removal

___

### closed

• `Optional` **closed**: `boolean`

Whether or not alert is closed by default

___

### elevation

• `Optional` **elevation**: `boolean` \| ``"shadow_01"`` \| ``"shadow_02"`` \| ``"shadow_03"`` \| ``"shadow_04"`` \| ``"shadow_05"`` \| ``"shadow_06"``

Elevations to assign to alert

**`default`** 'true'

___

### height

• `Optional` **height**: `string`

Width of the alert.

#### Overrides

BackyardBaseProps.height

___

### iconProps

• `Optional` **iconProps**: `PathIconProps`

Icon props to override with

___

### multiline

• `Optional` **multiline**: `boolean`

Whether or not to make the title and subtitle on separate lines

**`default`** false

___

### noClose

• `Optional` **noClose**: `boolean`

Whether or not close is present

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Outer shape of the component.

#### Overrides

BackyardBaseProps.shape

___

### size

• `Optional` **size**: ``"standard"`` \| ``"medium"`` \| ``"jumbo"``

Size of alert

___

### subtitle

• `Optional` **subtitle**: `ReactNode`

Subtitle text of alert

Alternative to using `children`

___

### title

• `Optional` **title**: `ReactNode`

Title text of alert

___

### type

• `Optional` **type**: ``"info"`` \| ``"error"`` \| ``"success"`` \| ``"warning"``

Type of Alert

#### Overrides

BackyardBaseProps.type

___

### width

• `Optional` **width**: `string`

Width of the alert.

#### Overrides

BackyardBaseProps.width

## Methods

### onActionClick

▸ `Optional` **onActionClick**(`event`, `target`): `void`

`onActionClick` trigger function

Helper prop for `onClick` handler on `Link`
Can be overridden from `actionProps`

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |
| `target` | `EventTarget` |

#### Returns

`void`

___

### onClose

▸ `Optional` **onClose**(`event`, `target`): `void`

`onClose` trigger function

Helper prop for `onClick` handler on close

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`AlertEvent`](../README.md#alertevent) |
| `target` | `EventTarget` |

#### Returns

`void`
