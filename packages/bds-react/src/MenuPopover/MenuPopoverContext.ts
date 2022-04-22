import * as React from 'react'

import type { MenuPopoverProps } from './MenuPopover'

const MenuPopoverContext = React.createContext<MenuPopoverContextValue>(null)

/**
 * Value of the `MenuPopoverContext` provider
 */
interface MenuPopoverContextValue {
    /**
     * Whether or not menu popover is listening for click events
     */
    disableClick: MenuPopoverProps['disableClick']
    /**
     * Whether or not menu popover is listening for hover events
     */
    listenHover: MenuPopoverProps['listenHover']
    /**
     * Enables a merging effect between the reference and the popover content
     */
    mergeEffect: MenuPopoverProps['mergeEffect']
    /**
     * Shape of the parent to pass to children
     */
    shape: MenuPopoverProps['shape']
    /**
     * Element type to render as
     */
    as: MenuPopoverProps['as']
}

export { MenuPopoverContext }

export type { MenuPopoverContextValue }

export default MenuPopoverContext
