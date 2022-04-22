import * as React from 'react'
import classNames from 'classnames'

import MenuItem from '../MenuItem'
import type { MenuItemProps } from '../MenuItem'
import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import MenuWrapper from './styles/MenuWrapper'

/**
 * Backyard React Menu
 *
 * `Menu` provides a customized component for triggering actions from a list of items (aka. `MenuItem`s).
 *
 * This component does not trigger a popover from an action on another component.
 * For that functionality, please see `MenuPopover`.
 *
 * For a list that provides the user the ability to select from a list of options, please use `List`.
 *
 * Example:
 * ```
 *  <Menu>
 *      <MenuItem
 *          iconBefore={<Home />}
 *      >
 *          Home
 *      </MenuItem>
 *      <MenuItem
 *          iconBefore={<CreditCard />}
 *      >
 *          Payment Methods
 *      </MenuItem>
 *      <MenuItem>
 *          No Icon Needed
 *      </MenuItem>
 *      <MenuItem
 *          disabled
 *          iconBefore={<Download />}
 *      >
 *          Download
 *      </MenuItem>
 *      <MenuItem
 *          variant="primary"
 *          color="error"
 *          iconBefore={<Home />}
 *          onClick={() => alert('You clicked on me!')}
 *      >
 *          Alert
 *      </MenuItem>
 *  </Menu>
 * ```
 */
const Menu: BDSForwardRef<MenuProps> = React.forwardRef<MenuRef, MenuProps>(function Menu(
    {
        children,
        className,
        id,
        items,
        label = 'Menu',
        shape: shapeProp, // = 'rounded',
        // eslint-disable-next-line no-shadow
        renderItem = (props, ref = null) => {
            return <MenuItem {...props} ref={ref} />
        },
        width = 'auto',
        height = 'auto',
        style: styleProp,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'Menu',
    })

    // Get shape context from theme
    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    // Map items/children
    const menu = items
        ? // Map items if given,
          items.map((item, index) => renderItem({ key: index, ...item } as MenuItemProps))
        : // Else declaratively use children
          React.Children.map(children, (child) =>
              React.isValidElement(child) ? React.cloneElement(child) : child,
          )

    const style = React.useMemo(
        () => ({
            '--style-menu-width': theme.sizes[width] || width,
            '--style-menu-height': theme.sizes[height] || height,
        }),
        [theme, width, height, styleProp],
    )

    /**
     * Layout:
     *
     *  <div>
     *      <ul>
     *          ...
     *      </ul>
     *  </div>
     */
    return (
        <MenuWrapper
            id={id}
            aria-label={label}
            role="menu"
            className={classNames('menu', `shape--${shape}`, className)}
            style={style}
            {...props}
            ref={ref}
        >
            <ul className={classNames('menu-list')}>{menu}</ul>
        </MenuWrapper>
    )
})

type MenuRef = HTMLUListElement

interface MenuProps extends BackyardBaseProps<MenuRef> {
    /**
     * Children of menu
     * Optionally, `items` can be given a list data structure instead
     */
    children?: React.ReactNode
    /**
     * Shape of the component
     */
    shape?: 'rounded' | 'squared'
    /**
     * Menu Items to use if data list is provided instead of declarative children
     */
    items?: MenuItemProps[]
    /**
     * List item to render
     */
    renderItem?: (
        props: MenuItemProps,
        ref?: React.Ref<any>,
    ) => React.ForwardRefExoticComponent<MenuItemProps>
    /**
     * Width override for ListWrapper
     * Can be given a token (such as `size_128`) or other value (like `15rem`)
     */
    width?: keyof BackyardToken['sizes'] | string
}

Menu.bdsName = 'Menu'

export { Menu }

export type { MenuProps, MenuRef }

export default Menu
