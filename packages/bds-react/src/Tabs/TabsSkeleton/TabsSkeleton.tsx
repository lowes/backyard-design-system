import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'

/**
 * Backyards TabsSkeleton component
 * 
 * Returns a Skeleton Rect of a predefined height that changes between two
 * values depending on if the viewport is 'desktop' or 'mobile.' Width
 * defaults to 100% but can be overwritten if needed.
 * 
 * <TabsSkeleton />
 */

const TabsSkeleton: BDSForwardRef<TabsSkeletonProps> = React.forwardRef<
    TabsSkeletonRef,
    TabsSkeletonProps
>(function TabsSkeleton (
    {
        animate = false,
        className,
        width = '100%',
        ...props
    },
    ref,
) {
    return (
        <Skeleton
            className={classnames(className, 'tabs--skeleton')}
            variant='rect'
            width={width}
            height='2.5rem'
            animate={animate}
            {...props}
            ref={ref}
        />
    )
})

type TabsSkeletonRef = HTMLDivElement

interface TabsSkeletonProps {
    width?: string
    animate?: boolean
    className?: string
}

TabsSkeleton.bdsName = 'TabsSkeleton'

export { TabsSkeleton }

export type { TabsSkeletonProps, TabsSkeletonRef }

export default TabsSkeleton