# @lowes-tech/bds-react/Drawer

## Interfaces

- [DrawerBodyProps](interfaces/DrawerBodyProps.md)
- [DrawerFooterProps](interfaces/DrawerFooterProps.md)
- [DrawerHeaderProps](interfaces/DrawerHeaderProps.md)
- [DrawerProps](interfaces/DrawerProps.md)

## References

### default

Renames and re-exports [Drawer](README.md#drawer)

## Type aliases

### DrawerBodyRef

Ƭ **DrawerBodyRef**: `ModalBodyRef`

___

### DrawerFooterRef

Ƭ **DrawerFooterRef**: `ModalFooterRef`

___

### DrawerHeaderRef

Ƭ **DrawerHeaderRef**: `ModalHeaderRef`

___

### DrawerRef

Ƭ **DrawerRef**: `ModalRef`

## Variables

### Drawer

• **Drawer**: `BDSForwardRef`<[`DrawerProps`](interfaces/DrawerProps.md)\>

Backyard React Drawer

Barebones drawer component for styling and handling if extended

This component contains only the styling for the modal component, not the logic for handling displaying the drawer

The children of this component should be one of the three included modal components:

 1) `DrawerHeader` (Required) - for the header of the component,
     containing the label, title, and an icon if desired

 2) `DrawerBody` (Required) - for the body of the component,
     containing the body text and any additional components for the modal

 3) `DrawerFooter` (Optional) - for the footer of the component,
     if any controls are needed for the modal, such as a 'cancel' button, or an action button

Example:
 <Drawer>
     <DrawerHeader
         icon={<Settings />}
     >
         Modal Heading
     </DrawerHeader>
     <DrawerBody>
         Modal Body
     </DrawerBody>
     <DrawerFooter>
         <Button
             variant="secondary"
             color="contrast"
         >
             Cancel
         </Button>
         <Button>Action</Button>
     </DrawerFooter>
 </Drawer>

For controlling this modal, or any other custom modal, use `ModalController`

 <DrawerController
     modal={(
         <Drawer>
             <DrawerHeader ... />
             <DrawerBody ... />
             <DrawerFooter ... />
         </Drawer>
     )}
 />

___

### DrawerBody

• **DrawerBody**: `BDSForwardRef`<[`DrawerBodyProps`](interfaces/DrawerBodyProps.md)\>

Backyard React Drawer Body

Component to use as a child of `Drawer`

Contains the body text of the drawer, and any components or other HTML needed for the body

Should not contain primary interactions such as buttons for cancelling an action or submitting and action
Those primary interactions should be in the `DrawerFooter` component

Example:
 <DrawerBody>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
     sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
     Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
     ultrices lorem condimentum, nec ullamcorper felis porttitor.
 </DrawerBody>

___

### DrawerFooter

• **DrawerFooter**: `BDSForwardRef`<[`DrawerFooterProps`](interfaces/DrawerFooterProps.md)\>

Backyard React Drawer Footer

Component to use as child of `Drawer`

Should contain the primary actions of the drawer,
such as a button for cancelling and action or submitting and action

Will automatically space and style children components properly

Example:
 <DrawerFooter>
     <Button
         variant="secondary"
         color="contrast"
     >
         Cancel
     </Button>
     <Button>Action</Button>
 </DrawerFooter>

___

### DrawerHeader

• **DrawerHeader**: `BDSForwardRef`<[`DrawerHeaderProps`](interfaces/DrawerHeaderProps.md)\>

Backyard React Drawer Header

Component to use as a child of `Drawer`

Should contain the text for the title of the drawer

Example:
 <DrawerHeader
     icon={<Settings />}
 >
     Drawer Header
 </DrawerHeader>

## Functions

### useDrawer

▸ `Const` **useDrawer**(): `DrawerContextValues`

#### Returns

`DrawerContextValues`
