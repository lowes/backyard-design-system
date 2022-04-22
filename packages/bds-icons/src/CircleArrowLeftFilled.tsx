import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CircleArrowLeftFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<CircleArrowLeftFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm1.1821-8.4984v4.5629c0 .32-.2617.448-.4648.2752L6.0866 8.1318c-.185-.16-.194-.544 0-.704l2.6307-2.2014c.2166-.1792.4648-.0448.4648.2752Z" clipRule="evenodd" />
, 
    'CircleArrowLeftFilled'
)

type CircleArrowLeftFilledRef = PathIconRef

type CircleArrowLeftFilledProps = PathIconProps

export {
    CircleArrowLeftFilled
}

export type {
    CircleArrowLeftFilledRef,
    CircleArrowLeftFilledProps
}

export default CircleArrowLeftFilled
