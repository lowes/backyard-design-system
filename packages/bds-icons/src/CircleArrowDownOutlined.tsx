import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CircleArrowDownOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<CircleArrowDownOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2235 5-5 5Zm2.2691-6.4175c.312 0 .4576.2462.2773.4628L8.3486 9.679c-.1525.2019-.5408.192-.7003 0L5.4505 7.0453c-.1733-.2019-.0347-.4628.2773-.4628h4.5413Z" clipRule="evenodd" />
, 
    'CircleArrowDownOutlined'
)

type CircleArrowDownOutlinedRef = PathIconRef

type CircleArrowDownOutlinedProps = PathIconProps

export {
    CircleArrowDownOutlined
}

export type {
    CircleArrowDownOutlinedRef,
    CircleArrowDownOutlinedProps
}

export default CircleArrowDownOutlined
