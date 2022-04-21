# Interface: TooltipPopperProps

## Hierarchy

- `Omit`<`TooltipProps`, `TooltipPopperOverrideProps`\>

  ↳ **`TooltipPopperProps`**

## Properties

### arrow

• `Optional` **arrow**: ``"bottom-end"`` \| ``"bottom-start"`` \| ``"bottom"`` \| ``"left"`` \| ``"right"`` \| ``"top-end"`` \| ``"top-start"`` \| ``"top"`` \| ``"none"``

Position of arrow from the center of the tooltip
Note: This is opposite of `TooltipPopper`'s `placement` prop, which positions the tooltip from the reference
 For example, a `bottom` placed `TooltipPopper` will have the `arrow` be on top
 [Some Element]
      /|\
   [Tooltip]

#### Inherited from

Omit.arrow

___

### arrowProps

• `Optional` **arrowProps**: `BackyardBaseProps`<`HTMLSpanElement`, ``""``\>

Arrow Props to extend arrow with

#### Inherited from

Omit.arrowProps

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### children

• **children**: `ReactElement`<`any`, `any`\>

Tooltip reference element.

#### Overrides

Omit.children

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

Omit.className

___

### container

• `Optional` **container**: `ReactInstance`

Portal Container

___

### defaultOpen

• `Optional` **defaultOpen**: `boolean`

Whether or not the tooltip is open by default

___

### disablePortal

• `Optional` **disablePortal**: `boolean`

Whether or not portal will be disabled

___

### enterDelay

• `Optional` **enterDelay**: `number`

The number of milliseconds to wait before showing the tooltip.
This prop won't impact the enter touch delay (`enterTouchDelay`).

___

### enterNextDelay

• `Optional` **enterNextDelay**: `number`

The number of milliseconds to wait before showing the tooltip when one was already recently opened.

___

### icon

• `Optional` **icon**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Leading icon of tooltip

#### Inherited from

Omit.icon

___

### id

• `Optional` **id**: `string`

This prop is used to help implement the accessibility logic.
If you don't provide this prop. It falls back to a randomly generated id.

#### Overrides

Omit.id

___

### invisible

• `Optional` **invisible**: `boolean`

Whether or not tooltip is invisible

#### Inherited from

Omit.invisible

___

### keepMounted

• `Optional` **keepMounted**: `boolean`

Whether or not the tooltip/portal will remain mounted when closed
This is useful for SSR/SEO situations where you want the Tooltip to remain on the page when closed

___

### leaveDelay

• `Optional` **leaveDelay**: `number`

The number of milliseconds to wait before hiding the tooltip.
This prop won't impact the leave touch delay (`leaveTouchDelay`).

___

### open

• `Optional` **open**: `boolean`

If `true`, the tooltip is shown.

#### Overrides

Omit.open

___

### placement

• `Optional` **placement**: ``"bottom-end"`` \| ``"bottom-start"`` \| ``"bottom"`` \| ``"left-end"`` \| ``"left-start"`` \| ``"left"`` \| ``"right-end"`` \| ``"right-start"`` \| ``"right"`` \| ``"top-end"`` \| ``"top-start"`` \| ``"top"``

Position of the tooltip from the reference element (child)
Note: This is opposite of `Tooltip`'s `arrow` prop, which positions the tooltip from the reference
 For example, a `bottom` placed `TooltipPopper` will have the `arrow` be on top
 [Some Element]
      /|\
   [Tooltip]

___

### popperModifiers

• `Optional` **popperModifiers**: `Modifier`<`string`, `object`\>[]

PopperJS Modifiers to extend/override default modifiers in `TooltipPopper`

___

### popperOptions

• `Optional` **popperOptions**: `Options`

PopperJS Options to extends/override default options in `TooltipOptions`

___

### shadow

• `Optional` **shadow**: ``"string"`` \| ``"none"`` \| ``"shadow_01"`` \| ``"shadow_02"`` \| ``"shadow_03"`` \| ``"shadow_04"`` \| ``"shadow_05"`` \| ``"shadow_06"``

Shadow token to use, or none

**`default`** 'shadow_04'

#### Inherited from

Omit.shadow

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the tooltip

#### Inherited from

Omit.shape

___

### title

• `Optional` **title**: `ReactNode`

Tooltip title. Zero-length titles string are never displayed.

___

### tooltip

• **tooltip**: `ReactElement`<`TooltipProps`, `string` \| `JSXElementConstructor`<`any`\>\>

Tooltip to handle popper events

___

### variant

• `Optional` **variant**: ``"low_contrast"`` \| ``"high_contrast"``

Variant of Tooltip

#### Inherited from

Omit.variant

___

### width

• `Optional` **width**: `string`

Width of Tooltip
Defaults to auto
Limited by a maximum width of 320px (Desktop) and 256px (Mobile)

#### Inherited from

Omit.width

## Methods

### onClose

▸ `Optional` **onClose**(`event`): `void`

Callback fired when the component requests to be closed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `TooltipPopperEvent` | The event source of the callback. |

#### Returns

`void`

___

### onOpen

▸ `Optional` **onOpen**(`event`): `void`

Callback fired when the component requests to be open.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `TooltipPopperEvent` | The event source of the callback. |

#### Returns

`void`
