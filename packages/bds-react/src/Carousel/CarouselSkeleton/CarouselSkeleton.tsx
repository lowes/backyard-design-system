import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import Skeleton from '../../Skeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

/**
 * Backyard React Carousel Skeleton
 */
const CarouselSkeleton: BDSForwardRef<CarouselSkeletonProps> = React.forwardRef<
    CarouselSkeletonRef,
    CarouselSkeletonProps
>(function CarouselSkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        hideButtons = false,
        hideScrollbar = false,
        animate = false,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'CarouselSkeleton',
    })

    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <div className={classNames('carousel--skeleton', className)}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {!hideButtons ? (
                    <Skeleton
                        variant="circle"
                        shape={shape}
                        animate={animate}
                        style={{
                            minWidth: '2.625rem',
                            minHeight: '2.625rem',
                            marginRight: theme.sizes.size_8,
                        }}
                    />
                ) : null}
                <div
                    style={{
                        width: '100%',
                    }}
                >
                    <Skeleton
                        variant="rect"
                        shape={shape}
                        animate={animate}
                        width="100%"
                        height="20.5rem"
                        {...props}
                        ref={ref}
                    />
                    {!hideScrollbar ? (
                        <Skeleton
                            variant="rect"
                            shape={shape}
                            animate={animate}
                            width="100%"
                            height={theme.sizes.size_4}
                            style={{
                                marginTop: theme.sizes.size_32,
                            }}
                        />
                    ) : null}
                </div>
                {!hideButtons ? (
                    <Skeleton
                        variant="circle"
                        shape={shape}
                        animate={animate}
                        style={{
                            minWidth: '2.625rem',
                            minHeight: '2.625rem',
                            marginLeft: theme.sizes.size_8,
                        }}
                    />
                ) : null}
            </div>
        </div>
    )
})

type CarouselSkeletonRef = SkeletonRef

interface CarouselSkeletonProps extends SkeletonProps {
    /**
     * Whether or not buttons are hidden
     */
    hideButtons?: boolean
    /**
     * Whether or not scrollbar is hidden
     */
    hideScrollbar?: boolean
}

CarouselSkeleton.bdsName = 'CarouselSkeleton'

export { CarouselSkeleton }

export type { CarouselSkeletonProps, CarouselSkeletonRef }

export default CarouselSkeleton
