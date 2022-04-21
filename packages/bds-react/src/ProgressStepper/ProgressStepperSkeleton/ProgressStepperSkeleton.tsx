import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'
import { StepSkeleton, HorizontalWrapper, VerticalWrapper } from './styles'

const ProgressStepperSkeleton: BDSForwardRef<ProgressStepperSkeletonProps> = React.forwardRef<
    ProgressStepperSkeletonRef,
    ProgressStepperSkeletonProps
>(function ProgressStepperSkeleton (
    {
        animate = false,
        steps = 4,
        size = 'large',
        withCaption = false,
        className,
        direction = 'row',
        ...props
    },
    ref,
) {

    const arr = [...new Array(steps)]
    let Component

    if (direction === 'row') {
        Component = () => (
            <HorizontalWrapper 
                className={classnames(className, 'progress-stepper--skeleton', `size--${size}`, `direction--${direction}`)}
                {...props}
                ref={ref}
            >
            {
                arr.map((item, index) => (
                    <div style={{position: 'relative', width: '100%'}} >
                        <StepSkeleton key={`step--${index}`}>
                            <Skeleton 
                                variant='circle' 
                                width='2.5rem' 
                                height='2.5rem'
                                animate={animate} 
                                className='indicator' 
                            />
                            <Skeleton 
                                variant='rect' 
                                width='size_88' 
                                height='size_16'
                                animate={animate} 
                                className='heading'
                            />
                            { (withCaption) ? 
                                <Skeleton 
                                    variant='rect' 
                                    width='size_128' 
                                    height='size_14'
                                    animate={animate} 
                                    className='caption'
                                /> : null }
                        </StepSkeleton>
                        {
                            (index !== 0) ?
                                <div className='progress-step-connector'>
                                    <Skeleton 
                                        variant='rect' 
                                        height='size_2' 
                                        width='100%' 
                                        animate={animate}/>
                                </div> : null
                        }
                        
                    </div>
                ))
            }
            </HorizontalWrapper>
        )
    } else {
        Component = () => (
            <VerticalWrapper
                className={classnames(className, 'progress-stepper--skeleton', `size--${size}`, `direction--${direction}`)}
                {...props}
                ref={ref}
            >
            {
                arr.map((item, index) => (
                    <div style={{position: 'relative', width: '100%' }} >
                        <StepSkeleton key={`step--${index}`} className='skeleton--step'>
                            <Skeleton 
                                variant='circle' 
                                width={(size === 'large') ? '2.625rem' : '2.375rem'} 
                                height={(size === 'large') ? '2.625rem' : '2.375rem'} 
                                animate={animate} 
                                className='indicator'
                            />
                            <div className='label-group'>
                                <Skeleton 
                                    variant='rect' 
                                    width='size_88' 
                                    height={(size === 'large') ? 'size_16' : 'size_14'} 
                                    animate={animate} 
                                    className='heading' 
                                />
                                { (withCaption) ? 
                                    <Skeleton 
                                        variant='rect' 
                                        width='size_128' 
                                        height={(size === 'large') ? 'size_14' : 'size_12'} 
                                        animate={animate} 
                                        className='caption' 
                                    /> : null }
                            </div>
                        </StepSkeleton>
                        {
                            (index !== 0) ?
                                <div className='progress-step-connector'>
                                    <Skeleton variant='rect' height='100%' width='size_2' animate={animate}/>
                                </div> : null
                        }
                        
                    </div>
                ))
            }
            </VerticalWrapper>
        )
    }

    return (
        <Component />
    )
})

type ProgressStepperSkeletonRef = HTMLDivElement

interface ProgressStepperSkeletonProps {
    animate?: boolean
    steps?: number
    size?: string
    withCaption?: boolean
    className?: string
    direction?: string
}

ProgressStepperSkeleton.bdsName = 'ProgressStepperSkeleton'

export { ProgressStepperSkeleton }

export type { ProgressStepperSkeletonProps, ProgressStepperSkeletonRef }

export default ProgressStepperSkeleton