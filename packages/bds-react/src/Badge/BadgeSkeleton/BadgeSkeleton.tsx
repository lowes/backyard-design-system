import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'

/**
 * Backard BadgeSkeleton component.
 * Returns the skeleton state of the badge element with a defined height
 * and a variable width. The width should be set to the width of the
 * badge component in the designs. Take badge width and divide by 16
 * (ie. 112/16 = 7, so width would be 7rem)
 * 
 * <BadgeSkeleton />
*/

const BadgeSkeleton: BDSForwardRef<BadgeSkeletonProps> = React.forwardRef<
    BadgeSkeletonRef,
    BadgeSkeletonProps
>(function BadgeSkeleton (
    {
        animate = false,
        width,
        size = 'medium',
        className,
        ...props
    },
    ref,
) {
    
    /**
     * Returns a rectagle with a specific height and the desired width.
     * By default, width is 7rem (112px) but this scan be changed depending
     * on the width of the badge text in your design.
     */
    return (
        <Skeleton 
            variant='rect' 
            width={width || '7rem'} 
            height={(size === 'medium') ? '1.5rem' : '2.5rem'}
            animate={animate}
            className={classnames(className, 'badge--skeleton')}
            {...props} 
            ref={ref} 
        />
    )
})

type BadgeSkeletonRef = HTMLDivElement

interface BadgeSkeletonProps {
    animate?: boolean
    width?: string
    className?: string
    size?: 'medium' | 'jumbo'
}

BadgeSkeleton.bdsName = 'BadgeSkeleton'

export { BadgeSkeleton }

export type { BadgeSkeletonProps, BadgeSkeletonRef }

export default BadgeSkeleton