import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'
import BreadcrumbDesktop from '../BreadcrumbDesktop'
import type {
    BreadcrumbDesktopProps,
    BreadcrumbDesktopRef,
    LinkCrumbProps,
} from '../BreadcrumbDesktop'
import BreadcrumbMobile from '../BreadcrumbMobile'
import type { BreadcrumbMobileProps, BreadcrumbMobileRef } from '../BreadcrumbMobile'

const Breadcrumb: BDSForwardRef<BreadcrumbProps> = React.forwardRef<BreadcrumbRef, BreadcrumbProps>(
    function Breadcrumb({ className, render = 'auto', ...props }, ref) {
        // Get Backyard Theme
        const theme = useBackyardTheme()

        const { isMobile } = theme

        // Validate theme hook
        validateBackyardTheme(theme, 'Breadcrumb')

        // Memoize component on render
        const BreadcrumbComponent = React.useMemo(() => {
            // Switch on `render`
            switch (render) {
                // Case desktop,
                case 'desktop':
                    // Render Breadcrumb Desktop,
                    return BreadcrumbDesktop
                // Case mobile,
                case 'mobile':
                    // Render Breadcrumb Mobile
                    return BreadcrumbMobile
                // Auto or default,
                case 'auto':
                default:
                    // Render Breadcrumb Mobile if mobile viewport, else Desktop
                    return isMobile ? BreadcrumbMobile : BreadcrumbDesktop
            }
        }, [render])

        return (
            <BreadcrumbComponent
                className={classNames('breadcrumb', `render--${render}`, className)}
                {...props}
                ref={ref}
            />
        )
    },
)

type BreadcrumbRef = BreadcrumbDesktopRef | BreadcrumbMobileRef

type CrumbProps = LinkCrumbProps

type BreadcrumbOverrideProps = 'crumbs'

interface BreadcrumbProps
    extends Omit<BreadcrumbDesktopProps, BreadcrumbOverrideProps>,
        Omit<BreadcrumbMobileProps, BreadcrumbOverrideProps> {
    /**
     * Determines the rendered breadcrumb component
     * @default 'auto'
     */
    render?: 'auto' | 'desktop' | 'mobile'
    /**
     * List of crumb props to render as crumbs
     */
    crumbs: CrumbProps[]
}

Breadcrumb.bdsName = 'Breadcrumb'

export { Breadcrumb }

export type { BreadcrumbProps, BreadcrumbRef, CrumbProps }

export default Breadcrumb
