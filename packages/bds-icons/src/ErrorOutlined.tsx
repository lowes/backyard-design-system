import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ErrorOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<ErrorOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2235 5-5 5Zm2.3647-4.5c.3294 0 .5529-.1706.5529-.4824 0-.3176-.2117-.5-.5529-.5H5.6294c-.3412 0-.5588.1824-.5588.5 0 .3118.2294.4824.5588.4824h4.7353Z" clipRule="evenodd" />
, 
    'ErrorOutlined'
)

type ErrorOutlinedRef = PathIconRef

type ErrorOutlinedProps = PathIconProps

export {
    ErrorOutlined
}

export type {
    ErrorOutlinedRef,
    ErrorOutlinedProps
}

export default ErrorOutlined
