import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import { BDSForwardRef, BDSFunctional } from '../utils/typings/BDSComponentProps'
import Link from '../Link'
import type { LinkProps, LinkRef } from '../Link'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import BreadcrumbDesktopBase from './styles/BreadcrumbDesktopBase'

const CrumbDesktop: BDSFunctional<LinkProps> = React.forwardRef<LinkRef, LinkProps>(function Crumb(
    { className, label, ...props },
    ref,
) {
    return (
        <li>
            <Link className={classNames('crumb', 'crumb-desktop', className)} {...props} ref={ref}>
                {label}
            </Link>
        </li>
    )
})

const BreadcrumbDesktop: BDSForwardRef<BreadcrumbDesktopProps> = React.forwardRef<
    BreadcrumbDesktopRef,
    BreadcrumbDesktopProps
>(function Breadcrumb(
    { ariaLabel = 'Breadcrumb', crumbs, crumb: CrumbComponent = CrumbDesktop, className, ...props },
    ref,
) {
    // Get Backyard Theme
    const theme = useBackyardTheme()

    // Validate theme hook
    validateBackyardTheme(theme, 'BreadcrumbDesktop')

    const items = React.useMemo(
        () =>
            crumbs.map((crumb, index) => (
                <CrumbComponent
                    key={index}
                    {...(index === crumbs.length - 1
                        ? { color: 'primary', 'aria-current': 'page' }
                        : { bold: true, underline: 'hover', color: 'interactive' })}
                    {...(crumb as LinkProps)}
                />
            )),
        [crumbs, CrumbComponent],
    )

    return (
        <BreadcrumbDesktopBase
            aria-label={ariaLabel}
            className={classNames('breadcrumb-desktop', className)}
            ref={ref}
            {...props}
        >
            <ol>{items}</ol>
        </BreadcrumbDesktopBase>
    )
})

type BreadcrumbDesktopRef = HTMLElement

interface LinkCrumbProps extends Omit<LinkProps, 'children'> {
    /**
     * Children are option in Link Crumbs
     */
    children?: React.ReactElement
}

interface BreadcrumbDesktopProps extends BackyardBaseProps<BreadcrumbDesktopRef> {
    /**
     * Label for aria to speak
     */
    ariaLabel?: string
    /**
     * Crumb items to render
     */
    crumbs: LinkCrumbProps[]
    /**
     * Component to render crumb with
     * Defaults to `Link` component
     */
    crumb?: React.ComponentClass
    /**
     * React DOM Class
     */
    className?: string
}

CrumbDesktop.bdsName = 'CrumbDesktop'
BreadcrumbDesktop.bdsName = 'BreadcrumbDesktop'

export { BreadcrumbDesktop, CrumbDesktop }

export type { BreadcrumbDesktopProps, BreadcrumbDesktopRef, LinkCrumbProps }

export default BreadcrumbDesktop
