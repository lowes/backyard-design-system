import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'

/**
 * Backyards PVSSkeleton component
 * 
 * Returns a series of Skeleton circles based on the value of the
 * items prop. Sizing and spacing of each swatch matches that of the
 * default PVS component.
 * 
 * <PVSSkeleton />
 */

const PVSSkeleton: BDSForwardRef<PVSSkeletonProps> = React.forwardRef<
    PVSSkeletonRef,
    PVSSkeletonProps
>(function PVSSkeleton (
    {
        items = 1,
        animate = false,
        className,
        ...props
    },
    ref,
) {
    const circles = [...new Array(items)]

    return (
        <div 
            style={{display: 'inline-flex', flexDirection: 'row'}} 
            className={classnames(className, 'pvs--skeleton')}
        >
            {
                circles.map((item, index) => (
                    <Skeleton
                        key={`skeleton-${index}`}
                        variant='circle'
                        height='size_40'
                        width='size_40'
                        animate={animate}
                        style={{margin: '0.5rem', display: 'inline-block' }}
                        {...props}
                        ref={ref}
                    />
                ))
            }
        </div>
    )
})

type PVSSkeletonRef = HTMLDivElement

interface PVSSkeletonProps {
    animate?: boolean 
    items?: number
    className?: string
}

PVSSkeleton.bdsName = 'PVSSkeleton'

export { PVSSkeleton }

export type { PVSSkeletonProps, PVSSkeletonRef }

export default PVSSkeleton