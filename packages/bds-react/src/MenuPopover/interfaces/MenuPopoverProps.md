# Interface: MenuPopoverProps

## Hierarchy

- `Omit`<`BackyardBaseProps`<[`MenuPopoverRef`](../README.md#menupopoverref)\> & `PopoverProps`, `MenuPopoverPropsOverride`\>

  ↳ **`MenuPopoverProps`**

## Properties

### anchorEl

• `Optional` **anchorEl**: `HTMLElement`

Anchor ref of the element to reference for the popover
Required if `children` is not defined

#### Inherited from

Omit.anchorEl

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### children

• `Optional` **children**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Element to anchor popover
Will use default `IconButton` with `Dots` if not defined

#### Overrides

Omit.children

___

### closeDelay

• `Optional` **closeDelay**: `number` \| ``false``

Number in milliseconds to delay closing the menu popover
so that it doesn't close on the user inconveniently.

Set to `false` to make it so that the popover never closes
when the user's mouse exits the popover menu.

___

### container

• `Optional` **container**: `ReactInstance`

Portal Container

#### Inherited from

Omit.container

___

### defaultOpen

• `Optional` **defaultOpen**: `boolean`

Whether or not the tooltip is open by default

#### Inherited from

Omit.defaultOpen

___

### disableClick

• `Optional` **disableClick**: `boolean`

Disable click listener on popover

___

### disablePortal

• `Optional` **disablePortal**: `boolean`

Whether or not portal will be disabled

#### Inherited from

Omit.disablePortal

___

### enablePortal

• `Optional` **enablePortal**: `boolean`

Whether or not portal is enabled, which is disabled by default

___

### hideOverlay

• `Optional` **hideOverlay**: `boolean`

Whether or not the invisible overlay renders

#### Inherited from

Omit.hideOverlay

___

### icon

• `Optional` **icon**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon to use in default `IconButton` if `children` is not given
Defaults to `Dots` icon

___

### keepMounted

• `Optional` **keepMounted**: `boolean`

Whether or not the tooltip/portal will remain mounted when closed
This is useful for SSR/SEO situations where you want the Tooltip to remain on the page when closed

#### Inherited from

Omit.keepMounted

___

### listenHover

• `Optional` **listenHover**: `boolean`

Listen for hover events for popover

___

### menu

• **menu**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Menu element to pop over

___

### mergeEffect

• `Optional` **mergeEffect**: `boolean`

Enables a merging effect between the reference and the popover content

___

### offset

• `Optional` **offset**: `number`[]

Offset too apply to the popover
[0, 16]
  /|\
First element is the offset along the edge of the anchor, in pixels
Second element is the offset away from the anchor, in pixels

#### Inherited from

Omit.offset

___

### open

• `Optional` **open**: `boolean`

Whether or not popover is open controlled

#### Overrides

Omit.open

___

### openDelay

• `Optional` **openDelay**: `number`

The number of milliseconds to wait before showing the tooltip.
This prop won't impact the enter touch delay (`enterTouchDelay`).

#### Inherited from

Omit.openDelay

___

### openNextDelay

• `Optional` **openNextDelay**: `number`

The number of milliseconds to wait before showing the tooltip when one was already recently opened.

#### Inherited from

Omit.openNextDelay

___

### placement

• `Optional` **placement**: ``"bottom-end"`` \| ``"bottom-start"`` \| ``"bottom"`` \| ``"left-end"`` \| ``"left-start"`` \| ``"left"`` \| ``"right-end"`` \| ``"right-start"`` \| ``"right"`` \| ``"top-end"`` \| ``"top-start"`` \| ``"top"``

Position of the tooltip from the reference element (child)
Note: This is opposite of `Tooltip`'s `arrow` prop, which positions the tooltip from the reference
 For example, a `bottom` placed `Popover` will have the `arrow` be on top
 [Some Element]
      /|\
     [Pop]

#### Overrides

Omit.placement

___

### popperModifiers

• `Optional` **popperModifiers**: `Modifier`<`string`, `object`\>[]

PopperJS Modifiers to extend/override default modifiers in `Popover`

#### Inherited from

Omit.popperModifiers

___

### popperOptions

• `Optional` **popperOptions**: `Options`

PopperJS Options to extends/override default options in `TooltipOptions`

#### Inherited from

Omit.popperOptions

___

### shadow

• `Optional` **shadow**: ``"string"`` \| ``"none"`` \| ``"shadow_01"`` \| ``"shadow_02"`` \| ``"shadow_03"`` \| ``"shadow_04"`` \| ``"shadow_05"`` \| ``"shadow_06"``

Shadow token to use, or none

**`default`** 'shadow_03'

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the button and popover

#### Overrides

Omit.shape

## Methods

### onClose

▸ `Optional` **onClose**(): `void`

`onClose` trigger function for when the calendar popover closes

#### Returns

`void`

#### Overrides

Omit.onClose

___

### onOpen

▸ `Optional` **onOpen**(): `void`

`onOpen` trigger function for when the calendar popover opens

#### Returns

`void`

#### Overrides

Omit.onOpen
