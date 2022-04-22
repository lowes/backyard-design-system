import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'

/**
 * Backyard ButtonSkeleton component
 * 
 * Returns a Skeleton Rect with a predefined height depending on the
 * value passed to the size prop. The skeleton has a default width also
 * that can be overwritten depending on the width of the button with it's
 * label.
 * 
 * <ButtonSkeleton />
 */

const ButtonSkeleton: BDSForwardRef<ButtonSkeletonProps> = React.forwardRef<
    ButtonSkeletonRef,
    ButtonSkeletonProps
>(function ButtonSkeleton (
    {
        size = 'medium',
        fullWidth = false,
        width,
        className,
        ...props
    },
    ref,
) {
    let skeletonHeight
    let skeletonWidth

    switch(size) {
        case 'jumbo':
            skeletonHeight = '6rem'
            skeletonWidth = width || '12rem'
            break

        case 'large':
            skeletonHeight = '3.5rem'
            skeletonWidth = width || '7.5rem'
            break

        case 'small':
            skeletonHeight = '2.5rem'
            skeletonWidth = width || '5.5rem'
            break

        default:
            skeletonHeight = '3rem'
            skeletonWidth = width || '7.5rem'
    }       

    if (fullWidth) { skeletonWidth = '100%' }

    return (
        <Skeleton 
            variant='rect' 
            width={skeletonWidth} 
            height={skeletonHeight} 
            className={classnames(className, 'button--skeleton', `size-${size}`)}
            {...props} 
            ref={ref}
        />
    )
})

type ButtonSkeletonRef = HTMLDivElement

interface ButtonSkeletonProps {
    size?: string,
    animate?: boolean,
    fullWidth?: boolean,
    width?: string
    className?: string
}

ButtonSkeleton.bdsName = 'ButtonSkeleton'

export { ButtonSkeleton }

export type { ButtonSkeletonProps, ButtonSkeletonRef }

export default ButtonSkeleton