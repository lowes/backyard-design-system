import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import Skeleton from '../../Skeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'
import type { SelectProps } from '../Select'

// Height values for skeleton 
// depending on `size` prop value
const heightMap = {
    small: '2.375rem', // 38px
    medium: '2.875rem', // 46px
    large: '3.375rem', // 54px
}

/**
 * Backyard React Select Skeleton
 */
const SelectSkeleton: BDSForwardRef<SelectSkeletonProps> = React.forwardRef<
    SelectSkeletonRef,
    SelectSkeletonProps
>(function SelectSkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        animate = false,
        size = 'large',
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'SelectSkeleton',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    const width = 'auto'
    const height = heightMap[size] || '100%'

    return (
        <Skeleton
            className={classNames('select--skeleton', className)}
            variant="rect"
            shape={shape}
            animate={animate}
            width={width}
            height={height}
            {...props}
            ref={ref}
        />
    )
})

type SelectSkeletonRef = SkeletonRef

type SelectSkeletonOverrideProps = 'size'

interface SelectSkeletonProps extends Omit<SkeletonProps, SelectSkeletonOverrideProps> {
    /**
     * Size of the text field
     */
    size?: SelectProps['size']
}

SelectSkeleton.bdsName = 'SelectSkeleton'

export { SelectSkeleton }

export type { SelectSkeletonProps, SelectSkeletonRef }

export default SelectSkeleton
