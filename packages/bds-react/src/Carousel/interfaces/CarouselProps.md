# Interface: CarouselProps

## Hierarchy

- `BackyardBaseProps`<[`CarouselRef`](../README.md#carouselref)\>

  ↳ **`CarouselProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### carouselButtonProps

• `Optional` **carouselButtonProps**: `IconButtonProps`

Overrides the props on both of the carousel icon buttons.

___

### leftIcon

• `Optional` **leftIcon**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

The icon for the navigate left icon button.

___

### noButtons

• `Optional` **noButtons**: `boolean`

Makes it so that when true, the Carousel will not display the left and right buttons. This works in concert with
the noScrollbar prop. Both noScrollBar and noButtons can be false but only one can be true at a time.

___

### noScrollbar

• `Optional` **noScrollbar**: `boolean`

Makes it so that when true the Carousel will not display a scrollbar whenever there are items hidden by overflow.
Note: This does not remove the scroll functionality just purely removes the scrollbar. You can still scroll via
the buttons or within the Carousel itself.

___

### rightIcon

• `Optional` **rightIcon**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

The icon for the navigate left icon button.

___

### scrollDistance

• `Optional` **scrollDistance**: `number`

Distance, in px, that is scrolled when clicking the 'scroll buttons'
