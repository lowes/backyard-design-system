import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CheckCircleOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<CheckCircleOutlinedProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="m5.8536 8.308 1.212 1.212 3.3736-3.3735a.5001.5001 0 0 1 .7072.707L7.431 10.569a.4557.4557 0 0 1-.031.0285.5.5 0 0 1-.6887-.0175L5.1465 9.0151a.5.5 0 1 1 .707-.7071Z" /><path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2236 5-5 5Z" clipRule="evenodd" /></React.Fragment>
, 
    'CheckCircleOutlined'
)

type CheckCircleOutlinedRef = PathIconRef

type CheckCircleOutlinedProps = PathIconProps

export {
    CheckCircleOutlined
}

export type {
    CheckCircleOutlinedRef,
    CheckCircleOutlinedProps
}

export default CheckCircleOutlined
