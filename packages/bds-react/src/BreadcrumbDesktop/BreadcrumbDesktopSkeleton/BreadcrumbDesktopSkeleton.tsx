import * as React from 'react'
import classnames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings'
import Skeleton from '../../Skeleton'
import type { SkeletonProps } from '../../Skeleton'

const BreadcrumbDesktopSkeleton: BDSForwardRef<BreadcrumbDesktopSkeletonProps> = React.forwardRef<
    BreadcrumbDesktopSkeletonRef,
    BreadcrumbDesktopSkeletonProps
>(function BreadcrumbDesktopSkeleton({ animate = false, width, className, ...props }, ref) {
    return (
        <Skeleton
            variant="rect"
            height="size_24"
            width={width || '15rem'}
            animate={animate}
            className={classnames(className, 'breadcrumb-desktop--skeleton')}
            {...props}
            ref={ref}
        />
    )
})

type BreadcrumbDesktopSkeletonRef = HTMLDivElement

interface BreadcrumbDesktopSkeletonProps extends SkeletonProps {
    /**
     * Whether or not to pulse animate skeleton
     */
    animate?: boolean
    /**
     * Width of the breadcrumb skeleton
     */
    width?: string
    /**
     * Class name of the component
     */
    className?: string
}

BreadcrumbDesktopSkeleton.bdsName = 'BreadcrumbDesktopSkeleton'

export { BreadcrumbDesktopSkeleton }

export type { BreadcrumbDesktopSkeletonProps, BreadcrumbDesktopSkeletonRef }

export default BreadcrumbDesktopSkeleton
