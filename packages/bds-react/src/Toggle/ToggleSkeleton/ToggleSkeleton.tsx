import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'

/**
 * Backyards ToggleSkeleton component
 * 
 * Returns a Skeleton rect with a predefined height related to
 * the value of the size prop. Defauts to a 2 button instance of
 * a toggle but can be overwritten to contain more button instances.
 * Each increase of the button instances will increase the width
 * of the component.
 * 
 * <ToggleSkeleton />
 */

const ToggleSkeleton: BDSForwardRef<ToggleSkeletonProps> = React.forwardRef<
    ToggleSkeletonRef,
    ToggleSkeletonProps
>(function ToggleSkeleton (
    {
        animate = false,
        className,
        instances = 2,
        size = 'medium',
        ...props
    },
    ref,
) {
    let height = ''

    switch(size) {
        case 'small':
            height = '2.375rem'
            break

        case 'large':
            height = '3.375rem'
            break
        
        default:
            height = '2.875rem'
    }

    return (
        <Skeleton
            className={classnames(className, 'toggle--skeleton', `size--${size}`)}
            variant='rect'
            width={`${parseFloat(height) * instances}rem`}
            height={height}
            animate={animate}
            {...props}
            ref={ref}
        />
    )
})

type ToggleSkeletonRef = HTMLDivElement

interface ToggleSkeletonProps {
    instances?: number
    size?: string
    animate?: boolean
    className?: string
}

ToggleSkeleton.bdsName = 'ToggleSkeleton'

export { ToggleSkeleton }

export type { ToggleSkeletonProps, ToggleSkeletonRef }

export default ToggleSkeleton