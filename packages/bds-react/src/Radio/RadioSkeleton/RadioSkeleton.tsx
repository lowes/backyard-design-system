import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'
import SkeletonWrapper from './styles'

/**
 * Backard RadioSkeleton component.
 * 
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by 
 * default.
 * 
 * <RadioSkeleton />
*/

const RadioSkeleton: BDSForwardRef<RadioSkeletonProps> = React.forwardRef<
    RadioSkeletonRef,
    RadioSkeletonProps
>(function RadioSkeleton (
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
        <SkeletonWrapper clasName={classnames(className, 'radio--skeleton')} {...props} ref={ref}>
            <div className='label-wrapper'>
                <Skeleton 
                    variant='circle'
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

type RadioSkeletonRef = HTMLDivElement

interface RadioSkeletonProps {
    animate?: boolean
    withLabel?: boolean
    withHelper?: boolean
    labelWidth?: string
    helperWidth?: string
    className?: string
}

RadioSkeleton.bdsName = 'RadioSkeleton'

export { RadioSkeleton }

export type { RadioSkeletonProps, RadioSkeletonRef }

export default RadioSkeleton