import * as React from 'react'
import classNames from 'classnames'
import DotsVertical from '@lowes-tech/bds-icons/DotsVertical'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import IconButton from '../IconButton'
import ClickAwayListener from '../ClickAwayListener'
import Popover from '../Popover'
import type { PopoverProps, PopoverRef } from '../Popover'
import useMenuPopover from './useMenuPopover'
import MenuPopoverContext from './MenuPopoverContext'
import MenuPopoverWrapper from './styles/MenuPopoverWrapper'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape, dropShadow } from '../ThemeProvider'
import type { KeyOf } from '../utils/typings'
import type { BackyardTheme } from '../ThemeProvider'

/**
 * Backyard React Menu Popover
 *
 * `MenuPopover` provides the developer a simple way to anchor a `Menu` to a child and
 * listen for the user to click or hover over the anchor for the `Menu` to popover.
 *
 * Put the `Menu` in the required `menu` prop that you want to pop over.
 *
 * By default the portal of a menu is disabled for SEO considerations. If the portal needs
 * to be enabled for the menu to get portaled to the root DOM, use the `enablePortal` flag.
 *
 * The opened or closed states can be controlled remotely from the anchor through the `open` prop.
 *
 * For many sub menus to pop over within menus, a `SubMenu` that extends `MenuPopover` is provided to make
 * deep menus even simpler to handle. You only need one root `MenuPopover` that all child `SubMenu`s listen to.
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
const MenuPopover: BDSForwardRef<MenuPopoverProps> = React.forwardRef<
    MenuPopoverRef,
    MenuPopoverProps
>(function MenuPopover(
    {
        children: childrenProp,
        className,
        disableClick: disableClickProp = false,
        enablePortal = false,
        icon: iconProp,
        listenHover: listenHoverProp,
        closeDelay = 500,
        menu,
        mergeEffect: mergeEffectProp,
        open: openProp = false,
        onOpen,
        onClose,
        placement = 'bottom-start',
        shadow = 'shadow_03',
        shape: shapeProp, // = 'rounded',
        as: asProp = 'div',
        style: styleProp,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'MenuPopover',
    })

    // Get shape from context
    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shapeCalc = getShape(shapeProp, shapeContext)

    // Holds the context of the outermost menu popover ancestor
    const context = useMenuPopover()
    // Holds the native picker ref for the anchor point of the popover
    const childRef = React.useRef<HTMLElement>(null)
    // Hold the delay timeout to interpolate closing popover
    const closeTimeout = React.useRef<NodeJS.Timeout>(null)
    // Holds the current picker element set by the native picker for the anchor
    const [childElement, setChildElement] = React.useState(null)
    // Holds state of whether or not the popover calendar is open
    const [open, setOpen] = React.useState(openProp)

    // Get disableClick/listenHover from context if available or use given prop
    const disableClick =
        typeof context?.disableClick === 'boolean' ? context.disableClick : disableClickProp
    const listenHover =
        typeof context?.listenHover === 'boolean' ? context.listenHover : listenHoverProp
    const mergeEffect =
        typeof context?.mergeEffect === 'boolean' ? context.mergeEffect : mergeEffectProp
    const shape = typeof context?.shape === 'string' ? context.shape : shapeCalc
    const as = typeof context?.as === 'string' ? context.as : asProp

    // Set icon to default if not defined...
    const icon = iconProp || <DotsVertical />

    // Set children to default IconButton if not defined...
    const children = childrenProp || (
        <IconButton variant="ghost" color="neutral" size="small">
            {icon}
        </IconButton>
    )

    /**
     * Opens the menu
     *
     * Triggers `onOpen` if defined
     */
    const openMenu = () => {
        setOpen(true)

        if (onOpen) {
            onOpen()
        }
    }

    /**
     * Closes the menu
     *
     * Triggers `onClose` if defined
     */
    const closeMenu = () => {
        setOpen(false)

        if (onClose) {
            onClose()
        }
    }

    const closeMenuWithDelay = () => {
        if (typeof closeDelay === 'number') {
            closeTimeout.current = setTimeout(closeMenu, closeDelay)
        }
    }

    const keepMenuOpenWithDelay = () => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current)
        }
    }

    /**
     * Toggles the menu open or close
     */
    const toggleMenu = () => (open ? closeMenu() : openMenu())

    // Side effect for when the `open` prop changes externally
    // eslint-disable-next-line consistent-return
    React.useEffect(() => {
        if (openProp !== open) {
            return openProp ? openMenu() : closeMenu()
        }
    }, [openProp])
    // Side effect to update `controlElement` ref
    React.useEffect(() => setChildElement(childRef.current), [childRef])

    const style = React.useMemo(
        () => ({
            // Tooltip drop shadow
            '--style-menu-popover-drop-shadow': dropShadow(theme.shadows[shadow]),
            ...styleProp,
        }),
        [theme, styleProp],
    )

    /**
     * Layout:
     *  <div> // click away listener listens for any click outside of this element
     *      <DatePickerNative />
     *      <Popover> // appears open only on desktop
     *          <CalendarPicker />
     *      </Popover>
     *  </div>
     */
    const popover = (
        <ClickAwayListener onClickAway={closeMenu}>
            <MenuPopoverWrapper
                className={classNames(
                    'menu-popover',
                    `shape--${shape}`,
                    { open, 'merge-popover': mergeEffect },
                    className,
                )}
                onMouseLeave={listenHover ? closeMenuWithDelay : null}
                onMouseEnter={listenHover ? keepMenuOpenWithDelay : null}
                style={style}
                as={as}
            >
                {childElement ? (
                    <Popover
                        disablePortal={!enablePortal}
                        offset={mergeEffect ? [0, 0] : [0, 2]}
                        open={open}
                        anchorEl={childElement}
                        placement={placement}
                        keepMounted
                        pop={
                            <div className={classNames('menu-popover-wrapper', `shape--${shape}`)}>
                                {React.cloneElement(menu, { shape: 'squared' })}
                            </div>
                        }
                        {...props}
                        ref={ref}
                    />
                ) : null}
                {React.cloneElement(children, {
                    className: classNames(
                        children.props.className,
                        'popover-reference',
                        `shape--${shape}`,
                    ),
                    title: 'menu popover button',
                    'aria-haspopup': 'true',
                    'aria-expanded': String(open),
                    shape,
                    onClick: !disableClick ? toggleMenu : null,
                    onMouseEnter: listenHover ? openMenu : null,
                    ref: childRef,
                })}
            </MenuPopoverWrapper>
        </ClickAwayListener>
    )

    // If no context defined,
    return !context ? (
        // Render popover with context provider
        <MenuPopoverContext.Provider
            value={{ listenHover, disableClick, mergeEffect, shape, as: 'ul' }}
        >
            {popover}
        </MenuPopoverContext.Provider>
    ) : (
        // Else, don't render with context
        popover
    )
})

