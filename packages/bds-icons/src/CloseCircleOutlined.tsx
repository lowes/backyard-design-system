import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CloseCircleOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<CloseCircleOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2235 5-5 5Zm2.0059-2.5059c.2588 0 .4706-.2176.4706-.4765 0-.1352-.0471-.247-.1412-.3353L8.6647 8.0118l1.6765-1.6824c.1-.1.1412-.2.1412-.3294a.4682.4682 0 0 0-.4706-.4706c-.1236 0-.2236.0412-.3236.1412l-1.694 1.6823-1.6824-1.6764c-.0824-.0941-.1941-.1353-.3236-.1353-.2588 0-.4706.2-.4706.4647 0 .1294.0471.2412.1412.3294l1.6706 1.6765-1.6706 1.6764c-.094.0824-.1412.2-.1412.3294 0 .2589.2118.4765.4706.4765.1295 0 .253-.0529.3353-.147l1.6706-1.6765 1.6765 1.6765c.0882.0882.2.147.3353.147Z" clipRule="evenodd" />
, 
    'CloseCircleOutlined'
)

type CloseCircleOutlinedRef = PathIconRef

type CloseCircleOutlinedProps = PathIconProps

export {
    CloseCircleOutlined
}

export type {
    CloseCircleOutlinedRef,
    CloseCircleOutlinedProps
}

export default CloseCircleOutlined
