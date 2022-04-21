import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const HistoryOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<HistoryOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2235 5-5 5Zm-.0059-4.3647c.2294 0 .4118-.1765.4118-.4118V4.2588c0-.2294-.1824-.4059-.4118-.4059s-.4059.1765-.4059.406v3.5588H4.9235c-.2353 0-.4117.1764-.4117.4058 0 .2353.1764.4118.4117.4118h3.0706Z" clipRule="evenodd" />
, 
    'HistoryOutlined'
)

type HistoryOutlinedRef = PathIconRef

type HistoryOutlinedProps = PathIconProps

export {
    HistoryOutlined
}

export type {
    HistoryOutlinedRef,
    HistoryOutlinedProps
}

export default HistoryOutlined
