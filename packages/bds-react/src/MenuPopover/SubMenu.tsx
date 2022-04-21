import * as React from 'react'
import classNames from 'classnames'

import ChevronRight from '@lowes-tech/bds-icons/ChevronRight'

import MenuItem from '../MenuItem'
import type { MenuItemProps } from '../MenuItem'
import MenuPopover from './MenuPopover'
import type { MenuPopoverProps } from './MenuPopover'
import Menu from '../Menu'
import type { MenuProps, MenuRef } from '../Menu'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

/**
 * Backyard React Sub Menu
 *
 * `SubMenu` extends both `Menu` and `MenuPopover` to provide a simple way to make a
 * functional deep menu for a user to navigate.
 *
 * `SubMenu` will use `disableClick` and `listenHover` from the outer most `MenuPopover` ancestor.
 *
 * Example:
 * ```
 *  <Grid.Column sm={12} md={8} lg={6} xl={6}>
 *      <MenuPopover
 *          onOpen={action('onOpen')}
 *          onClose={action('onClose')}
 *          menu={(
 *              <Menu>
 *                  <MenuItem
 *                      iconBefore={<Home />}
 *                  >
 *                      Home
 *                  </MenuItem>
 *                  <SubMenu label="Options">
 *                      <MenuItem>Level Two - One</MenuItem>
 *                      <SubMenu label="Level Two - Next">
 *                          <MenuItem>Item 3-1</MenuItem>
 *                          <MenuItem>Item 3-2</MenuItem>
 *                          <SubMenu label="Item 3-3">
 *                              <MenuItem>Item 4-1</MenuItem>
 *                              <MenuItem>Item 4-2</MenuItem>
 *                          </SubMenu>
 *                          <SubMenu label="Item 3-4">
 *                              <MenuItem>Item 4-1</MenuItem>
 *                              <MenuItem>Item 4-2</MenuItem>
 *                              <MenuItem>Item 4-3</MenuItem>
 *                              <MenuItem>Item 4-4</MenuItem>
 *                              <MenuItem>Item 4-5</MenuItem>
 *                              <MenuItem>Item 4-6</MenuItem>
 *                          </SubMenu>
 *                          <MenuItem>Item 3-5</MenuItem>
 *                      </SubMenu>
 *                      <MenuItem>Level Two - Three</MenuItem>
 *                      <MenuItem>Level Two - Four</MenuItem>
 *                  </SubMenu>
 *                  <MenuItem
 *                      disabled
 *                      iconBefore={<Download />}
 *                  >
 *                      Download
 *                  </MenuItem>
 *                  <MenuItem
 *                      variant="primary"
 *                      color="error"
 *                      onClick={() => alert('You clicked me!')}
 *                  >
 *                      Alert
 *                  </MenuItem>
 *              </Menu>
 *          )}
 *      >
 *          <IconButton
 *              variant="ghost"
 *              color="subtle"
 *              size="small"
 *          >
 *              <Dots />
 *          </IconButton>
 *      </MenuPopover>
 *  </Grid.Column>
 * ```
 */
const SubMenu: BDSForwardRef<SubMenuProps> = React.forwardRef<SubMenuRef, SubMenuProps>(
    function SubMenu(
        {
            children,
            className,
            id,
            items,
            label,
            menuItemProps = {},
            menuPopoverProps = {},
            listenHover,
            // eslint-disable-next-line no-shadow
            renderItem = (props, ref = null) => {
                return <MenuItem {...props} ref={ref} />
            },
            open = false,
            onOpen,
            onClose,
            placement = 'right-start',
            shape, // = 'rounded',
            ...props
        },
        ref,
    ) {
        // Map items/children
        const menu = items
            ? // Map items if given,
              items.map((item, index) => renderItem({ key: index, ...item } as MenuItemProps))
            : // Else declaratively use children
              children

        /**
         * Layout:
         * ```
         *  <ul>
         *      ...
         *  </ul>
         * ```
         */
        return (
            <MenuPopover
                open={open}
                placement={placement}
                onOpen={onOpen}
                onClose={onClose}
                shape={shape}
                listenHover={listenHover}
                {...menuPopoverProps}
                className={classNames('submenu-popover', menuPopoverProps.className)}
                menu={
                    <Menu
                        className={classNames('submenu', className)}
                        shape={shape}
                        {...props}
                        ref={ref}
                    >
                        {menu}
                    </Menu>
                }
            >
                <MenuItem
                    iconAfter={<ChevronRight />}
                    {...menuItemProps}
                    className={classNames('submenu-reference', menuItemProps.className)}
                >
                    {label}
                </MenuItem>
            </MenuPopover>
        )
    },
)

type SubMenuRef = MenuRef

interface SubMenuProps extends MenuProps {
    /**
     * Label to display in main menu for the sub menu
     */
    label: string
    /**
     * Menu Item Props to extend menu item with if needed
     */
    menuItemProps?: React.PropsWithRef<MenuItemProps>
    /**
     * Menu Popover props
     */
    menuPopoverProps?: React.PropsWithRef<MenuPopoverProps>
    /**
     * Whether or not submenu will listen to hover events
     */
    listenHover?: MenuPopoverProps['listenHover']
    /**
     * `onOpen` handler for popover
     */
    onOpen?: MenuPopoverProps['onOpen']
    /**
     * `onClose` handler for popover
     */
    onClose?: MenuPopoverProps['onClose']
    /**
     * Placement of the sub menu
     */
    placement?: MenuPopoverProps['placement']
}

SubMenu.bdsName = 'SubMenu'

export { SubMenu }

export type { SubMenuProps, SubMenuRef }

export default SubMenu