type MenuPopoverRef = PopoverRef

type MenuPopoverPropsOverride = 'pop' | 'closeDelay'

interface MenuPopoverProps
    extends Omit<BackyardBaseProps<MenuPopoverRef> & PopoverProps, MenuPopoverPropsOverride> {
    /**
     * Element to anchor popover
     * Will use default `IconButton` with `Dots` if not defined
     */
    children?: React.ReactElement
    /**
     * Shape of the button and popover
     */
    shape?: 'rounded' | 'squared'
    /**
     * Disable click listener on popover
     */
    disableClick?: boolean
    /**
     * Whether or not portal is enabled, which is disabled by default
     */
    enablePortal?: boolean
    /**
     * Number in milliseconds to delay closing the menu popover
     * so that it doesn't close on the user inconveniently.
     *
     * Set to `false` to make it so that the popover never closes
     * when the user's mouse exits the popover menu.
     */
    closeDelay?: number | false
    /**
     * Icon to use in default `IconButton` if `children` is not given
     * Defaults to `Dots` icon
     */
    icon?: React.ReactElement
    /**
     * Listen for hover events for popover
     */
    listenHover?: boolean
    /**
     * Menu element to pop over
     */
    menu: React.ReactElement
    /**
     * Enables a merging effect between the reference and the popover content
     */
    mergeEffect?: boolean
    /**
     * Whether or not popover is open controlled
     */
    open?: boolean
    /**
     * `onOpen` trigger function for when the calendar popover opens
     */
    onOpen?: () => void
    /**
     * `onClose` trigger function for when the calendar popover closes
     */
    onClose?: () => void
    /**
     * Position of the tooltip from the reference element (child)
     * Note: This is opposite of `Tooltip`'s `arrow` prop, which positions the tooltip from the reference
     *  For example, a `bottom` placed `Popover` will have the `arrow` be on top
     *  [Some Element]
     *       /|\
     *      [Pop]
     */
    placement?:
        | 'bottom-end'
        | 'bottom-start'
        | 'bottom'
        | 'left-end'
        | 'left-start'
        | 'left'
        | 'right-end'
        | 'right-start'
        | 'right'
        | 'top-end'
        | 'top-start'
        | 'top'
    /**
     * Shadow token to use, or none
     *
     * @default 'shadow_03'
     */
    shadow?: 'none' | KeyOf<BackyardTheme['shadows']> | 'string'
}

MenuPopover.bdsName = 'MenuPopover'

export { MenuPopover }

export type { MenuPopoverRef, MenuPopoverProps }

export default MenuPopover
