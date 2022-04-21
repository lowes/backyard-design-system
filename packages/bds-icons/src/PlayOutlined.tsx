import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const PlayOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<PlayOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2235 5-5 5Zm-1.0353-2.8353 3.1471-1.8588c.2294-.1412.2235-.4647 0-.5941l-3.147-1.8706c-.2413-.1412-.553-.0294-.553.2353v3.853c0 .2705.294.3881.553.2352Z" clipRule="evenodd" />
, 
    'PlayOutlined'
)

type PlayOutlinedRef = PathIconRef

type PlayOutlinedProps = PathIconProps

export {
    PlayOutlined
}

export type {
    PlayOutlinedRef,
    PlayOutlinedProps
}

export default PlayOutlined
