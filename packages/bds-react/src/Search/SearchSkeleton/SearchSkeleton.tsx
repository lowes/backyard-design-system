import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import TextFieldSkeleton from '../../TextField/TextFieldSkeleton'
import type {
    TextFieldSkeletonProps,
    TextFieldSkeletonRef,
} from '../../TextField/TextFieldSkeleton'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

/**
 * Backyard React Search Skeleton
 */
const SearchSkeleton: BDSForwardRef<SearchSkeletonProps> = React.forwardRef<
    SearchSkeletonRef,
    SearchSkeletonProps
>(function SearchSkeleton(
    {
        className,
        shape: shapeProp, // = 'rounded',
        animate = false,
        size = 'large',
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'SearchSkeleton',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <TextFieldSkeleton
            className={classNames('search--skeleton', className)}
            variant="rect"
            shape={shape}
            animate={animate}
            size={size}
            {...props}
            ref={ref}
        />
    )
})

type SearchSkeletonRef = TextFieldSkeletonRef

interface SearchSkeletonProps extends TextFieldSkeletonProps {}

SearchSkeleton.bdsName = 'SearchSkeleton'

export { SearchSkeleton }

export type { SearchSkeletonProps, SearchSkeletonRef }

export default SearchSkeleton
