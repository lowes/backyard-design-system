import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import { RatingSkeletonWrapper } from './styles'

import Skeleton from '../../Skeleton'

/**
 * Backyard's Ratings Skeleton component
 * 
 * Returns a set of Skeleton circles which each has a size determined
 * by the value of the size prop. Optional paramter of `withValue` to
 * determine if a Skeleton rect for a value should be shown. The label
 * shows scales in size determined by the value of the size prop also.
 * 
 * <RatingSkeleton />
 */

const RatingSkeleton: BDSForwardRef<RatingSkeletonProps> = React.forwardRef<
    RatingSkeletonRef,
    RatingSkeletonProps
>(function RatingSkeleton (
    {
        size = 'medium',
        withValue = false,
        animate = false,
        classNames,
        ...props
    },
    ref,
) {

    let starHeight = 'size_16'
    let starWidth = 'size_16'
    let textHeight = 'size_20'
    let textWidth = 'size_32'

    switch(size) {
        case 'jumbo':
            starHeight = 'size_32'
            starWidth = 'size_32'
            textHeight = 'size_28'
            textWidth = 'size_44'
            break

        case 'large':
            starHeight = 'size_24'
            starWidth = 'size_24'
            textHeight = 'size_24'
            textWidth = 'size_36'
            break

        case 'small':
            textHeight = 'size_18'
            textWidth = 'size_28'
            break

        default:
            starHeight = 'size_24'
            starWidth = 'size_24'
            textHeight = 'size_24'
            textWidth = 'size_36'
            break
    }

    return (
        <RatingSkeletonWrapper className={classnames(classNames, 'rating--skeleton', `size--${size}`)} {...props} ref={ref}>
            <Skeleton variant='circle' height={starHeight} width={starWidth} animate={animate} />
            <Skeleton variant='circle' height={starHeight} width={starWidth} animate={animate} />
            <Skeleton variant='circle' height={starHeight} width={starWidth} animate={animate} />
            <Skeleton variant='circle' height={starHeight} width={starWidth} animate={animate} />
            <Skeleton variant='circle' height={starHeight} width={starWidth} animate={animate} />
            {(withValue) ? 
                <Skeleton variant='rect' height={textHeight} width={textWidth} animate={animate} /> :
                null
            }
        </RatingSkeletonWrapper>
    )
})

type RatingSkeletonRef = HTMLSpanElement

interface RatingSkeletonProps {
    animate?: boolean 
    size?: string
    withValue?: boolean
    classNames?: string
}

RatingSkeleton.bdsName = 'RatingSkeleton'

export { RatingSkeleton }

export type { RatingSkeletonProps, RatingSkeletonRef }

export default RatingSkeleton