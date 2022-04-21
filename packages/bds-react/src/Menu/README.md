# @lowes-tech/bds-react/Menu

## Interfaces

- [MenuProps](interfaces/MenuProps.md)

## References

### default

Renames and re-exports [Menu](README.md#menu)

## Type aliases

### MenuRef

Ƭ **MenuRef**: `HTMLUListElement`

## Variables

### Menu

• **Menu**: `BDSForwardRef`<[`MenuProps`](interfaces/MenuProps.md)\>

Backyard React Menu

`Menu` provides a customized component for triggering actions from a list of items (aka. `MenuItem`s).

This component does not trigger a popover from an action on another component.
For that functionality, please see `MenuPopover`.

For a list that provides the user the ability to select from a list of options, please use `List`.

Example:
```
 <Menu>
     <MenuItem
         iconBefore={<Home />}
     >
         Home
     </MenuItem>
     <MenuItem
         iconBefore={<CreditCard />}
     >
         Payment Methods
     </MenuItem>
     <MenuItem>
         No Icon Needed
     </MenuItem>
     <MenuItem
         disabled
         iconBefore={<Download />}
     >
         Download
     </MenuItem>
     <MenuItem
         variant="primary"
         color="error"
         iconBefore={<Home />}
         onClick={() => alert('You clicked on me!')}
     >
         Alert
     </MenuItem>
 </Menu>
```
