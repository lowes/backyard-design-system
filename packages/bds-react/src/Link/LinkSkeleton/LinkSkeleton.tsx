import * as React from 'react'
import classnames from 'classnames'
import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import Skeleton from '../../Skeleton'
import { ThemeContext } from '../../ThemeProvider'

const LinkSkeleton: BDSForwardRef<LinkSkeletonProps> = React.forwardRef<
    LinkSkeletonRef,
    LinkSkeletonProps
>(function LinkSkeleton (
    {
        animate = false,
        width,
        size = 'medium',
        className,
        ...props
    },
    ref,
) {

    const theme = React.useContext(ThemeContext)
    let height = ''

    if (theme.isDesktop) {
        height = (size === 'medium') ? 'size_24' : 'size_20'
    } else {
        height = (size === 'medium') ? 'size_20' : 'size_16'
    }

    return (
        <Skeleton
            variant='rect'
            height={height}
            width={width || '6rem'}
            animate={animate}
            className={classnames(className, 'Link--skeleton')}
            {...props}
            ref={ref}
        />
    )
})

type LinkSkeletonRef = HTMLDivElement

interface LinkSkeletonProps {
    animate?: boolean
    width?: string
    size?: string
    className?: string
}

LinkSkeleton.bdsName = 'LinkSkeleton'

export { LinkSkeleton }

export type { LinkSkeletonProps, LinkSkeletonRef }

export default LinkSkeleton