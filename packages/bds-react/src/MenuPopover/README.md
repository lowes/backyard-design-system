# @lowes-tech/bds-react/MenuPopover

## Interfaces

- [MenuPopoverProps](interfaces/MenuPopoverProps.md)
- [SubMenuProps](interfaces/SubMenuProps.md)

## References

### default

Renames and re-exports [MenuPopover](README.md#menupopover)

## Type aliases

### MenuPopoverRef

Ƭ **MenuPopoverRef**: `PopoverRef`

___

### SubMenuRef

Ƭ **SubMenuRef**: `MenuRef`

## Variables

### MenuPopover

• **MenuPopover**: `BDSForwardRef`<[`MenuPopoverProps`](interfaces/MenuPopoverProps.md)\>

Backyard React Menu Popover

`MenuPopover` provides the developer a simple way to anchor a `Menu` to a child and
listen for the user to click or hover over the anchor for the `Menu` to popover.

Put the `Menu` in the required `menu` prop that you want to pop over.

By default the portal of a menu is disabled for SEO considerations. If the portal needs
to be enabled for the menu to get portaled to the root DOM, use the `enablePortal` flag.

The opened or closed states can be controlled remotely from the anchor through the `open` prop.

For many sub menus to pop over within menus, a `SubMenu` that extends `MenuPopover` is provided to make
deep menus even simpler to handle. You only need one root `MenuPopover` that all child `SubMenu`s listen to.

Example:
```
 <Grid.Column sm={12} md={8} lg={6} xl={6}>
     <MenuPopover
         onOpen={action('onOpen')}
         onClose={action('onClose')}
         menu={(
             <Menu>
                 <MenuItem
                     iconBefore={<Home />}
                 >
                     Home
                 </MenuItem>
                 <SubMenu label="Options">
                     <MenuItem>Level Two - One</MenuItem>
                     <SubMenu label="Level Two - Next">
                         <MenuItem>Item 3-1</MenuItem>
                         <MenuItem>Item 3-2</MenuItem>
                         <SubMenu label="Item 3-3">
                             <MenuItem>Item 4-1</MenuItem>
                             <MenuItem>Item 4-2</MenuItem>
                         </SubMenu>
                         <SubMenu label="Item 3-4">
                             <MenuItem>Item 4-1</MenuItem>
                             <MenuItem>Item 4-2</MenuItem>
                             <MenuItem>Item 4-3</MenuItem>
                             <MenuItem>Item 4-4</MenuItem>
                             <MenuItem>Item 4-5</MenuItem>
                             <MenuItem>Item 4-6</MenuItem>
                         </SubMenu>
                         <MenuItem>Item 3-5</MenuItem>
                     </SubMenu>
                     <MenuItem>Level Two - Three</MenuItem>
                     <MenuItem>Level Two - Four</MenuItem>
                 </SubMenu>
                 <MenuItem
                     disabled
                     iconBefore={<Download />}
                 >
                     Download
                 </MenuItem>
                 <MenuItem
                     variant="primary"
                     color="error"
                     onClick={() => alert('You clicked me!')}
                 >
                     Alert
                 </MenuItem>
             </Menu>
         )}
     >
         <IconButton
             variant="ghost"
             color="subtle"
             size="small"
         >
             <Dots />
         </IconButton>
     </MenuPopover>
 </Grid.Column>
```

___

### SubMenu

• **SubMenu**: `BDSForwardRef`<[`SubMenuProps`](interfaces/SubMenuProps.md)\>

Backyard React Sub Menu

`SubMenu` extends both `Menu` and `MenuPopover` to provide a simple way to make a
functional deep menu for a user to navigate.

`SubMenu` will use `disableClick` and `listenHover` from the outer most `MenuPopover` ancestor.

Example:
```
 <Grid.Column sm={12} md={8} lg={6} xl={6}>
     <MenuPopover
         onOpen={action('onOpen')}
         onClose={action('onClose')}
         menu={(
             <Menu>
                 <MenuItem
                     iconBefore={<Home />}
                 >
                     Home
                 </MenuItem>
                 <SubMenu label="Options">
                     <MenuItem>Level Two - One</MenuItem>
                     <SubMenu label="Level Two - Next">
                         <MenuItem>Item 3-1</MenuItem>
                         <MenuItem>Item 3-2</MenuItem>
                         <SubMenu label="Item 3-3">
                             <MenuItem>Item 4-1</MenuItem>
                             <MenuItem>Item 4-2</MenuItem>
                         </SubMenu>
                         <SubMenu label="Item 3-4">
                             <MenuItem>Item 4-1</MenuItem>
                             <MenuItem>Item 4-2</MenuItem>
                             <MenuItem>Item 4-3</MenuItem>
                             <MenuItem>Item 4-4</MenuItem>
                             <MenuItem>Item 4-5</MenuItem>
                             <MenuItem>Item 4-6</MenuItem>
                         </SubMenu>
                         <MenuItem>Item 3-5</MenuItem>
                     </SubMenu>
                     <MenuItem>Level Two - Three</MenuItem>
                     <MenuItem>Level Two - Four</MenuItem>
                 </SubMenu>
                 <MenuItem
                     disabled
                     iconBefore={<Download />}
                 >
                     Download
                 </MenuItem>
                 <MenuItem
                     variant="primary"
                     color="error"
                     onClick={() => alert('You clicked me!')}
                 >
                     Alert
                 </MenuItem>
             </Menu>
         )}
     >
         <IconButton
             variant="ghost"
             color="subtle"
             size="small"
         >
             <Dots />
         </IconButton>
     </MenuPopover>
 </Grid.Column>
```
