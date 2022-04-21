import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'
import { HorizontalWrapper, VerticalWrapper } from './styles'

/**
 * Backyards Slider skeleton component
 * 
 * Returns a series of Skeleton Rects in either a horizontal row or a
 * vertical stack depending on the orientation prop. Option prop for showing
 * a text input available only in the horizontal orientation.
 * 
 * <SliderSkeleton />
 */

const SliderSkeleton: BDSForwardRef<SliderSkeletonProps> = React.forwardRef<
    SliderSkeletonRef,
    SliderSkeletonProps
>(function SliderSkeleton (
    {
        orientation = 'horizontal',
        animate = false,
        showInput = false,
        className,
        ...props
    },
    ref,
) {
    let Component

    if (orientation === 'horizontal') {
        Component = () => (
            <HorizontalWrapper className={classnames(className, 'slider--skeleton', `orientation--${orientation}`)} {...props} ref={ref}>
                <Skeleton 
                    variant='rect'
                    height='size_24'
                    width ='size_16'
                    animate={animate}
                    className='skeleton--slider-value'
                />

                <Skeleton 
                    variant='rect'
                    height='size_20'
                    width='12.5rem'
                    animate={animate}
                    className='skeleton--slider-bar'
                />

                <Skeleton 
                    variant='rect'
                    height='size_24'
                    width ='size_16'
                    animate={animate}
                    className='skeleton--slider-value'
                />

                {
                    (showInput === true) ?
                        <Skeleton 
                            variant='rect'
                            height='3.375rem'
                            width='3.375rem'
                            animate={animate}
                            className='skeleton--slider-input'
                        /> : null
                }
            </HorizontalWrapper>
        )
    } else {
        Component = () => (
            <VerticalWrapper className={classnames(className, 'slider--skeleton', `orientation--${orientation}`)} {...props} ref={ref}>
                <Skeleton 
                    variant='rect'
                    height='12.5rem'
                    width='size_20'
                    animate={animate}
                    className='skeleton--slider-bar'
                />

                <div className='skeleton--slider-values'>
                    <Skeleton 
                        variant='rect'
                        height='size_24'
                        width ='size_16'
                        animate={animate}
                        className='skeleton--slider-value'
                    />

                    <Skeleton 
                        variant='rect'
                        height='size_24'
                        width ='size_16'
                        animate={animate}
                        className='skeleton--slider-value'
                    />
                </div>
            </VerticalWrapper>
        )
    }

    return (
        <Component />
    )
})

type SliderSkeletonRef = HTMLDivElement

interface SliderSkeletonProps {
    orientation?: string
    animate?: boolean
    showInput?: boolean
    className?: string
}

SliderSkeleton.bdsName = 'SliderSkeleton'

export { SliderSkeleton }

export type { SliderSkeletonProps, SliderSkeletonRef }

export default SliderSkeleton