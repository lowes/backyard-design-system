# Interface: ScrollToTopProps

## Hierarchy

- `BackyardBaseProps`<[`ScrollToTopRef`](../README.md#scrolltotopref)\>

  ↳ **`ScrollToTopProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### bottomPosition

• `Optional` **bottomPosition**: `string`

Space between the Button and the bottom of the window

___

### className

• `Optional` **className**: `string`

Wrapper DOM className

#### Overrides

BackyardBaseProps.className

___

### container

• `Optional` **container**: `ReactInstance`

Portal Container

___

### disablePortal

• `Optional` **disablePortal**: `boolean`

Whether or not portal will be disabled

___

### hide

• `Optional` **hide**: `boolean`

Hides the FAB from the screen when true

___

### noAnimation

• `Optional` **noAnimation**: `boolean`

Turns off the animation effect of the FAB sliding in/out from the bottom of the screen when true

___

### rightPosition

• `Optional` **rightPosition**: `string`

Space between the Button and the right side of the window

___

### scrollToRef

• `Optional` **scrollToRef**: `Ref`<`HTMLElement`\>

Element Ref that the page should scroll to when the ScrollToTop component is clicked.
If nothing is provided it just scrolls to the top of the window.

___

### showAt

• `Optional` **showAt**: `number`

Number in pixels that the user has to scroll from the *top of the page* inorder for the scrollToTop fab
to appear on the screen.
If you don't want the user to have to scroll for it to appear just put 0.

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
