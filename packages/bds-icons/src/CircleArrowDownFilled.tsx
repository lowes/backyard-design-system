import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CircleArrowDownFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<CircleArrowDownFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M14 8c0 3.2824-2.7176 6-6 6-3.2765 0-6-2.7176-6-6 0-3.2765 2.7176-6 5.9941-6C11.2765 2 14 4.7235 14 8ZM5.7171 6.5995H10.28c.32 0 .4544.2482.2752.4648L8.3538 9.695c-.16.194-.544.185-.704 0L5.442 7.0643c-.1728-.203-.0448-.4648.2751-.4648Z" clipRule="evenodd" />
, 
    'CircleArrowDownFilled'
)

type CircleArrowDownFilledRef = PathIconRef

type CircleArrowDownFilledProps = PathIconProps

export {
    CircleArrowDownFilled
}

export type {
    CircleArrowDownFilledRef,
    CircleArrowDownFilledProps
}

export default CircleArrowDownFilled
