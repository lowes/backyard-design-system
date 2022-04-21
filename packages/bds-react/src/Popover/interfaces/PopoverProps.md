# Interface: PopoverProps

## Hierarchy

- `BackyardBaseProps`<[`PopoverRef`](../README.md#popoverref)\>

  ↳ **`PopoverProps`**

## Properties

### anchorEl

• `Optional` **anchorEl**: `HTMLElement`

Anchor ref of the element to reference for the popover
Required if `children` is not defined

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### children

• `Optional` **children**: `ReactElement`<`any`, `any`\>

Popover will use its children as reference by default
Required if `anchorRef` is not defined

#### Overrides

BackyardBaseProps.children

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

BackyardBaseProps.className

___

### closeDelay

• `Optional` **closeDelay**: `number`

The number of milliseconds to wait before hiding the tooltip.
This prop won't impact the leave touch delay (`leaveTouchDelay`).

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

### hideOverlay

• `Optional` **hideOverlay**: `boolean`

Whether or not the invisible overlay renders

___

### id

• `Optional` **id**: `string`

This prop is used to help implement the accessibility logic.
If you don't provide this prop. It falls back to a randomly generated id.

#### Overrides

BackyardBaseProps.id

___

### keepMounted

• `Optional` **keepMounted**: `boolean`

Whether or not the tooltip/portal will remain mounted when closed
This is useful for SSR/SEO situations where you want the Tooltip to remain on the page when closed

___

### offset

• `Optional` **offset**: `number`[]

Offset too apply to the popover
[0, 16]
  /|\
First element is the offset along the edge of the anchor, in pixels
Second element is the offset away from the anchor, in pixels

___

### open

• `Optional` **open**: `boolean`

If `true`, the tooltip is shown.

#### Overrides

BackyardBaseProps.open

___

### openDelay

• `Optional` **openDelay**: `number`

The number of milliseconds to wait before showing the tooltip.
This prop won't impact the enter touch delay (`enterTouchDelay`).

___

### openNextDelay

• `Optional` **openNextDelay**: `number`

The number of milliseconds to wait before showing the tooltip when one was already recently opened.

___

### placement

• `Optional` **placement**: ``"bottom-end"`` \| ``"bottom-start"`` \| ``"bottom"`` \| ``"left-end"`` \| ``"left-start"`` \| ``"left"`` \| ``"right-end"`` \| ``"right-start"`` \| ``"right"`` \| ``"top-end"`` \| ``"top-start"`` \| ``"top"``

Position of the tooltip from the reference element (child)
Note: This is opposite of `Tooltip`'s `arrow` prop, which positions the tooltip from the reference
 For example, a `bottom` placed `Popover` will have the `arrow` be on top
 [Some Element]
      /|\
     [Pop]

___

### pop

• **pop**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Tooltip to handle popper events

___

### popperModifiers

• `Optional` **popperModifiers**: `Modifier`<`string`, `object`\>[]

PopperJS Modifiers to extend/override default modifiers in `Popover`

___

### popperOptions

• `Optional` **popperOptions**: `Options`

PopperJS Options to extends/override default options in `TooltipOptions`

## Methods

### onClose

▸ `Optional` **onClose**(): `void`

Callback fired when the component requests to be closed.

#### Returns

`void`

___

### onOpen

▸ `Optional` **onOpen**(): `void`

Callback fired when the component requests to be open.

#### Returns

`void`
