# Interface: ModalHandlerProps

## Hierarchy

- `BackyardBaseProps`<[`ModalHandlerRef`](../README.md#modalhandlerref)\>

  ↳ **`ModalHandlerProps`**

## Properties

### OverlayComponent

• `Optional` **OverlayComponent**: `ElementType`<`any`\>

Overlay component to display behind modal

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### children

• `Optional` **children**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Children

#### Overrides

BackyardBaseProps.children

___

### container

• `Optional` **container**: `ReactInstance`

Container object or function of modal to display

___

### disableAutoFocus

• `Optional` **disableAutoFocus**: `boolean`

Whether or not browser will auto focus on modal

___

### disableEnforceFocus

• `Optional` **disableEnforceFocus**: `boolean`

Whether or not modal enforces focus (traps)

___

### disableEscapeKeyDown

• `Optional` **disableEscapeKeyDown**: `boolean`

Whether or not escape key listener is active

___

### disableOverlayClick

• `Optional` **disableOverlayClick**: `boolean`

Whether or not overlay click listener is active

___

### disablePortal

• `Optional` **disablePortal**: `boolean`

Whether or not portal is used to bring modal to root DOM

___

### disableRestoreFocus

• `Optional` **disableRestoreFocus**: `boolean`

Whether or not modal restores focus

___

### disableScrollLock

• `Optional` **disableScrollLock**: `boolean`

Whether or not scroll lock is disabled

___

### hideOverlay

• `Optional` **hideOverlay**: `boolean`

Whether or not overlay is hidden

___

### keepMounted

• `Optional` **keepMounted**: `boolean`

Whether or not modal continues to be mounted when closed
Useful for certain SEO conditions

___

### manager

• `Optional` **manager**: `any`

Class that manages modal state and properties

___

### open

• **open**: `boolean`

Whether or not modal is open

#### Overrides

BackyardBaseProps.open

___

### overlayProps

• `Optional` **overlayProps**: `OverlayProps`

Props to extend overlay component with
Useful if the `style` prop needs to be different

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

___

### onOpen

▸ `Optional` **onOpen**(): `void`

`onOpen` trigger function, when modal is closed

#### Returns

`void`

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

___

### onRendered

▸ `Optional` **onRendered**(): `void`

`onRendered` trigger function, when modal is closed

#### Returns

`void`
