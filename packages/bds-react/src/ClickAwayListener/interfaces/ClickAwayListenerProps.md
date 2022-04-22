# Interface: ClickAwayListenerProps

## Properties

### children

• **children**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> & { `ref?`: `Ref`<`HTMLElement`\>  }

The wrapped element.

___

### disableReactTree

• `Optional` **disableReactTree**: `boolean`

If `true`, the React tree is ignored and only the DOM tree is considered.
This prop changes how portaled elements are handled.

___

### mouseEvent

• `Optional` **mouseEvent**: ``false`` \| ``"onClick"`` \| ``"onMouseDown"`` \| ``"onMouseUp"``

The mouse event to listen to. You can disable the listener by providing `false`.

___

### touchEvent

• `Optional` **touchEvent**: ``false`` \| ``"onTouchEnd"`` \| ``"onTouchStart"``

The touch event to listen to. You can disable the listener by providing `false`.

## Methods

### onClickAway

▸ **onClickAway**(`event`): `void`

Callback fired when a "click away" event is detected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ClickAwayEvent`](../README.md#clickawayevent) |

#### Returns

`void`
