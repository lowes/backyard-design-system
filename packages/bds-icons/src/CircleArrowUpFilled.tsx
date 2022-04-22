import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CircleArrowUpFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<CircleArrowUpFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm2.28-4.5995H5.7171c-.32 0-.448-.2617-.2752-.4648L7.65 6.305c.1599-.185.5439-.194.7039 0l2.2014 2.6307c.1792.2166.0448.4648-.2752.4648Z" clipRule="evenodd" />
, 
    'CircleArrowUpFilled'
)

type CircleArrowUpFilledRef = PathIconRef

type CircleArrowUpFilledProps = PathIconProps

export {
    CircleArrowUpFilled
}

export type {
    CircleArrowUpFilledRef,
    CircleArrowUpFilledProps
}

export default CircleArrowUpFilled
