import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import AlertSkeleton from '../../Alert/AlertSkeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

/**
 * Backyard React Toast Skeleton
 */
const ToastSkeleton: BDSForwardRef<ToastSkeletonProps> = React.forwardRef<
    ToastSkeletonRef,
    ToastSkeletonProps
>(function ToastSkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        animate = false,
        multiline = true,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'ToastSkeleton',
    })

    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <AlertSkeleton
            className={classNames('toast--skeleton', className)}
            shape={shape}
            animate={animate}
            multiline={multiline}
            {...props}
            ref={ref}
        />
    )
})

type ToastSkeletonRef = SkeletonRef

interface ToastSkeletonProps extends SkeletonProps {
    /**
     * Whether or not the toast is multiline
     */
    multiline?: boolean
}

ToastSkeleton.bdsName = 'ToastSkeleton'

export { ToastSkeleton }

export type { ToastSkeletonProps, ToastSkeletonRef }

export default ToastSkeleton
