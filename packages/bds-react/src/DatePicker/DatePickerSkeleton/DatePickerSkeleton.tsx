import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import SelectSkeleton from '../../Select/SelectSkeleton'
import type { SelectSkeletonProps, SelectSkeletonRef } from '../../Select/SelectSkeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

/**
 * Backyard React Date Picker Skeleton
 */
const DatePickerSkeleton: BDSForwardRef<DatePickerSkeletonProps> = React.forwardRef<
    DatePickerSkeletonRef,
    DatePickerSkeletonProps
>(function DatePickerSkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        size = 'large',
        animate = false,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'DatePickerSkeleton',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <SelectSkeleton
            className={classNames('datepicker--skeleton', className)}
            variant="rect"
            shape={shape}
            animate={animate}
            size={size}
            {...props}
            ref={ref}
        />
    )
})

type DatePickerSkeletonRef = SelectSkeletonRef

interface DatePickerSkeletonProps extends SelectSkeletonProps {}

DatePickerSkeleton.bdsName = 'DatePickerSkeleton'

export { DatePickerSkeleton }

export type { DatePickerSkeletonProps, DatePickerSkeletonRef }

export default DatePickerSkeleton
