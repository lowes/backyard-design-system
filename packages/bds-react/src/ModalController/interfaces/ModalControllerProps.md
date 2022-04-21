# Interface: ModalControllerProps

## Hierarchy

- `Omit`<[`ModalHandlerProps`](ModalHandlerProps.md), `ModalControllerOverrideProps`\>

  ↳ **`ModalControllerProps`**

## Properties

### OverlayComponent

• `Optional` **OverlayComponent**: `ElementType`<`any`\>

Overlay component to display behind modal

#### Inherited from

Omit.OverlayComponent

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### children

• `Optional` **children**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Children

#### Inherited from

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

Container object or function of modal to display

#### Inherited from

Omit.container

___

### context

• `Optional` **context**: `Record`<`string`, `any`\>

Props to provide context for

___

### disableAutoFocus

• `Optional` **disableAutoFocus**: `boolean`

Whether or not browser will auto focus on modal

#### Inherited from

Omit.disableAutoFocus

___

### disableEnforceFocus

• `Optional` **disableEnforceFocus**: `boolean`

Whether or not modal enforces focus (traps)

#### Inherited from

Omit.disableEnforceFocus

___

### disableEscapeKeyDown

• `Optional` **disableEscapeKeyDown**: `boolean`

Whether or not escape key listener is active

#### Inherited from

Omit.disableEscapeKeyDown

___

### disableOverlayClick

• `Optional` **disableOverlayClick**: `boolean`

Whether or not overlay click listener is active

#### Inherited from

Omit.disableOverlayClick

___

### disablePortal

• `Optional` **disablePortal**: `boolean`

Whether or not portal is used to bring modal to root DOM

#### Inherited from

Omit.disablePortal

___

### disableRestoreFocus

• `Optional` **disableRestoreFocus**: `boolean`

Whether or not modal restores focus

#### Inherited from

Omit.disableRestoreFocus

___

### disableScrollLock

• `Optional` **disableScrollLock**: `boolean`

Whether or not scroll lock is disabled

#### Inherited from

Omit.disableScrollLock

___

### hideOverlay

• `Optional` **hideOverlay**: `boolean`

Whether or not overlay is hidden

#### Inherited from

Omit.hideOverlay

___

### keepMounted

• `Optional` **keepMounted**: `boolean`

Whether or not modal continues to be mounted when closed
Useful for certain SEO conditions

#### Inherited from

Omit.keepMounted

___

### manager

• `Optional` **manager**: `any`

Class that manages modal state and properties

#### Inherited from

Omit.manager

___

### modal

• **modal**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Modal component to control

___

### modalStyle

• `Optional` **modalStyle**: `CSSProperties`

Style of the modal

___

### open

• `Optional` **open**: `boolean`

Whether or not modal is open

___

### overlayProps

• `Optional` **overlayProps**: `OverlayProps`

Props to extend overlay component with
Useful if the `style` prop needs to be different

#### Inherited from

Omit.overlayProps

___

### override

• `Optional` **override**: `Record`<`string`, `any`\>

Props to override children with

___

### position

• `Optional` **position**: `CSSProperties`

Position of modal on page

**`default`** 'center of page'

___

### style

• `Optional` **style**: `CSSProperties`

Style of modal controller

#### Overrides

Omit.style

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

Omit.onClose

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

Omit.onEscapeKeyDown

___

### onOpen

▸ `Optional` **onOpen**(): `void`

`onOpen` trigger function, when modal is closed

#### Returns

`void`

#### Inherited from

Omit.onOpen

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

Omit.onOverlayClick

___

### onRendered

▸ `Optional` **onRendered**(): `void`

`onRendered` trigger function, when modal is closed

#### Returns

`void`

#### Inherited from

Omit.onRendered
