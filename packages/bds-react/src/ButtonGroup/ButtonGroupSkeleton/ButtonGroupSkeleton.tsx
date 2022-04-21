import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'

/**
 * Backyard ButtonGroupSkeleton component
 * 
 * Returns a Skeleton Rect with a predefined height based on the value of
 * the size prop passed. The width defaults to the width of a 4 button buttongroup
 * but can be overwritten to make it shorter or longer depending on need.
 * 
 * <ButtonGroupSkeleton />
 */

const ButtonGroupSkeleton: BDSForwardRef<ButtonGroupSkeletonProps> = React.forwardRef<
    ButtonGroupSkeletonRef,
    ButtonGroupSkeletonProps
>(function ButtonGroupSkeleton (
    {
        animate = false,
        width,
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
            skeletonWidth = width || '9.5rem'
            skeletonHeight = 'calc(var(--bds-sizes-size-48) + var(--bds-sizes-size-2))'
            break

        default:
            skeletonWidth = width || '11.5rem'
            skeletonHeight = 'calc(var(--bds-sizes-size-56) + var(--bds-sizes-size-2))'
            break
    }
    
    return (
        <Skeleton 
            variant='rect' 
            width={skeletonWidth} 
            height={skeletonHeight}
            animate={animate}
            className={classnames(className, 'button-group--skeleton')}
            {...props} 
            ref={ref} 
        />
    )
})

type ButtonGroupSkeletonRef = HTMLDivElement

interface ButtonGroupSkeletonProps {
    animate?: boolean
    width?: string
    size?: string
    className?: string
}

ButtonGroupSkeleton.bdsName = 'ButtonGroupSkeleton'

export { ButtonGroupSkeleton }

export type { ButtonGroupSkeletonProps, ButtonGroupSkeletonRef }

export default ButtonGroupSkeleton