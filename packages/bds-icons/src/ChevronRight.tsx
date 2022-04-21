import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ChevronRight: React.MemoExoticComponent<React.ForwardRefExoticComponent<ChevronRightProps>> = createPathIcon(
    <path fillRule="evenodd" d="M5.252 14c.1796 0 .3315-.069.4489-.1864l5.4752-5.351c.1312-.1312.2003-.29.2003-.4626 0-.1795-.0691-.3452-.2003-.4626l-5.4683-5.344C5.5835 2.069 5.4316 2 5.252 2c-.359 0-.6283.2762-.6283.6352 0 .1657.069.3314.1795.4488L9.8298 8l-5.0265 4.916a.6557.6557 0 0 0-.1795.4488c0 .359.2692.6352.6283.6352Z" clipRule="evenodd" />
, 
    'ChevronRight'
)

type ChevronRightRef = PathIconRef

type ChevronRightProps = PathIconProps

export {
    ChevronRight
}

export type {
    ChevronRightRef,
    ChevronRightProps
}

export default ChevronRight
