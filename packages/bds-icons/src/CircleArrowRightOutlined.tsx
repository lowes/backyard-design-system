import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CircleArrowRightOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<CircleArrowRightOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2235 5-5 5ZM6.8 5.7309c0-.312.2462-.4576.4628-.2773l2.6337 2.1978c.2019.1525.192.5408 0 .7003l-2.6337 2.1978c-.2019.1733-.4628.0347-.4628-.2773V5.7309Z" clipRule="evenodd" />
, 
    'CircleArrowRightOutlined'
)

type CircleArrowRightOutlinedRef = PathIconRef

type CircleArrowRightOutlinedProps = PathIconProps

export {
    CircleArrowRightOutlined
}

export type {
    CircleArrowRightOutlinedRef,
    CircleArrowRightOutlinedProps
}

export default CircleArrowRightOutlined
