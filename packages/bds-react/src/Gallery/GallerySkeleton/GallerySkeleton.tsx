import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import Skeleton from '../../Skeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

/**
 * Backyard React Gallery Skeleton
 */
const GallerySkeleton: BDSForwardRef<GallerySkeletonProps> = React.forwardRef<
    GallerySkeletonRef,
    GallerySkeletonProps
>(function GallerySkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        animate = false,
        thumbnails = 5,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'GallerySkeleton',
    })

    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <div className={classNames('gallery--skeleton', className)}>
            <Skeleton
                variant="rect"
                shape={shape}
                animate={animate}
                width="100%"
                height="32rem"
                {...props}
                ref={ref}
            />
            {thumbnails > 0 ? (
                <div
                    style={{
                        display: 'flex',
                        marginTop: theme.sizes.size_16,
                        justifyContent: theme.isMobile ? 'center' : 'flex-start',
                    }}
                >
                    {[...new Array(thumbnails || 0)].map((_, index) =>
                        theme.isDesktop ? (
                            <Skeleton
                                key={index}
                                variant="rect"
                                shape={shape}
                                animate={animate}
                                width="4.625rem"
                                height="4.625rem"
                                style={{
                                    marginRight: index < thumbnails - 1 ? theme.sizes.size_12 : 0,
                                }}
                            />
                        ) : (
                            <Skeleton
                                key={index}
                                variant="circle"
                                shape={shape}
                                animate={animate}
                                style={{
                                    minHeight: theme.sizes.size_16,
                                    minWidth: theme.sizes.size_16,
                                    marginRight: index < thumbnails - 1 ? theme.sizes.size_12 : 0,
                                }}
                            />
                        ),
                    )}
                </div>
            ) : null}
        </div>
    )
})

type GallerySkeletonRef = SkeletonRef

interface GallerySkeletonProps extends SkeletonProps {
    /**
     * Whether or not buttons are hidden
     */
    hideButtons?: boolean
    /**
     * Number of thumbnails
     */
    thumbnails?: number
}

GallerySkeleton.bdsName = 'GallerySkeleton'

export { GallerySkeleton }

export type { GallerySkeletonProps, GallerySkeletonRef }

export default GallerySkeleton
