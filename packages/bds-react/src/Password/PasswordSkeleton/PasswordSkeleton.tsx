import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import TextFieldSkeleton from '../../TextField/TextFieldSkeleton'
import type {
    TextFieldSkeletonProps,
    TextFieldSkeletonRef,
} from '../../TextField/TextFieldSkeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

/**
 * Backyard React Password Skeleton
 */
const PasswordSkeleton: BDSForwardRef<PasswordSkeletonProps> = React.forwardRef<
    PasswordSkeletonRef,
    PasswordSkeletonProps
>(function PasswordSkeleton(
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
        name: 'PasswordSkeleton',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <TextFieldSkeleton
            className={classNames('password--skeleton', className)}
            variant="rect"
            shape={shape}
            animate={animate}
            size={size}
            {...props}
            ref={ref}
        />
    )
})

type PasswordSkeletonRef = TextFieldSkeletonRef

interface PasswordSkeletonProps extends TextFieldSkeletonProps {}

PasswordSkeleton.bdsName = 'PasswordSkeleton'

export { PasswordSkeleton }

export type { PasswordSkeletonProps, PasswordSkeletonRef }

export default PasswordSkeleton
