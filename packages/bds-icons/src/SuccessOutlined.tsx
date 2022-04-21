import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const SuccessOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<SuccessOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2235 5-5 5Zm-.7412-2.0588c.1941 0 .353-.0941.4765-.2765l2.9059-4.5706c.0764-.1176.1412-.253.1412-.3823 0-.2706-.2353-.4353-.4824-.4353-.1529 0-.3059.0882-.4118.2647l-2.653 4.253-1.3646-1.7648c-.1353-.1765-.2765-.2412-.4353-.2412-.2588 0-.4647.2118-.4647.4765 0 .1294.053.253.1412.3647l1.6411 2.0353c.1589.1941.3118.2765.506.2765Z" clipRule="evenodd" />
, 
    'SuccessOutlined'
)

type SuccessOutlinedRef = PathIconRef

type SuccessOutlinedProps = PathIconProps

export {
    SuccessOutlined
}

export type {
    SuccessOutlinedRef,
    SuccessOutlinedProps
}

export default SuccessOutlined
