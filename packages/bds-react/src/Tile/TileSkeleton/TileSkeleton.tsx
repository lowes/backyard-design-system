import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import Skeleton from '../../Skeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

/**
 * Backyard React Tile Skeleton
 */
const TileSkeleton: BDSForwardRef<TileSkeletonProps> = React.forwardRef<
    TileSkeletonRef,
    TileSkeletonProps
>(function TileSkeleton(
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
        name: 'TileSkeleton',
    })

    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <Skeleton
            className={classNames('tile--skeleton', className)}
            variant="rect"
            shape={shape}
            animate={animate}
            height="20rem"
            width="20rem"
            {...props}
            ref={ref}
        />
    )
})

type TileSkeletonRef = SkeletonRef

interface TileSkeletonProps extends SkeletonProps {}

TileSkeleton.bdsName = 'TileSkeleton'

export { TileSkeleton }

export type { TileSkeletonProps, TileSkeletonRef }

export default TileSkeleton
