import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'

/**
 * Backyards IconButtonSkeleton component
 * 
 * Returns a Skeleton rect with a predefined height / width based on
 * the value of the size prop (ie. 'small', 'medium', 'large').
 * 
 * <IconButtonSkeleton />
 */

const IconButtonSkeleton: BDSForwardRef<IconButtonSkeletonProps> = React.forwardRef<
    IconButtonSkeletonRef,
    IconButtonSkeletonProps
>(function IconButtonSkeleton (
    {
        animate = false,
        size,
        className,
        ...props
    },
    ref,
) {
    let skeletonWidth
    let skeletonHeight

    switch(size) {
        case 'small':
            skeletonWidth = '2.5rem'
            skeletonHeight = '2.5rem'
            break

        case 'large':
            skeletonWidth = '3.5rem'
            skeletonHeight = '3.5rem'
            break

        case 'jumbo':
            skeletonWidth = '6rem'
            skeletonHeight = '6rem'
            break

        default:
            skeletonWidth = '3rem'
            skeletonHeight = '3rem'
            break
    }
    
    return (
        <Skeleton 
            variant='rect' 
            width={skeletonWidth} 
            height={skeletonHeight}
            animate={animate}
            className={classnames(className, 'icon-buton--skeleton')}
            {...props} 
            ref={ref} 
        />
    )
})

type IconButtonSkeletonRef = HTMLDivElement

interface IconButtonSkeletonProps {
    animate?: boolean
    size?: string
    className?: string
}

IconButtonSkeleton.bdsName = 'IconButtonSkeleton'

export { IconButtonSkeleton }

export type { IconButtonSkeletonProps, IconButtonSkeletonRef }

export default IconButtonSkeleton