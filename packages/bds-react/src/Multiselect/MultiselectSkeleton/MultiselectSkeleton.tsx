import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import SelectSkeleton from '../../Select/SelectSkeleton'
import type { SelectSkeletonProps, SelectSkeletonRef } from '../../Select/SelectSkeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

/**
 * Backyard React Multiselect Skeleton
 */
const MultiselectSkeleton: BDSForwardRef<MultiselectSkeletonProps> = React.forwardRef<
    MultiselectSkeletonRef,
    MultiselectSkeletonProps
>(function MultiselectSkeleton(
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
        name: 'MultiselectSkeleton',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <SelectSkeleton
            className={classNames('multiselect--skeleton', className)}
            variant="rect"
            shape={shape}
            animate={animate}
            size={size}
            {...props}
            ref={ref}
        />
    )
})

type MultiselectSkeletonRef = SelectSkeletonRef

interface MultiselectSkeletonProps extends SelectSkeletonProps {}

MultiselectSkeleton.bdsName = 'MultiselectSkeleton'

export { MultiselectSkeleton }

export type { MultiselectSkeletonProps, MultiselectSkeletonRef }

export default MultiselectSkeleton
