import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const LargeView: React.MemoExoticComponent<React.ForwardRefExoticComponent<LargeViewProps>> = createPathIcon(
    <path fillRule="evenodd" d="M3 2c-.5523 0-1 .4477-1 1v7c0 .5523.4477 1 1 1h10c.5523 0 1-.4477 1-1V3c0-.5523-.4477-1-1-1H3ZM2.6875 12.625a.6875.6875 0 1 0 0 1.375h10.625a.6875.6875 0 1 0 0-1.375H2.6875Z" />
, 
    'LargeView'
)

type LargeViewRef = PathIconRef

type LargeViewProps = PathIconProps

export {
    LargeView
}

export type {
    LargeViewRef,
    LargeViewProps
}

export default LargeView
