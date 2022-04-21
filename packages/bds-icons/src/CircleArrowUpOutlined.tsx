import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CircleArrowUpOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<CircleArrowUpOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2235 5-5 5Zm2.2721-3.586c.312 0 .4575-.246.2773-.4627L8.3515 6.3175c-.1525-.2018-.5407-.192-.7002 0L5.4535 8.9513c-.1734.2019-.0347.4628.2773.4628h4.5413Z" clipRule="evenodd" />
, 
    'CircleArrowUpOutlined'
)

type CircleArrowUpOutlinedRef = PathIconRef

type CircleArrowUpOutlinedProps = PathIconProps

export {
    CircleArrowUpOutlined
}

export type {
    CircleArrowUpOutlinedRef,
    CircleArrowUpOutlinedProps
}

export default CircleArrowUpOutlined
