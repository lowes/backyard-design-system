import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings'
import Skeleton from '../../Skeleton'
import type { SkeletonProps } from '../../Skeleton'
import IconButtonSkeleton from '../../IconButton/IconButtonSkeleton'
import type { IconButtonSkeletonProps } from '../../IconButton/IconButtonSkeleton'

import BreadcrumbMobileSkeletonWrapper from './styles/BreadcrumbMobileSkeletonWrapper'

const BreadcrumbMobileSkeleton: BDSForwardRef<BreadcrumbMobileSkeletonProps> = React.forwardRef<
    BreadcrumbMobileSkeletonRef,
    BreadcrumbMobileSkeletonProps
>(function BreadcrumbMobileSkeleton(
    {
        animate = false,
        width,
        className,
        iconButtonSkeletonProps,
        typographySkeletonProps,
        ...props
    },
    ref,
) {
    return (
        <BreadcrumbMobileSkeletonWrapper
            className={classNames(className, 'breadcrumb-mobile--skeleton')}
            {...props}
            ref={ref}
        >
            <IconButtonSkeleton size="small" animate={animate} {...iconButtonSkeletonProps} />
            <Skeleton
                variant="rect"
                height="size_24"
                width={width || '15rem'}
                animate={animate}
                {...typographySkeletonProps}
                style={{
                    marginLeft: 'var(--bds-sizes-size-8)',
                    ...typographySkeletonProps?.style,
                }}
            />
        </BreadcrumbMobileSkeletonWrapper>
    )
})

type BreadcrumbMobileSkeletonRef = HTMLDivElement

interface BreadcrumbMobileSkeletonProps extends SkeletonProps {
    /**
     * Whether or not to animate the skeleton component
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
     * Icon Button Skeleton props for overriding
     */
    iconButtonSkeletonProps?: IconButtonSkeletonProps
    /**
     * Typography Skeleton props for overriding
     */
    typographySkeletonProps?: SkeletonProps
}

BreadcrumbMobileSkeleton.bdsName = 'BreadcrumbMobileSkeleton'

export { BreadcrumbMobileSkeleton }

export type { BreadcrumbMobileSkeletonProps, BreadcrumbMobileSkeletonRef }

export default BreadcrumbMobileSkeleton
