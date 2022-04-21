import * as React from 'react'
import classnames from 'classnames'

import { useBackyardTheme, getShape } from '../ThemeProvider'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps'

import SkeletonWrapper from './styles'

const Skeleton: BDSForwardRef<SkeletonProps> = React.forwardRef<SkeletonRef, SkeletonProps>(
    function Skeleton(
        {
            className,
            width,
            height,
            variant = 'text',
            shape: shapeProp, // = 'rounded'
            as,
            animate = false,
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'Skeleton',
        }).context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        return (
            <SkeletonWrapper
                className={classnames(
                    className,
                    `variant--${variant}`,
                    `shape--${shape}`,
                    animate ? 'style--animated' : 'style--default',
                )}
                width={width}
                height={height}
                as={as}
                {...props}
                ref={ref}
            />
        )
    },
)

type SkeletonRef = HTMLDivElement

interface SkeletonProps extends BackyardBaseProps<SkeletonRef> {
    variant?: 'circle' | 'rect' | 'text'
    shape?: 'rounded' | 'squared'
    width?: keyof BackyardToken['sizes'] | string
    height?: keyof BackyardToken['sizes'] | string
    className?: string
    as?: React.ElementType
    animate?: boolean
}

Skeleton.bdsName = 'Skeleton'

export { Skeleton }

export type { SkeletonProps, SkeletonRef }

export default Skeleton
