import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import SwitchSkeletonWrapper from './styles'

import Skeleton from '../../Skeleton'

/**
 * Backyard's Switch Skeleton component
 * 
 * Returns a pill shaped Skeleton rect of a predefined height and width.
 * These can not be overwritten. Optional boolean parameter of `withLabel`
 * to display a Skeleton rect as text next to the switch.
 */

const SwitchSkeleton: BDSForwardRef<SwitchSkeletonProps> = React.forwardRef<
    SwitchSkeletonRef,
    SwitchSkeletonProps
>(function SwitchSkeleton (
    {
        size = 'large',
        withLabel = false,
        animate = false,
        className,
        ...props
    },
    ref,
) {



    return (
        <SwitchSkeletonWrapper className={classnames(className, 'switch--skeleton')} {...props} ref={ref}>
            <Skeleton 
                variant='rect'
                height={(size === 'small') ? 'size_16' : 'size_24'}
                width={(size === 'small') ? '2.125rem' : '2.75rem'}
                animate={animate}
                style={{borderRadius: '500px'}}
            />
            {
                (withLabel) ?
                    <Skeleton 
                        variant='rect'
                        height='size_20'
                        width='size_84'
                        animate={animate}
                        className='skeleton--label'
                    /> :
                    null
            }
        </SwitchSkeletonWrapper>
    )
})

type SwitchSkeletonRef = HTMLDivElement

interface SwitchSkeletonProps {
    animate?: boolean 
    size?: string
    withLabel?: boolean
    className?: string
}

SwitchSkeleton.bdsName = 'SwitchSkeleton'

export { SwitchSkeleton }

export type { SwitchSkeletonProps, SwitchSkeletonRef }

export default SwitchSkeleton