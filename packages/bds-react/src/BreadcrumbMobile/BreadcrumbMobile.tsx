import * as React from 'react'
import classNames from 'classnames'

import Dots from '@lowes-tech/bds-icons/Dots'
import ArrowLeft from '@lowes-tech/bds-icons/ArrowLeft'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import { BDSForwardRef, BDSFunctional } from '../utils/typings/BDSComponentProps'
import Link from '../Link'
import type { LinkProps, LinkRef } from '../Link'
import Menu from '../Menu'
import type { MenuProps } from '../Menu'
import MenuItem from '../MenuItem'
import type { MenuItemProps } from '../MenuItem'
import MenuPopover from '../MenuPopover'
import type { MenuPopoverProps } from '../MenuPopover'
import type { CrumbProps } from '../Breadcrumb'
import IconButton from '../IconButton'
import Typography from '../Typography'
import type { TypographyProps } from '../Typography'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import BreadcrumbMobileBase from './styles/BreadcrumbMobileBase'

type CrumbMenuLinkProps = LinkProps & Omit<MenuItemProps, 'ref'>

const CrumbMobile: BDSFunctional<CrumbMenuLinkProps> = React.forwardRef<
    LinkRef,
    CrumbMenuLinkProps
>(function Crumb({ className, label, ...props }, ref) {
    return (
        <MenuItem
            className={classNames('crumb', 'crumb-mobile', className)}
            iconBefore={<ArrowLeft />}
            variant="inverse"
            color="interactive"
            shape="squared"
            as={Link}
            {...props}
            ref={ref as any}
        >
            {label}
        </MenuItem>
    )
})

/**
 * Backyard React Breadcrumb Mobile
 *
 * Mobile-only version of `Breadcrumb`
 */
const BreadcrumbMobile: BDSForwardRef<BreadcrumbMobileProps> = React.forwardRef<
    BreadcrumbMobileRef,
    BreadcrumbMobileProps
>(function BreadcrumMobile(
    {
        ariaLabel = 'Breadcrumb',
        crumbs,
        crumb: CrumbComponent = CrumbMobile,
        className,
        menuProps,
        menuPopoverProps,
        disabled: disabledProp = false,
        open: openProp = false,
        toggle: toggleProp,
        ...props
    },
    ref,
) {
    // Get Backyard Theme
    const theme = useBackyardTheme()

    // Validate theme hook
    validateBackyardTheme(theme, 'BreadcrumbMobile')

    // Memoize context props
    const { disabled, open } = React.useMemo(
        () => ({
            disabled: disabledProp,
            open: openProp,
        }),
        [openProp],
    )

    // Last crumb is current crum
    const currentCrumb = React.useMemo(() => crumbs[crumbs.length - 1], [crumbs])

    // Each crumb...
    const items = React.useMemo(
        () =>
            crumbs
                // Remove last (current) crumb
                .slice(0, crumbs.length - 1)
                // Map to rendered crumb components
                .map((crumb, index) => (
                    <CrumbComponent key={index} {...(crumb as CrumbMenuLinkProps)} />
                ))
                // Reverse crumbs in mobile popover
                .reverse(),
        [crumbs, CrumbComponent],
    )

    // Render toggle component
    const toggle = React.useMemo(
        () =>
            // IconButton by default
            toggleProp || (
                <IconButton disabled={disabled} size="small" variant="inverse" color="interactive">
                    <Dots />
                </IconButton>
            ),
        [toggleProp, disabled],
    )

    return (
        <BreadcrumbMobileBase
            aria-label={ariaLabel}
            className={classNames('breadcrumb', className)}
            {...props}
            ref={ref}
        >
            <MenuPopover
                open={open}
                menu={
                    <Menu width="17.5rem" {...menuProps}>
                        {items}
                    </Menu>
                }
                {...menuPopoverProps}
            >
                {toggle}
            </MenuPopover>
            <Typography
                className="crumb-current"
                variant="body_1"
                color="text_secondary"
                aria-current="page"
                bold
                {...(currentCrumb as any as TypographyProps)}
            >
                {currentCrumb.label}
            </Typography>
        </BreadcrumbMobileBase>
    )
})

type BreadcrumbMobileRef = HTMLElement

interface MenuItemCrumbProps extends Omit<MenuItemProps, 'children'> {
    /**
     * Children are option in Link Crumbs
     */
    children?: React.ReactElement
}

interface BreadcrumbMobileProps extends BackyardBaseProps<BreadcrumbMobileRef> {
    /**
     * Label for aria to speak
     */
    ariaLabel?: string
    /**
     * Crumb items to render
     */
    crumbs: CrumbProps[]
    /**
     * Component to render crumb with
     *
     * Defaults to `MenuItem` component
     */
    crumb?: React.ComponentClass
    /**
     * React DOM Class
     */
    className?: string
    /**
     * `Menu` props override
     */
    menuProps?: MenuProps
    /**
     * `MenuPopover` props override
     */
    menuPopoverProps?: MenuPopoverProps
    /**
     * Toggle element for opening/closing the mobile breadcrumb popover
     *
     * @default `IconButton`
     */
    toggle?: React.ReactElement
}

CrumbMobile.bdsName = 'CrumbMobile'
BreadcrumbMobile.bdsName = 'BreadcrumbMobile'

export { BreadcrumbMobile, CrumbMobile }

export type { BreadcrumbMobileProps, BreadcrumbMobileRef, MenuItemCrumbProps }

export default BreadcrumbMobile
