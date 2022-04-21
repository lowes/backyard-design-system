import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import Skeleton from '../../Skeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

/**
 * Backyard React Alert Skeleton
 */
const AlertSkeleton: BDSForwardRef<AlertSkeletonProps> = React.forwardRef<
    AlertSkeletonRef,
    AlertSkeletonProps
>(function AlertSkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        multiline = false,
        animate = false,
        style,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'AlertSkeleton',
    })

    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    const height = !multiline
        ? theme.sizes.size_56
        : theme.sizes.size_88

    return (
        <Skeleton
            className={classNames('alert--skeleton', className)}
            variant="rect"
            shape={shape}
            animate={animate}
            width="100%"
            height={height}
            style={{
                ...style,
            }}
            {...props}
            ref={ref}
        />
    )
})

type AlertSkeletonRef = SkeletonRef

interface AlertSkeletonProps extends SkeletonProps {
    /**
     * Whether or not the alert is multiline
     */
    multiline?: boolean
}

AlertSkeleton.bdsName = 'AlertSkeleton'

export { AlertSkeleton }

export type { AlertSkeletonProps, AlertSkeletonRef }

export default AlertSkeleton
