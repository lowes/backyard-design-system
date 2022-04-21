import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'

/**
 * Backyard's PillSkeleton component
 * 
 * Returns a Skeleton circle with predefined heights and widths related
 * to the value of the variant prop (ie. 'pill', 'indicator').
 * 
 * <PillSkeleton />
 */

const PillSkeleton: BDSForwardRef<PillSkeletonProps> = React.forwardRef<
    PillSkeletonRef,
    PillSkeletonProps
>(function PillSkeleton (
    {
        animate = false,
        variant = 'pill',
        size = 'medium',
        className,
        ...props
    },
    ref,
) {

    let height
    let width

    if(size === 'medium') {
        width = (variant === 'pill') 
            ? 'calc(var(--bds-sizes-size-24) + var(--bds-sizes-size-2))'
            : 'var(--bds-sizes-size-18)'
        height = (variant === 'pill')
            ? 'calc(var(--bds-sizes-size-24) + var(--bds-sizes-size-2))'
            : 'var(--bds-sizes-size-18)'
    } else {
        width = (variant === 'pill')
            ? 'calc(var(--bds-sizes-size-40) + var(--bds-sizes-size-2))'
            : 'calc(var(--bds-sizes-size-32) + var(--bds-sizes-size-2))'
        height = (variant === 'pill')
            ? 'calc(var(--bds-sizes-size-40) + var(--bds-sizes-size-2))'
            : 'calc(var(--bds-sizes-size-32) + var(--bds-sizes-size-2))'
    }

    return (
        <Skeleton 
            variant='circle' 
            width={height} 
            height={width}
            animate={animate}
            className={classnames(className, 'pill--skeleton', `variant--${variant}`)}
            {...props} 
            ref={ref} 
        />
    )
})

type PillSkeletonRef = HTMLDivElement

interface PillSkeletonProps {
    animate?: boolean
    variant?: string
    className?: string
    size?: 'medium' | 'jumbo'
}

PillSkeleton.bdsName = 'PillSkeleton'

export { PillSkeleton }

export type { PillSkeletonProps, PillSkeletonRef }

export default PillSkeleton