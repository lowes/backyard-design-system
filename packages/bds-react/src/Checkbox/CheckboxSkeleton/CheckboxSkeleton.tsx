import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'
import SkeletonWrapper from './styles'

/**
 * Backard CheckboxSkeleton component.
 * 
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by 
 * default.
 * 
 * <CheckboxSkeleton />
*/

const CheckboxSkeleton: BDSForwardRef<CheckboxSkeletonProps> = React.forwardRef<
    CheckboxSkeletonRef,
    CheckboxSkeletonProps
>(function CheckboxSkeleton (
    {
        animate = false,
        labelWidth = 'size_84',
        helperWidth = 'size_84',
        withLabel = false,
        withHelper = false,
        className,
        ...props
    },
    ref,
) {

    return (
        <SkeletonWrapper clasName={classnames(className, 'Checkbox--skeleton')} {...props} ref={ref}>
            <div className='label-wrapper'>
                <Skeleton 
                    variant='rect'
                    height='size_20'
                    width='size_20'
                    animate={animate}
                />
                {
                    (withLabel) ?
                        <Skeleton
                            variant='rect'
                            height='size_20'
                            width={labelWidth}
                            animate={animate}
                            className='label--skeleton'
                        /> : null
                }
            </div>
            {
                (withHelper) ?
                    <Skeleton
                        variant='rect'
                        height='size_16'
                        width={helperWidth}
                        className='helper-text--skeleton'
                        animate={animate}
                    /> : null
            }
        </SkeletonWrapper>
    )
})

type CheckboxSkeletonRef = HTMLDivElement

interface CheckboxSkeletonProps {
    animate?: boolean
    withLabel?: boolean
    withHelper?: boolean
    labelWidth?: string
    helperWidth?: string
    className?: string
}

CheckboxSkeleton.bdsName = 'CheckboxSkeleton'

export { CheckboxSkeleton }

export type { CheckboxSkeletonProps, CheckboxSkeletonRef }

export default CheckboxSkeleton