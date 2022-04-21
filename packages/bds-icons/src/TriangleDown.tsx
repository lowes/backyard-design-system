import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const TriangleDown: React.MemoExoticComponent<React.ForwardRefExoticComponent<TriangleDownProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.1865 4.2923c.7132 0 1.046.5626.6339 1.0577l-5.0236 6.0201c-.3486.4613-1.236.4388-1.6006 0l-5.0236-6.02c-.3962-.4614-.0793-1.0578.6339-1.0578h10.38Z" clipRule="evenodd" />
, 
    'TriangleDown'
)

type TriangleDownRef = PathIconRef

type TriangleDownProps = PathIconProps

export {
    TriangleDown
}

export type {
    TriangleDownRef,
    TriangleDownProps
}

export default TriangleDown
