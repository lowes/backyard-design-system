import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import Skeleton from '../../Skeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

/**
 * Backyard React Chip Skeleton
 */
const ChipSkeleton: BDSForwardRef<ChipSkeletonProps> = React.forwardRef<
    ChipSkeletonRef,
    ChipSkeletonProps
>(function ChipSkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        animate = false,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'ChipSkeleton',
    })

    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <Skeleton
            className={classNames('chip--skeleton', className)}
            variant="circle"
            shape={shape}
            animate={animate}
            width={`calc(${theme.sizes.size_112} + ${theme.sizes.size_2})`}
            height='size_40'
            {...props}
            ref={ref}
        />
    )
})

type ChipSkeletonRef = SkeletonRef

interface ChipSkeletonProps extends SkeletonProps {}

ChipSkeleton.bdsName = 'ChipSkeleton'

export { ChipSkeleton }

export type { ChipSkeletonProps, ChipSkeletonRef }

export default ChipSkeleton
