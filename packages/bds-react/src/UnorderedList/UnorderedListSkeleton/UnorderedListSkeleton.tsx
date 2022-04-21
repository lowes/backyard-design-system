import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'
import SkeletonWrapper from './styles'

/**
 * Backard UnorderedListSkeleton component.
 * 
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by 
 * default.
 * 
 * <UnorderedListSkeleton />
*/

const UnorderedListSkeleton: BDSForwardRef<UnorderedListSkeletonProps> = React.forwardRef<
    UnorderedListSkeletonRef,
    UnorderedListSkeletonProps
>(function UnorderedListSkeleton (
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
            className={classnames(className, 'Unordered-list--skeleton', `density--${density}`)} 
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

type UnorderedListSkeletonRef = HTMLDivElement

interface UnorderedListSkeletonProps {
    animate?: boolean
    density?: string
    items?: number
    width?: string
    className?: string
}

UnorderedListSkeleton.bdsName = 'UnorderedListSkeleton'

export { UnorderedListSkeleton }

export type { UnorderedListSkeletonProps, UnorderedListSkeletonRef }

export default UnorderedListSkeleton