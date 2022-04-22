import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'
import SkeletonWrapper from './styles'

/**
 * Backard OrderedListSkeleton component.
 * 
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by 
 * default.
 * 
 * <OrderedListSkeleton />
*/

const OrderedListSkeleton: BDSForwardRef<OrderedListSkeletonProps> = React.forwardRef<
    OrderedListSkeletonRef,
    OrderedListSkeletonProps
>(function OrderedListSkeleton (
    {
        animate = false,
        items = 4,
        density = 'normal',
        width = '18.75rem',
        className,
        ...props
    },
    ref,
) {

    const rects = [...new Array(items)]

    return (
        <SkeletonWrapper 
            className={classnames(className, 'ordered-list--skeleton', `density--${density}`)} 
            width={width}
            {...props}
            ref={ref}
        >
            {
                rects.map((item, index) => (
                    <Skeleton 
                        key={`skeleton-ol-${index}`}
                        variant='rect'
                        height='size_24'
                        width='100%'
                        animate={animate}
                        className='list-item--skeleton'
                    />
                ))
            }
        </SkeletonWrapper>
    )
})

type OrderedListSkeletonRef = HTMLDivElement

interface OrderedListSkeletonProps {
    animate?: boolean
    density?: string
    items?: number
    width?: string
    className?: string
}

OrderedListSkeleton.bdsName = 'OrderedListSkeleton'

export { OrderedListSkeleton }

export type { OrderedListSkeletonProps, OrderedListSkeletonRef }

export default OrderedListSkeleton