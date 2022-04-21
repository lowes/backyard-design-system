import * as React from 'react'
import classNames from 'classnames'

import Button from '../Button'
import useBackyardTheme from '../ThemeProvider/useBackyardTheme'
import type { ButtonRef, ButtonProps } from '../Button'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import MenuItemWrapper from './styles/MenuItemWrapper'

/**
 * Backyard React Menu Item
 *
 * `MenuItem` provides an item for the user to trigger an action with via `Menu`.
 *
 * Example:
 * ```
 *  <MenuItem
 *      iconBefore={<Home />}
 *  >
 *      Home
 *  </MenuItem>
 * ```
 */
const MenuItem: BDSForwardRef<MenuItemProps> = React.forwardRef<MenuItemRef, MenuItemProps>(
    function MenuItem(
        {
            children,
            className,
            color = 'neutral',
            component: Component = Button as any,
            disabled = false,
            label,
            selected: selectedProp = false,
            iconBefore: iconBeforeProp,
            iconAfter: iconAfterProp,
            variant = 'ghost',
            size = 'small',
            onClick,
            style: styleProp,
            ...props
        },
        ref,
    ) {
        // Get theme
        const theme = useBackyardTheme()

        // Hold whether or not the item was selected
        const [selected, setSelected] = React.useState(selectedProp)

        // If icon before prop defined,
        const iconBefore = iconBeforeProp
            ? // Clone icon with className
              React.cloneElement(iconBeforeProp, {
                  className: 'menu-item-icon-before',
              })
            : // Else, no icon before
              null
        // If icon after prop defined,
        const iconAfter = iconAfterProp
            ? // Clone icon with className
              React.cloneElement(iconAfterProp, {
                  className: 'menu-item-icon-after',
              })
            : // Else, no icon after
              null

        /**
         * Handles when the user clicks on the menu item.
         *
         * @param event - click event
         */
        const handleClick = (event: React.MouseEvent) => {
            setSelected(true)

            if (onClick) {
                onClick(event)
            }
        }

        // Memoize style props and css vars
        const style = React.useMemo(
            () => ({
                '--style-menu-item-font-family': theme.font.family[theme.context.font],
                ...styleProp,
            }),
            [theme, styleProp],
        )

        /**
         * Layout:
         * ```
         *  <li>
         *      <Button>
         *          <icon before />
         *          <span>...</span>
         *          <icon after />
         *      </Button>
         *  <li>
         * ```
         */
        return (
            <MenuItemWrapper>
                <Component
                    className={classNames(
                        'menu-item',
                        {
                            disabled,
                            selected,
                        },
                        className,
                    )}
                    disabled={disabled}
                    variant={variant}
                    color={color}
                    size={size}
                    role="menuitem"
                    onClick={handleClick}
                    style={style}
                    {...props}
                    ref={ref}
                >
                    {iconBefore || null}
                    <span className="menu-item-label">{label || children}</span>
                    {iconAfter || null}
                </Component>
            </MenuItemWrapper>
        )
    },
)

type MenuItemRef = ButtonRef

interface MenuItemProps extends ButtonProps {
    /**
     * Component wrapper of the menu item
     * Can be an HTML tag (`li`) or component
     */
    component?: React.ComponentClass
    /**
     * Whether or not the menu item is disabled for selecting
     */
    disabled?: boolean
    /**
     * Label of the menu item
     * uses `children` if not defined
     */
    label?: string
    /**
     * Icon Component before to place in menu item
     */
    iconBefore?: React.ReactElement
    /**
     * Icon Component before to place in menu item
     */
    iconAfter?: React.ReactElement
    /**
     * Whether or not the menu item is selected
     */
    selected?: boolean
    /**
     * Value of menu item
     */
    value?: string
}

MenuItem.bdsName = 'MenuItem'

export { MenuItem }

export { MenuItemProps, MenuItemRef }

export default MenuItem
