import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import Skeleton from '../../Skeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

/**
 * Backyard React File Upload Skeleton
 */
const StepperSkeleton: BDSForwardRef<StepperSkeletonProps> = React.forwardRef<
    StepperSkeletonRef,
    StepperSkeletonProps
>(function StepperSkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        hideButtons = false,
        label = false,
        animate = false,
        style,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'StepperSkeleton',
    })

    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <span
            className="stepper--skeleton"
            style={{
                display: 'inline-flex',
                flexDirection: 'column',
                width: '10.125rem',
            }}
        >
            <span
                style={{
                    display: 'inline-flex',
                }}
            >
                {!hideButtons ? (
                    <Skeleton
                        className={classNames('stepper--minus', className)}
                        variant="rect"
                        style={{
                            marginRight: theme.sizes.size_1,
                            minHeight: `calc(${theme.sizes.size_52} + ${theme.sizes.size_2})`,
                            minWidth: `calc(${theme.sizes.size_52} + ${theme.sizes.size_2})`,
                        }}
                        shape={shape}
                        animate={animate}
                    />
                ) : null}
                <Skeleton
                    className={classNames('stepper--input', className)}
                    variant="rect"
                    shape={shape}
                    style={{
                        minHeight: `calc(${theme.sizes.size_52} + ${theme.sizes.size_2})`,
                        minWidth: `calc(${theme.sizes.size_52} + ${theme.sizes.size_2})`,
                        ...style,
                    }}
                    animate={animate}
                    {...props}
                    ref={ref}
                />
                {!hideButtons ? (
                    <Skeleton
                        className={classNames('stepper--plus', className)}
                        variant="rect"
                        style={{
                            marginLeft: theme.sizes.size_1,
                            minHeight: `calc(${theme.sizes.size_52} + ${theme.sizes.size_2})`,
                            minWidth: `calc(${theme.sizes.size_52} + ${theme.sizes.size_2})`,
                        }}
                        animate={animate}
                        shape={shape}
                    />
                ) : null}
            </span>
            {label ? (
                <span
                    style={{
                        display: 'inline-flex',
                        justifyContent: 'center',
                    }}
                >
                    <Skeleton
                        className={classNames('stepper--label', className)}
                        variant="text"
                        style={{
                            marginTop: theme.sizes.size_8,
                            width: theme.sizes.size_84,
                            height: theme.sizes.size_16,
                        }}
                        animate={animate}
                        shape={shape}
                    />
                </span>
            ) : null}
        </span>
    )
})

type StepperSkeletonRef = SkeletonRef

type StepperSkeletonOverrideProps = 'label'

interface StepperSkeletonProps extends Omit<SkeletonProps, StepperSkeletonOverrideProps> {
    /**
     * Whether or not buttons are hidden
     */
    hideButtons?: boolean
    /**
     * Whether or not label is visible
     */
    label?: boolean
}

StepperSkeleton.bdsName = 'StepperSkeleton'

export { StepperSkeleton }

export type { StepperSkeletonProps, StepperSkeletonRef }

export default StepperSkeleton
