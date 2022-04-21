import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import Skeleton from '../../Skeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'
import type { TextFieldProps } from '../TextField'

// Height values for skeleton 
// depending on `size` prop value
const heightMap = {
    small: '2.375rem', // 38px
    medium: '2.875rem', // 46px
    large: '3.375rem', // 54px
    jumbo: '4rem', // 64px
}

/**
 * Backyard React Text Field Skeleton
 */
const TextFieldSkeleton: BDSForwardRef<TextFieldSkeletonProps> = React.forwardRef<
    TextFieldSkeletonRef,
    TextFieldSkeletonProps
>(function TextFieldSkeleton(
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
        name: 'TextFieldSkeleton',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    const width = 'auto'
    const height = heightMap[size] || '100%'

    return (
        <Skeleton
            className={classNames('textfield--skeleton', className)}
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

type TextFieldSkeletonRef = SkeletonRef

type TextFieldSkeletonOverrideProps = 'size'

interface TextFieldSkeletonProps extends Omit<SkeletonProps, TextFieldSkeletonOverrideProps> {
    /**
     * Size of the text field
     */
    size?: TextFieldProps['size']
}

TextFieldSkeleton.bdsName = 'TextFieldSkeleton'

export { TextFieldSkeleton }

export type { TextFieldSkeletonProps, TextFieldSkeletonRef }

export default TextFieldSkeleton
