# @lowes-tech/bds-react/DrawerController

## Interfaces

- [DrawerControllerProps](interfaces/DrawerControllerProps.md)

## References

### default

Renames and re-exports [DrawerController](README.md#drawercontroller)

## Type aliases

### DrawerControllerRef

Ƭ **DrawerControllerRef**: `ModalControllerRef`

## Variables

### DrawerController

• **DrawerController**: `BDSForwardRef`<[`DrawerControllerProps`](interfaces/DrawerControllerProps.md)\>

Backyard React Drawer Controller

Extends from `DrawerHandler` to offer and cleaner API to work with

Controls drawer defined in `drawer` prop with basic closing/opening handling

For more API controls integrated with this HOC, see `DrawerHandler`

Example:
 <DrawerController
     drawer={(
         <Drawer>
             <DrawerHeader ... />
             <DrawerBody ... />
             <DrawerFooter ... />
         </Drawer>
     )}
 />

## Functions

### useDrawerController

▸ `Const` **useDrawerController**(): `DrawerControllerContextValues`

#### Returns

`DrawerControllerContextValues`
