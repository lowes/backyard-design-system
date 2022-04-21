# Interface: TrapFocusProps

## Properties

### children

• **children**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

A single child content element

___

### disableAutoFocus

• `Optional` **disableAutoFocus**: `boolean`

If `true`, the modal will not automatically shift focus to itself when it opens, and
replace it to the last focused element when it closes.
This also works correctly with any modal children that have the `disableAutoFocus` prop.

Generally this should never be set to `true` as it makes the modal less
accessible to assistive technologies, like screen readers.

___

### disableEnforceFocus

• `Optional` **disableEnforceFocus**: `boolean`

If `true`, the modal will not prevent focus from leaving the modal while open.

Generally this should never be set to `true` as it makes the modal less
accessible to assistive technologies, like screen readers.

___

### disableRestoreFocus

• `Optional` **disableRestoreFocus**: `boolean`

If `true`, the modal will not restore focus to previously focused element once
modal is hidden.

___

### open

• **open**: `boolean`

If `true`, the modal is open.

## Methods

### getDoc

▸ **getDoc**(): `HTMLDocument`

Return the document to consider.
We use it to implement the restore focus between different browser documents.

#### Returns

`HTMLDocument`

___

### isEnabled

▸ **isEnabled**(): `boolean`

Do we still want to enforce the focus?
This prop helps nesting TrapFocus elements.

#### Returns

`boolean`
