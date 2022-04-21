import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const TriangleLeft: React.MemoExoticComponent<React.ForwardRefExoticComponent<TriangleLeftProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.7076 2.8135c0-.7132-.5626-1.046-1.0577-.634l-6.02 5.0237c-.4614.3486-.4389 1.236 0 1.6006l6.02 5.0236c.4614.3962 1.0577.0792 1.0577-.6339v-10.38Z" clipRule="evenodd" />
, 
    'TriangleLeft'
)

type TriangleLeftRef = PathIconRef

type TriangleLeftProps = PathIconProps

export {
    TriangleLeft
}

export type {
    TriangleLeftRef,
    TriangleLeftProps
}

export default TriangleLeft
