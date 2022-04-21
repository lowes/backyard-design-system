# Interface: SubMenuProps

## Hierarchy

- `MenuProps`

  ↳ **`SubMenuProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

MenuProps.as

___

### children

• `Optional` **children**: `ReactNode`

Children of menu
Optionally, `items` can be given a list data structure instead

#### Inherited from

MenuProps.children

___

### items

• `Optional` **items**: `MenuItemProps`[]

Menu Items to use if data list is provided instead of declarative children

#### Inherited from

MenuProps.items

___

### label

• **label**: `string`

Label to display in main menu for the sub menu

#### Overrides

MenuProps.label

___

### listenHover

• `Optional` **listenHover**: `boolean`

Whether or not submenu will listen to hover events

___

### menuItemProps

• `Optional` **menuItemProps**: `Pick`<`MenuItemProps`, ``"as"`` \| ``"accept"`` \| ``"acceptCharset"`` \| ``"action"`` \| ``"allowFullScreen"`` \| ``"allowTransparency"`` \| ``"alt"`` \| ``"async"`` \| ``"autoComplete"`` \| ``"autoFocus"`` \| ``"autoPlay"`` \| ``"capture"`` \| ``"cellPadding"`` \| ``"cellSpacing"`` \| ``"charSet"`` \| ``"challenge"`` \| ``"checked"`` \| ``"cite"`` \| ``"classID"`` \| ``"cols"`` \| ``"colSpan"`` \| ``"content"`` \| ``"controls"`` \| ``"coords"`` \| ``"crossOrigin"`` \| ``"data"`` \| ``"dateTime"`` \| ``"default"`` \| ``"defer"`` \| ``"disabled"`` \| ``"download"`` \| ``"encType"`` \| ``"form"`` \| ``"formAction"`` \| ``"formEncType"`` \| ``"formMethod"`` \| ``"formNoValidate"`` \| ``"formTarget"`` \| ``"frameBorder"`` \| ``"headers"`` \| ``"height"`` \| ``"high"`` \| ``"href"`` \| ``"hrefLang"`` \| ``"htmlFor"`` \| ``"httpEquiv"`` \| ``"integrity"`` \| ``"keyParams"`` \| ``"keyType"`` \| ``"kind"`` \| ``"label"`` \| ``"list"`` \| ``"loop"`` \| ``"low"`` \| ``"manifest"`` \| ``"marginHeight"`` \| ``"marginWidth"`` \| ``"max"`` \| ``"maxLength"`` \| ``"media"`` \| ``"mediaGroup"`` \| ``"method"`` \| ``"min"`` \| ``"minLength"`` \| ``"multiple"`` \| ``"muted"`` \| ``"name"`` \| ``"nonce"`` \| ``"noValidate"`` \| ``"open"`` \| ``"optimum"`` \| ``"pattern"`` \| ``"placeholder"`` \| ``"playsInline"`` \| ``"poster"`` \| ``"preload"`` \| ``"readOnly"`` \| ``"rel"`` \| ``"required"`` \| ``"reversed"`` \| ``"rows"`` \| ``"rowSpan"`` \| ``"sandbox"`` \| ``"scope"`` \| ``"scoped"`` \| ``"scrolling"`` \| ``"seamless"`` \| ``"selected"`` \| ``"shape"`` \| ``"size"`` \| ``"sizes"`` \| ``"span"`` \| ``"src"`` \| ``"srcDoc"`` \| ``"srcLang"`` \| ``"srcSet"`` \| ``"start"`` \| ``"step"`` \| ``"summary"`` \| ``"target"`` \| ``"type"`` \| ``"useMap"`` \| ``"value"`` \| ``"width"`` \| ``"wmode"`` \| ``"wrap"`` \| ``"defaultChecked"`` \| ``"defaultValue"`` \| ``"suppressContentEditableWarning"`` \| ``"suppressHydrationWarning"`` \| ``"accessKey"`` \| ``"className"`` \| ``"contentEditable"`` \| ``"contextMenu"`` \| ``"dir"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"id"`` \| ``"lang"`` \| ``"slot"`` \| ``"spellCheck"`` \| ``"style"`` \| ``"tabIndex"`` \| ``"title"`` \| ``"translate"`` \| ``"radioGroup"`` \| ``"role"`` \| ``"about"`` \| ``"datatype"`` \| ``"inlist"`` \| ``"prefix"`` \| ``"property"`` \| ``"resource"`` \| ``"typeof"`` \| ``"vocab"`` \| ``"autoCapitalize"`` \| ``"autoCorrect"`` \| ``"autoSave"`` \| ``"color"`` \| ``"itemProp"`` \| ``"itemScope"`` \| ``"itemType"`` \| ``"itemID"`` \| ``"itemRef"`` \| ``"results"`` \| ``"security"`` \| ``"unselectable"`` \| ``"inputMode"`` \| ``"is"`` \| ``"aria-activedescendant"`` \| ``"aria-atomic"`` \| ``"aria-autocomplete"`` \| ``"aria-busy"`` \| ``"aria-checked"`` \| ``"aria-colcount"`` \| ``"aria-colindex"`` \| ``"aria-colspan"`` \| ``"aria-controls"`` \| ``"aria-current"`` \| ``"aria-describedby"`` \| ``"aria-details"`` \| ``"aria-disabled"`` \| ``"aria-dropeffect"`` \| ``"aria-errormessage"`` \| ``"aria-expanded"`` \| ``"aria-flowto"`` \| ``"aria-grabbed"`` \| ``"aria-haspopup"`` \| ``"aria-hidden"`` \| ``"aria-invalid"`` \| ``"aria-keyshortcuts"`` \| ``"aria-label"`` \| ``"aria-labelledby"`` \| ``"aria-level"`` \| ``"aria-live"`` \| ``"aria-modal"`` \| ``"aria-multiline"`` \| ``"aria-multiselectable"`` \| ``"aria-orientation"`` \| ``"aria-owns"`` \| ``"aria-placeholder"`` \| ``"aria-posinset"`` \| ``"aria-pressed"`` \| ``"aria-readonly"`` \| ``"aria-relevant"`` \| ``"aria-required"`` \| ``"aria-roledescription"`` \| ``"aria-rowcount"`` \| ``"aria-rowindex"`` \| ``"aria-rowspan"`` \| ``"aria-selected"`` \| ``"aria-setsize"`` \| ``"aria-sort"`` \| ``"aria-valuemax"`` \| ``"aria-valuemin"`` \| ``"aria-valuenow"`` \| ``"aria-valuetext"`` \| ``"children"`` \| ``"dangerouslySetInnerHTML"`` \| ``"onCopy"`` \| ``"onCopyCapture"`` \| ``"onCut"`` \| ``"onCutCapture"`` \| ``"onPaste"`` \| ``"onPasteCapture"`` \| ``"onCompositionEnd"`` \| ``"onCompositionEndCapture"`` \| ``"onCompositionStart"`` \| ``"onCompositionStartCapture"`` \| ``"onCompositionUpdate"`` \| ``"onCompositionUpdateCapture"`` \| ``"onFocus"`` \| ``"onFocusCapture"`` \| ``"onBlur"`` \| ``"onBlurCapture"`` \| ``"onChange"`` \| ``"onChangeCapture"`` \| ``"onBeforeInput"`` \| ``"onBeforeInputCapture"`` \| ``"onInput"`` \| ``"onInputCapture"`` \| ``"onReset"`` \| ``"onResetCapture"`` \| ``"onSubmit"`` \| ``"onSubmitCapture"`` \| ``"onInvalid"`` \| ``"onInvalidCapture"`` \| ``"onLoad"`` \| ``"onLoadCapture"`` \| ``"onError"`` \| ``"onErrorCapture"`` \| ``"onKeyDown"`` \| ``"onKeyDownCapture"`` \| ``"onKeyPress"`` \| ``"onKeyPressCapture"`` \| ``"onKeyUp"`` \| ``"onKeyUpCapture"`` \| ``"onAbort"`` \| ``"onAbortCapture"`` \| ``"onCanPlay"`` \| ``"onCanPlayCapture"`` \| ``"onCanPlayThrough"`` \| ``"onCanPlayThroughCapture"`` \| ``"onDurationChange"`` \| ``"onDurationChangeCapture"`` \| ``"onEmptied"`` \| ``"onEmptiedCapture"`` \| ``"onEncrypted"`` \| ``"onEncryptedCapture"`` \| ``"onEnded"`` \| ``"onEndedCapture"`` \| ``"onLoadedData"`` \| ``"onLoadedDataCapture"`` \| ``"onLoadedMetadata"`` \| ``"onLoadedMetadataCapture"`` \| ``"onLoadStart"`` \| ``"onLoadStartCapture"`` \| ``"onPause"`` \| ``"onPauseCapture"`` \| ``"onPlay"`` \| ``"onPlayCapture"`` \| ``"onPlaying"`` \| ``"onPlayingCapture"`` \| ``"onProgress"`` \| ``"onProgressCapture"`` \| ``"onRateChange"`` \| ``"onRateChangeCapture"`` \| ``"onSeeked"`` \| ``"onSeekedCapture"`` \| ``"onSeeking"`` \| ``"onSeekingCapture"`` \| ``"onStalled"`` \| ``"onStalledCapture"`` \| ``"onSuspend"`` \| ``"onSuspendCapture"`` \| ``"onTimeUpdate"`` \| ``"onTimeUpdateCapture"`` \| ``"onVolumeChange"`` \| ``"onVolumeChangeCapture"`` \| ``"onWaiting"`` \| ``"onWaitingCapture"`` \| ``"onAuxClick"`` \| ``"onAuxClickCapture"`` \| ``"onClick"`` \| ``"onClickCapture"`` \| ``"onContextMenu"`` \| ``"onContextMenuCapture"`` \| ``"onDoubleClick"`` \| ``"onDoubleClickCapture"`` \| ``"onDrag"`` \| ``"onDragCapture"`` \| ``"onDragEnd"`` \| ``"onDragEndCapture"`` \| ``"onDragEnter"`` \| ``"onDragEnterCapture"`` \| ``"onDragExit"`` \| ``"onDragExitCapture"`` \| ``"onDragLeave"`` \| ``"onDragLeaveCapture"`` \| ``"onDragOver"`` \| ``"onDragOverCapture"`` \| ``"onDragStart"`` \| ``"onDragStartCapture"`` \| ``"onDrop"`` \| ``"onDropCapture"`` \| ``"onMouseDown"`` \| ``"onMouseDownCapture"`` \| ``"onMouseEnter"`` \| ``"onMouseLeave"`` \| ``"onMouseMove"`` \| ``"onMouseMoveCapture"`` \| ``"onMouseOut"`` \| ``"onMouseOutCapture"`` \| ``"onMouseOver"`` \| ``"onMouseOverCapture"`` \| ``"onMouseUp"`` \| ``"onMouseUpCapture"`` \| ``"onSelect"`` \| ``"onSelectCapture"`` \| ``"onTouchCancel"`` \| ``"onTouchCancelCapture"`` \| ``"onTouchEnd"`` \| ``"onTouchEndCapture"`` \| ``"onTouchMove"`` \| ``"onTouchMoveCapture"`` \| ``"onTouchStart"`` \| ``"onTouchStartCapture"`` \| ``"onPointerDown"`` \| ``"onPointerDownCapture"`` \| ``"onPointerMove"`` \| ``"onPointerMoveCapture"`` \| ``"onPointerUp"`` \| ``"onPointerUpCapture"`` \| ``"onPointerCancel"`` \| ``"onPointerCancelCapture"`` \| ``"onPointerEnter"`` \| ``"onPointerEnterCapture"`` \| ``"onPointerLeave"`` \| ``"onPointerLeaveCapture"`` \| ``"onPointerOver"`` \| ``"onPointerOverCapture"`` \| ``"onPointerOut"`` \| ``"onPointerOutCapture"`` \| ``"onGotPointerCapture"`` \| ``"onGotPointerCaptureCapture"`` \| ``"onLostPointerCapture"`` \| ``"onLostPointerCaptureCapture"`` \| ``"onScroll"`` \| ``"onScrollCapture"`` \| ``"onWheel"`` \| ``"onWheelCapture"`` \| ``"onAnimationStart"`` \| ``"onAnimationStartCapture"`` \| ``"onAnimationEnd"`` \| ``"onAnimationEndCapture"`` \| ``"onAnimationIteration"`` \| ``"onAnimationIterationCapture"`` \| ``"onTransitionEnd"`` \| ``"onTransitionEndCapture"`` \| ``"css"`` \| ``"key"`` \| ``"component"`` \| ``"iconBefore"`` \| ``"iconAfter"`` \| ``"variant"`` \| ``"fullWidth"`` \| ``"elevation"``\> & {}

Menu Item Props to extend menu item with if needed

___

### menuPopoverProps

• `Optional` **menuPopoverProps**: `Pick`<[`MenuPopoverProps`](MenuPopoverProps.md), ``"as"`` \| ``"accept"`` \| ``"acceptCharset"`` \| ``"action"`` \| ``"allowFullScreen"`` \| ``"allowTransparency"`` \| ``"alt"`` \| ``"async"`` \| ``"autoComplete"`` \| ``"autoFocus"`` \| ``"autoPlay"`` \| ``"capture"`` \| ``"cellPadding"`` \| ``"cellSpacing"`` \| ``"charSet"`` \| ``"challenge"`` \| ``"checked"`` \| ``"cite"`` \| ``"classID"`` \| ``"cols"`` \| ``"colSpan"`` \| ``"content"`` \| ``"controls"`` \| ``"coords"`` \| ``"crossOrigin"`` \| ``"data"`` \| ``"dateTime"`` \| ``"default"`` \| ``"defer"`` \| ``"disabled"`` \| ``"download"`` \| ``"encType"`` \| ``"form"`` \| ``"formAction"`` \| ``"formEncType"`` \| ``"formMethod"`` \| ``"formNoValidate"`` \| ``"formTarget"`` \| ``"frameBorder"`` \| ``"headers"`` \| ``"height"`` \| ``"high"`` \| ``"href"`` \| ``"hrefLang"`` \| ``"htmlFor"`` \| ``"httpEquiv"`` \| ``"integrity"`` \| ``"keyParams"`` \| ``"keyType"`` \| ``"kind"`` \| ``"label"`` \| ``"list"`` \| ``"loop"`` \| ``"low"`` \| ``"manifest"`` \| ``"marginHeight"`` \| ``"marginWidth"`` \| ``"max"`` \| ``"maxLength"`` \| ``"media"`` \| ``"mediaGroup"`` \| ``"method"`` \| ``"min"`` \| ``"minLength"`` \| ``"multiple"`` \| ``"muted"`` \| ``"name"`` \| ``"nonce"`` \| ``"noValidate"`` \| ``"open"`` \| ``"optimum"`` \| ``"pattern"`` \| ``"placeholder"`` \| ``"playsInline"`` \| ``"poster"`` \| ``"preload"`` \| ``"readOnly"`` \| ``"rel"`` \| ``"required"`` \| ``"reversed"`` \| ``"rows"`` \| ``"rowSpan"`` \| ``"sandbox"`` \| ``"scope"`` \| ``"scoped"`` \| ``"scrolling"`` \| ``"seamless"`` \| ``"selected"`` \| ``"shape"`` \| ``"size"`` \| ``"sizes"`` \| ``"span"`` \| ``"src"`` \| ``"srcDoc"`` \| ``"srcLang"`` \| ``"srcSet"`` \| ``"start"`` \| ``"step"`` \| ``"summary"`` \| ``"target"`` \| ``"type"`` \| ``"useMap"`` \| ``"value"`` \| ``"width"`` \| ``"wmode"`` \| ``"wrap"`` \| ``"defaultChecked"`` \| ``"defaultValue"`` \| ``"suppressContentEditableWarning"`` \| ``"suppressHydrationWarning"`` \| ``"accessKey"`` \| ``"className"`` \| ``"contentEditable"`` \| ``"contextMenu"`` \| ``"dir"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"id"`` \| ``"lang"`` \| ``"slot"`` \| ``"spellCheck"`` \| ``"style"`` \| ``"tabIndex"`` \| ``"title"`` \| ``"translate"`` \| ``"radioGroup"`` \| ``"role"`` \| ``"about"`` \| ``"datatype"`` \| ``"inlist"`` \| ``"prefix"`` \| ``"property"`` \| ``"resource"`` \| ``"typeof"`` \| ``"vocab"`` \| ``"autoCapitalize"`` \| ``"autoCorrect"`` \| ``"autoSave"`` \| ``"color"`` \| ``"itemProp"`` \| ``"itemScope"`` \| ``"itemType"`` \| ``"itemID"`` \| ``"itemRef"`` \| ``"results"`` \| ``"security"`` \| ``"unselectable"`` \| ``"inputMode"`` \| ``"is"`` \| ``"aria-activedescendant"`` \| ``"aria-atomic"`` \| ``"aria-autocomplete"`` \| ``"aria-busy"`` \| ``"aria-checked"`` \| ``"aria-colcount"`` \| ``"aria-colindex"`` \| ``"aria-colspan"`` \| ``"aria-controls"`` \| ``"aria-current"`` \| ``"aria-describedby"`` \| ``"aria-details"`` \| ``"aria-disabled"`` \| ``"aria-dropeffect"`` \| ``"aria-errormessage"`` \| ``"aria-expanded"`` \| ``"aria-flowto"`` \| ``"aria-grabbed"`` \| ``"aria-haspopup"`` \| ``"aria-hidden"`` \| ``"aria-invalid"`` \| ``"aria-keyshortcuts"`` \| ``"aria-label"`` \| ``"aria-labelledby"`` \| ``"aria-level"`` \| ``"aria-live"`` \| ``"aria-modal"`` \| ``"aria-multiline"`` \| ``"aria-multiselectable"`` \| ``"aria-orientation"`` \| ``"aria-owns"`` \| ``"aria-placeholder"`` \| ``"aria-posinset"`` \| ``"aria-pressed"`` \| ``"aria-readonly"`` \| ``"aria-relevant"`` \| ``"aria-required"`` \| ``"aria-roledescription"`` \| ``"aria-rowcount"`` \| ``"aria-rowindex"`` \| ``"aria-rowspan"`` \| ``"aria-selected"`` \| ``"aria-setsize"`` \| ``"aria-sort"`` \| ``"aria-valuemax"`` \| ``"aria-valuemin"`` \| ``"aria-valuenow"`` \| ``"aria-valuetext"`` \| ``"children"`` \| ``"dangerouslySetInnerHTML"`` \| ``"onCopy"`` \| ``"onCopyCapture"`` \| ``"onCut"`` \| ``"onCutCapture"`` \| ``"onPaste"`` \| ``"onPasteCapture"`` \| ``"onCompositionEnd"`` \| ``"onCompositionEndCapture"`` \| ``"onCompositionStart"`` \| ``"onCompositionStartCapture"`` \| ``"onCompositionUpdate"`` \| ``"onCompositionUpdateCapture"`` \| ``"onFocus"`` \| ``"onFocusCapture"`` \| ``"onBlur"`` \| ``"onBlurCapture"`` \| ``"onChange"`` \| ``"onChangeCapture"`` \| ``"onBeforeInput"`` \| ``"onBeforeInputCapture"`` \| ``"onInput"`` \| ``"onInputCapture"`` \| ``"onReset"`` \| ``"onResetCapture"`` \| ``"onSubmit"`` \| ``"onSubmitCapture"`` \| ``"onInvalid"`` \| ``"onInvalidCapture"`` \| ``"onLoad"`` \| ``"onLoadCapture"`` \| ``"onError"`` \| ``"onErrorCapture"`` \| ``"onKeyDown"`` \| ``"onKeyDownCapture"`` \| ``"onKeyPress"`` \| ``"onKeyPressCapture"`` \| ``"onKeyUp"`` \| ``"onKeyUpCapture"`` \| ``"onAbort"`` \| ``"onAbortCapture"`` \| ``"onCanPlay"`` \| ``"onCanPlayCapture"`` \| ``"onCanPlayThrough"`` \| ``"onCanPlayThroughCapture"`` \| ``"onDurationChange"`` \| ``"onDurationChangeCapture"`` \| ``"onEmptied"`` \| ``"onEmptiedCapture"`` \| ``"onEncrypted"`` \| ``"onEncryptedCapture"`` \| ``"onEnded"`` \| ``"onEndedCapture"`` \| ``"onLoadedData"`` \| ``"onLoadedDataCapture"`` \| ``"onLoadedMetadata"`` \| ``"onLoadedMetadataCapture"`` \| ``"onLoadStart"`` \| ``"onLoadStartCapture"`` \| ``"onPause"`` \| ``"onPauseCapture"`` \| ``"onPlay"`` \| ``"onPlayCapture"`` \| ``"onPlaying"`` \| ``"onPlayingCapture"`` \| ``"onProgress"`` \| ``"onProgressCapture"`` \| ``"onRateChange"`` \| ``"onRateChangeCapture"`` \| ``"onSeeked"`` \| ``"onSeekedCapture"`` \| ``"onSeeking"`` \| ``"onSeekingCapture"`` \| ``"onStalled"`` \| ``"onStalledCapture"`` \| ``"onSuspend"`` \| ``"onSuspendCapture"`` \| ``"onTimeUpdate"`` \| ``"onTimeUpdateCapture"`` \| ``"onVolumeChange"`` \| ``"onVolumeChangeCapture"`` \| ``"onWaiting"`` \| ``"onWaitingCapture"`` \| ``"onAuxClick"`` \| ``"onAuxClickCapture"`` \| ``"onClick"`` \| ``"onClickCapture"`` \| ``"onContextMenu"`` \| ``"onContextMenuCapture"`` \| ``"onDoubleClick"`` \| ``"onDoubleClickCapture"`` \| ``"onDrag"`` \| ``"onDragCapture"`` \| ``"onDragEnd"`` \| ``"onDragEndCapture"`` \| ``"onDragEnter"`` \| ``"onDragEnterCapture"`` \| ``"onDragExit"`` \| ``"onDragExitCapture"`` \| ``"onDragLeave"`` \| ``"onDragLeaveCapture"`` \| ``"onDragOver"`` \| ``"onDragOverCapture"`` \| ``"onDragStart"`` \| ``"onDragStartCapture"`` \| ``"onDrop"`` \| ``"onDropCapture"`` \| ``"onMouseDown"`` \| ``"onMouseDownCapture"`` \| ``"onMouseEnter"`` \| ``"onMouseLeave"`` \| ``"onMouseMove"`` \| ``"onMouseMoveCapture"`` \| ``"onMouseOut"`` \| ``"onMouseOutCapture"`` \| ``"onMouseOver"`` \| ``"onMouseOverCapture"`` \| ``"onMouseUp"`` \| ``"onMouseUpCapture"`` \| ``"onSelect"`` \| ``"onSelectCapture"`` \| ``"onTouchCancel"`` \| ``"onTouchCancelCapture"`` \| ``"onTouchEnd"`` \| ``"onTouchEndCapture"`` \| ``"onTouchMove"`` \| ``"onTouchMoveCapture"`` \| ``"onTouchStart"`` \| ``"onTouchStartCapture"`` \| ``"onPointerDown"`` \| ``"onPointerDownCapture"`` \| ``"onPointerMove"`` \| ``"onPointerMoveCapture"`` \| ``"onPointerUp"`` \| ``"onPointerUpCapture"`` \| ``"onPointerCancel"`` \| ``"onPointerCancelCapture"`` \| ``"onPointerEnter"`` \| ``"onPointerEnterCapture"`` \| ``"onPointerLeave"`` \| ``"onPointerLeaveCapture"`` \| ``"onPointerOver"`` \| ``"onPointerOverCapture"`` \| ``"onPointerOut"`` \| ``"onPointerOutCapture"`` \| ``"onGotPointerCapture"`` \| ``"onGotPointerCaptureCapture"`` \| ``"onLostPointerCapture"`` \| ``"onLostPointerCaptureCapture"`` \| ``"onScroll"`` \| ``"onScrollCapture"`` \| ``"onWheel"`` \| ``"onWheelCapture"`` \| ``"onAnimationStart"`` \| ``"onAnimationStartCapture"`` \| ``"onAnimationEnd"`` \| ``"onAnimationEndCapture"`` \| ``"onAnimationIteration"`` \| ``"onAnimationIterationCapture"`` \| ``"onTransitionEnd"`` \| ``"onTransitionEndCapture"`` \| ``"css"`` \| ``"key"`` \| ``"closeDelay"`` \| ``"anchorEl"`` \| ``"container"`` \| ``"defaultOpen"`` \| ``"disablePortal"`` \| ``"openDelay"`` \| ``"openNextDelay"`` \| ``"hideOverlay"`` \| ``"keepMounted"`` \| ``"onClose"`` \| ``"onOpen"`` \| ``"offset"`` \| ``"placement"`` \| ``"popperModifiers"`` \| ``"popperOptions"`` \| ``"menu"`` \| ``"disableClick"`` \| ``"enablePortal"`` \| ``"icon"`` \| ``"listenHover"`` \| ``"mergeEffect"`` \| ``"shadow"``\> & {}

Menu Popover props

___

### onClose

• `Optional` **onClose**: () => `void`

#### Type declaration

▸ (): `void`

`onClose` trigger function for when the calendar popover closes

##### Returns

`void`

___

### onOpen

• `Optional` **onOpen**: () => `void`

#### Type declaration

▸ (): `void`

`onOpen` trigger function for when the calendar popover opens

##### Returns

`void`

___

### placement

• `Optional` **placement**: ``"bottom-end"`` \| ``"bottom-start"`` \| ``"bottom"`` \| ``"left-end"`` \| ``"left-start"`` \| ``"left"`` \| ``"right-end"`` \| ``"right-start"`` \| ``"right"`` \| ``"top-end"`` \| ``"top-start"`` \| ``"top"``

Placement of the sub menu

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the component

#### Inherited from

MenuProps.shape

___

### width

• `Optional` **width**: `string`

Width override for ListWrapper
Can be given a token (such as `size_128`) or other value (like `15rem`)

#### Inherited from

MenuProps.width

## Methods

### renderItem

▸ `Optional` **renderItem**(`props`, `ref?`): `ForwardRefExoticComponent`<`MenuItemProps`\>

List item to render

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `MenuItemProps` |
| `ref?` | `Ref`<`any`\> |

#### Returns

`ForwardRefExoticComponent`<`MenuItemProps`\>

#### Inherited from

MenuProps.renderItem
