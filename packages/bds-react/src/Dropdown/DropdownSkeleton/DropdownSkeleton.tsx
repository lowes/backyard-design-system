import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import SelectSkeleton from '../../Select/SelectSkeleton'
import type { SelectSkeletonProps, SelectSkeletonRef } from '../../Select/SelectSkeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

/**
 * Backyard React Dropdown Skeleton
 */
const DropdownSkeleton: BDSForwardRef<DropdownSkeletonProps> = React.forwardRef<
    DropdownSkeletonRef,
    DropdownSkeletonProps
>(function DropdownSkeleton(
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
        name: 'DropdownSkeleton',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <SelectSkeleton
            className={classNames('dropdown--skeleton', className)}
            variant="rect"
            shape={shape}
            animate={animate}
            size={size}
            {...props}
            ref={ref}
        />
    )
})

type DropdownSkeletonRef = SelectSkeletonRef

interface DropdownSkeletonProps extends SelectSkeletonProps {}

DropdownSkeleton.bdsName = 'DropdownSkeleton'

export { DropdownSkeleton }

export type { DropdownSkeletonProps, DropdownSkeletonRef }

export default DropdownSkeleton
