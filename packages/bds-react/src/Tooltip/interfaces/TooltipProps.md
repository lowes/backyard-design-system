# Interface: TooltipProps

## Hierarchy

- `BackyardBaseProps`<[`TooltipRef`](../README.md#tooltipref)\>

  ↳ **`TooltipProps`**

## Properties

### arrow

• `Optional` **arrow**: ``"none"`` \| ``"top-start"`` \| ``"top"`` \| ``"top-end"`` \| ``"left"`` \| ``"right"`` \| ``"bottom-start"`` \| ``"bottom"`` \| ``"bottom-end"``

Position of arrow from the center of the tooltip
Note: This is opposite of `TooltipPopper`'s `placement` prop, which positions the tooltip from the reference
 For example, a `bottom` placed `TooltipPopper` will have the `arrow` be on top
 [Some Element]
      /|\
   [Tooltip]

___

### arrowProps

• `Optional` **arrowProps**: `BackyardBaseProps`<`HTMLSpanElement`, ``""``\>

Arrow Props to extend arrow with

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

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

### icon

• `Optional` **icon**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Leading icon of tooltip

___

### invisible

• `Optional` **invisible**: `boolean`

Whether or not tooltip is invisible

___

### shadow

• `Optional` **shadow**: ``"string"`` \| ``"none"`` \| ``"shadow_01"`` \| ``"shadow_02"`` \| ``"shadow_03"`` \| ``"shadow_04"`` \| ``"shadow_05"`` \| ``"shadow_06"``

Shadow token to use, or none

**`default`** 'shadow_04'

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the tooltip

#### Overrides

BackyardBaseProps.shape

___

### title

• `Optional` **title**: `string`

Title text of Tooltip

#### Overrides

BackyardBaseProps.title

___

### variant

• `Optional` **variant**: ``"low_contrast"`` \| ``"high_contrast"``

Variant of Tooltip

___

### width

• `Optional` **width**: `string`

Width of Tooltip
Defaults to auto
Limited by a maximum width of 320px (Desktop) and 256px (Mobile)

#### Overrides

BackyardBaseProps.width
