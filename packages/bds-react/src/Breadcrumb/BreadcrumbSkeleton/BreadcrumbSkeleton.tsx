import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import BreadcrumbDesktopSkeleton from '../../BreadcrumbDesktop/BreadcrumbDesktopSkeleton'
import type {
    BreadcrumbDesktopSkeletonProps,
    BreadcrumbDesktopSkeletonRef,
} from '../../BreadcrumbDesktop/BreadcrumbDesktopSkeleton'
import BreadcrumbMobileSkeleton from '../../BreadcrumbMobile/BreadcrumbMobileSkeleton'
import type {
    BreadcrumbMobileSkeletonProps,
    BreadcrumbMobileSkeletonRef,
} from '../../BreadcrumbMobile/BreadcrumbMobileSkeleton'
import useBackyardTheme from '../../ThemeProvider/useBackyardTheme'

const BreadcrumbSkeleton: BDSForwardRef<BreadcrumbSkeletonProps> = React.forwardRef<
    BreadcrumbSkeletonRef,
    BreadcrumbSkeletonProps
>(function BreadcrumbSkeleton({ className, render = 'auto', ...props }, ref) {
    const theme = useBackyardTheme()

    const { isMobile } = theme

    const BreadcrumbSkeletonComponent = React.useMemo(() => {
        switch (render) {
            case 'desktop':
                return BreadcrumbDesktopSkeleton
            case 'mobile':
                return BreadcrumbMobileSkeleton
            case 'auto':
            default:
                return isMobile ? BreadcrumbMobileSkeleton : BreadcrumbDesktopSkeleton
        }
    }, [render]) as typeof BreadcrumbMobileSkeleton | typeof BreadcrumbDesktopSkeleton

    return (
        <BreadcrumbSkeletonComponent
            className={classNames(className, 'breadcrumb--skeleton')}
            {...props}
            ref={ref}
        />
    )
})

type BreadcrumbSkeletonRef = BreadcrumbMobileSkeletonRef | BreadcrumbDesktopSkeletonRef

interface BreadcrumbSkeletonProps
    extends BreadcrumbMobileSkeletonProps,
        BreadcrumbDesktopSkeletonProps {
    /**
     * Whether or not the animate the skeleton component
     */
    animate?: boolean
    /**
     * Width of the skeleton
     */
    width?: string
    /**
     * Class name of the component
     */
    className?: string
    /**
     * Override which skeleton to render
     *
     * @default 'auto'
     */
    render?: 'auto' | 'desktop' | 'mobile'
}

BreadcrumbSkeleton.bdsName = 'BreadcrumbSkeleton'

export { BreadcrumbSkeleton }

export type { BreadcrumbSkeletonProps, BreadcrumbSkeletonRef }

export default BreadcrumbSkeleton
