import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const HistoryFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<HistoryFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm-.0059-5.3647H4.9235c-.2353 0-.4117-.1765-.4117-.4118 0-.2294.1764-.4058.4117-.4058h2.6647V4.2588c0-.2294.1765-.4059.406-.4059.2293 0 .4117.1765.4117.406v3.9646c0 .2353-.1824.4118-.4118.4118Z" clipRule="evenodd" />
, 
    'HistoryFilled'
)

type HistoryFilledRef = PathIconRef

type HistoryFilledProps = PathIconProps

export {
    HistoryFilled
}

export type {
    HistoryFilledRef,
    HistoryFilledProps
}

export default HistoryFilled
