# @lowes-tech/bds-react/ModalController

## Interfaces

- [ModalControllerContextValues](interfaces/ModalControllerContextValues.md)
- [ModalControllerProps](interfaces/ModalControllerProps.md)
- [ModalControllerProviderProps](interfaces/ModalControllerProviderProps.md)
- [ModalHandlerProps](interfaces/ModalHandlerProps.md)

## References

### default

Renames and re-exports [ModalController](README.md#modalcontroller)

## Type aliases

### ModalControllerRef

Ƭ **ModalControllerRef**: [`ModalHandlerRef`](README.md#modalhandlerref)

___

### ModalHandlerRef

Ƭ **ModalHandlerRef**: `HTMLDivElement`

## Variables

### ModalController

• **ModalController**: `BDSForwardRef`<[`ModalControllerProps`](interfaces/ModalControllerProps.md)\>

Backyard React Modal Controller

Extends from `ModalHandler` to offer and cleaner API to work with

Controls modal defined in `modal` prop with basic closing/opening handling

For more API controls integrated with this HOC, see `ModalHandler`

Example:
 <ModalController
     modal={(
         <Modal>
             <ModalHeader ... />
             <ModalBody ... />
             <ModalFooter ... />
         </Modal>
     )}
 />

___

### ModalControllerConsumer

• **ModalControllerConsumer**: `Consumer`<[`ModalControllerContextValues`](interfaces/ModalControllerContextValues.md)\> = `ModalControllerContext.Consumer`

___

### ModalControllerContext

• **ModalControllerContext**: `Context`<[`ModalControllerContextValues`](interfaces/ModalControllerContextValues.md)\>

___

### ModalHandler

• **ModalHandler**: `BDSForwardRef`<[`ModalHandlerProps`](interfaces/ModalHandlerProps.md)\>

Backyard React Modal Handler

This component is used to extend the higher ordered component `ModalController`
Abstracts some of the complexity for future extending, if needed

Heavily influenced by Material UI's Modal Component

**`see`** https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Modal/Modal.js

## Functions

### ModalControllerProvider

▸ `Const` **ModalControllerProvider**(`props`): `ReactElement`<[`ModalControllerProviderProps`](interfaces/ModalControllerProviderProps.md), `string` \| `JSXElementConstructor`<`any`\>\>

`ModalControllerProvider` Backyard React

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ModalControllerProviderProps`](interfaces/ModalControllerProviderProps.md) | Modal props |

#### Returns

`ReactElement`<[`ModalControllerProviderProps`](interfaces/ModalControllerProviderProps.md), `string` \| `JSXElementConstructor`<`any`\>\>

___

### useModalController

▸ `Const` **useModalController**(): [`ModalControllerContextValues`](interfaces/ModalControllerContextValues.md)

#### Returns

[`ModalControllerContextValues`](interfaces/ModalControllerContextValues.md)
