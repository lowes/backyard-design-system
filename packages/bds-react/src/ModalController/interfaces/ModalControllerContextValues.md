# Interface: ModalControllerContextValues

## Hierarchy

- [`ModalControllerProviderProps`](ModalControllerProviderProps.md)

- `Record`<`string`, `any`\>

  ↳ **`ModalControllerContextValues`**

## Properties

### OverlayComponent

• `Optional` **OverlayComponent**: `ElementType`<`any`\>

Overlay component to display behind modal

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[OverlayComponent](ModalControllerProviderProps.md#overlaycomponent)

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[as](ModalControllerProviderProps.md#as)

___

### children

• `Optional` **children**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Children

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[children](ModalControllerProviderProps.md#children)

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[className](ModalControllerProviderProps.md#classname)

___

### container

• `Optional` **container**: `ReactInstance`

Container object or function of modal to display

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[container](ModalControllerProviderProps.md#container)

___

### context

• `Optional` **context**: `Record`<`string`, `any`\>

Props to provide context for

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[context](ModalControllerProviderProps.md#context)

___

### disableAutoFocus

• `Optional` **disableAutoFocus**: `boolean`

Whether or not browser will auto focus on modal

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[disableAutoFocus](ModalControllerProviderProps.md#disableautofocus)

___

### disableEnforceFocus

• `Optional` **disableEnforceFocus**: `boolean`

Whether or not modal enforces focus (traps)

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[disableEnforceFocus](ModalControllerProviderProps.md#disableenforcefocus)

___

### disableEscapeKeyDown

• `Optional` **disableEscapeKeyDown**: `boolean`

Whether or not escape key listener is active

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[disableEscapeKeyDown](ModalControllerProviderProps.md#disableescapekeydown)

___

### disableOverlayClick

• `Optional` **disableOverlayClick**: `boolean`

Whether or not overlay click listener is active

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[disableOverlayClick](ModalControllerProviderProps.md#disableoverlayclick)

___

### disablePortal

• `Optional` **disablePortal**: `boolean`

Whether or not portal is used to bring modal to root DOM

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[disablePortal](ModalControllerProviderProps.md#disableportal)

___

### disableRestoreFocus

• `Optional` **disableRestoreFocus**: `boolean`

Whether or not modal restores focus

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[disableRestoreFocus](ModalControllerProviderProps.md#disablerestorefocus)

___

### disableScrollLock

• `Optional` **disableScrollLock**: `boolean`

Whether or not scroll lock is disabled

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[disableScrollLock](ModalControllerProviderProps.md#disablescrolllock)

___

### hideOverlay

• `Optional` **hideOverlay**: `boolean`

Whether or not overlay is hidden

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[hideOverlay](ModalControllerProviderProps.md#hideoverlay)

___

### keepMounted

• `Optional` **keepMounted**: `boolean`

Whether or not modal continues to be mounted when closed
Useful for certain SEO conditions

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[keepMounted](ModalControllerProviderProps.md#keepmounted)

___

### manager

• `Optional` **manager**: `any`

Class that manages modal state and properties

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[manager](ModalControllerProviderProps.md#manager)

___

### modalStyle

• `Optional` **modalStyle**: `CSSProperties`

Style of the modal

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[modalStyle](ModalControllerProviderProps.md#modalstyle)

___

### open

• `Optional` **open**: `boolean`

Whether or not modal is open

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[open](ModalControllerProviderProps.md#open)

___

### overlayProps

• `Optional` **overlayProps**: `OverlayProps`

Props to extend overlay component with
Useful if the `style` prop needs to be different

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[overlayProps](ModalControllerProviderProps.md#overlayprops)

___

### override

• `Optional` **override**: `Record`<`string`, `any`\>

Props to override children with

#### Overrides

[ModalControllerProviderProps](ModalControllerProviderProps.md).[override](ModalControllerProviderProps.md#override)

___

### position

• `Optional` **position**: `CSSProperties`

Position of modal on page

**`default`** 'center of page'

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[position](ModalControllerProviderProps.md#position)

___

### style

• `Optional` **style**: `CSSProperties`

Style of modal controller

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[style](ModalControllerProviderProps.md#style)

## Methods

### onClose

▸ `Optional` **onClose**(`event?`, `name?`): `void`

`onClose` trigger function, when modal is closed

**`argument`** {Event} event - DOM event

**`argument`** {string} name - Name of event fired that caused modal to close

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `ModalHandlerEvent` |
| `name?` | `string` |

#### Returns

`void`

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[onClose](ModalControllerProviderProps.md#onclose)

___

### onEscapeKeyDown

▸ `Optional` **onEscapeKeyDown**(`event`): `void`

`onEscapeKeyDown` trigger function, when escape key is pressed while modal is active

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`Element`\> |

#### Returns

`void`

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[onEscapeKeyDown](ModalControllerProviderProps.md#onescapekeydown)

___

### onOpen

▸ `Optional` **onOpen**(): `void`

`onOpen` trigger function, when modal is closed

#### Returns

`void`

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[onOpen](ModalControllerProviderProps.md#onopen)

___

### onOverlayClick

▸ `Optional` **onOverlayClick**(`event`): `void`

`onOverlayClick` trigger function, when overlay is clicked

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[onOverlayClick](ModalControllerProviderProps.md#onoverlayclick)

___

### onRendered

▸ `Optional` **onRendered**(): `void`

`onRendered` trigger function, when modal is closed

#### Returns

`void`

#### Inherited from

[ModalControllerProviderProps](ModalControllerProviderProps.md).[onRendered](ModalControllerProviderProps.md#onrendered)
