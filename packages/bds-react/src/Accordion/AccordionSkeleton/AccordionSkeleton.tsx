import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import Skeleton from '../../Skeleton'
import type { SkeletonProps, SkeletonRef } from '../../Skeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'
import type { AccordionProps } from '../Accordion'

/**
 * Backyard React Accordion Skeleton
 */
const AccordionSkeleton: BDSForwardRef<AccordionSkeletonProps> = React.forwardRef<
    AccordionSkeletonRef,
    AccordionSkeletonProps
>(function AccordionSkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        size = 'medium',
        animate = false,
        style,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'AccordionSkeleton',
    })

    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    // Height values for skeleton
    // depending on `size` prop value
    const heightMap = {
        small: theme.sizes.size_40,
        medium: theme.sizes.size_48,
        large: theme.sizes.size_56
    }

    const width = 'auto'
    const height = heightMap[size] || '100%'

    return (
        <Skeleton
            className={classNames('accordion--skeleton', className)}
            variant="rect"
            shape={shape}
            animate={animate}
            width={width}
            height={height}
            style={{
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                ...style,
            }}
            {...props}
            ref={ref}
        />
    )
})

type AccordionSkeletonRef = SkeletonRef

type AccordionSkeletonOverrideProps = 'size'

interface AccordionSkeletonProps extends Omit<SkeletonProps, AccordionSkeletonOverrideProps> {
    /**
     * Size of the accordion
     */
    size?: AccordionProps['size']
}

AccordionSkeleton.bdsName = 'AccordionSkeleton'

export { AccordionSkeleton }

export type { AccordionSkeletonProps, AccordionSkeletonRef }

export default AccordionSkeleton
