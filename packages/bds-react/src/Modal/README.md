# @lowes-tech/bds-react/Modal

## Interfaces

- [ModalBodyProps](interfaces/ModalBodyProps.md)
- [ModalContextValues](interfaces/ModalContextValues.md)
- [ModalFooterProps](interfaces/ModalFooterProps.md)
- [ModalHeaderProps](interfaces/ModalHeaderProps.md)
- [ModalProps](interfaces/ModalProps.md)
- [ModalProviderProps](interfaces/ModalProviderProps.md)

## References

### default

Renames and re-exports [Modal](README.md#modal)

## Type aliases

### ModalBodyRef

Ƭ **ModalBodyRef**: `TypographyRef`

___

### ModalFooterRef

Ƭ **ModalFooterRef**: `HTMLDivElement`

___

### ModalHeaderRef

Ƭ **ModalHeaderRef**: `HTMLDivElement`

___

### ModalRef

Ƭ **ModalRef**: `HTMLDivElement`

## Variables

### Modal

• **Modal**: `BDSForwardRef`<[`ModalProps`](interfaces/ModalProps.md)\>

Backyard React Modal

Barebones modal component for styling and handling if extended

This component contains only the styling for the modal component, not the logic for handling displaying the modal

The children of this component should be one of the three included modal components:

 1) `ModalHeader` (Required) - for the header of the component,
     containing the label, title, and an icon if desired

 2) `ModalBody` (Required) - for the body of the component,
     containing the body text and any additional components for the modal

 3) `ModalFooter` (Optional) - for the footer of the component,
     if any controls are needed for the modal, such as a 'cancel' button, or an action button

Example:
 <Modal>
     <ModalHeader
         label="Label"
         icon={<Settings />}
     >
         Modal Heading
     </ModalHeader>
     <ModalBody>
         Modal Body
     </ModalBody>
     <ModalFooter>
         <Button
             variant="secondary"
             color="contrast"
         >
             Cancel
         </Button>
         <Button>Action</Button>
     </ModalFooter>
 </Modal>

For controlling this modal, or any other custom modal, use `ModalController`

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

### ModalBody

• **ModalBody**: `BDSForwardRef`<[`ModalBodyProps`](interfaces/ModalBodyProps.md)\>

Backyard React Modal Body

Component to use as a child of `Modal`

Contains the body text of the modal, and any components or other HTML needed for the body

Should not contain primary interactions such as buttons for cancelling an action or submitting and action
Those primary interactions should be in the `ModalFooter` component

Example:
 <ModalBody>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
     sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
     Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
     ultrices lorem condimentum, nec ullamcorper felis porttitor.
 </ModalBody>

___

### ModalConsumer

• **ModalConsumer**: `Consumer`<[`ModalContextValues`](interfaces/ModalContextValues.md)\> = `ModalContext.Consumer`

___

### ModalContext

• **ModalContext**: `Context`<[`ModalContextValues`](interfaces/ModalContextValues.md)\>

___

### ModalFooter

• **ModalFooter**: `BDSForwardRef`<[`ModalFooterProps`](interfaces/ModalFooterProps.md)\>

Backyard React Modal Footer

Component to use as child of `Modal`

Should contain the primary actions of the modal,
such as a button for cancelling and action or submitting and action

Will automatically space and style children components properly

Example:
 <ModalFooter>
     <Button
         variant="secondary"
         color="contrast"
     >
         Cancel
     </Button>
     <Button>Action</Button>
 </ModalFooter>

___

### ModalHeader

• **ModalHeader**: `BDSForwardRef`<[`ModalHeaderProps`](interfaces/ModalHeaderProps.md)\>

Backyard React Modal Header

Component to use as a child of `Modal`

Should contain the text for the title of the modal

Example:
 <ModalHeader
     label="Label"
     icon={<Settings />}
 >
     Modal Header
 </ModalHeader>

## Functions

### ModalProvider

▸ `Const` **ModalProvider**(`props`): `ReactElement`<[`ModalProviderProps`](interfaces/ModalProviderProps.md), `string` \| `JSXElementConstructor`<`any`\>\>

`ModalProvider` Backyard React

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ModalProviderProps`](interfaces/ModalProviderProps.md) | Modal props |

#### Returns

`ReactElement`<[`ModalProviderProps`](interfaces/ModalProviderProps.md), `string` \| `JSXElementConstructor`<`any`\>\>

___

### useModal

▸ `Const` **useModal**(): [`ModalContextValues`](interfaces/ModalContextValues.md)

#### Returns

[`ModalContextValues`](interfaces/ModalContextValues.md)
