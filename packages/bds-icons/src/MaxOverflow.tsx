import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const MaxOverflow: React.MemoExoticComponent<React.ForwardRefExoticComponent<MaxOverflowProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.0762 2C6.7412 3.5532 5.849 4.7298 5.4 5.5296l1.405.6594c.5127-.8126.9365-1.4262 1.2712-1.841.0152 0 1.4108 1.8095 1.9885 3.0506.0002.0079-.1532.0828-.4602.2248l1.6266.5766.5689-1.689-.3366.1849C10.7583 5.3305 9.6292 3.7652 8.0762 2ZM4.1713 6.589 6.0008 6.2l.5409 1.5174-.4726-.217C4.889 9.812 5.0659 11.2602 6.6 11.8448c.002.0041-.0922.4559-.2826 1.3553-1.6762-.5578-2.5142-1.6541-2.5142-3.2889-.037-.6823.2504-1.7108.8625-3.0854l-.4944-.2367ZM12.2 9.895c0 2.364-1.4439 3.5623-4.3317 3.5951L7.8392 14 6.8 12.6239l1.1781-1.1026c-.0191.3463-.0272.5194-.024.5192 2.457 0 3.2896-1.1405 2.4978-3.4216L11.8509 8c.2327.6017.3491 1.2333.3491 1.895Z" />
, 
    'MaxOverflow'
)

type MaxOverflowRef = PathIconRef

type MaxOverflowProps = PathIconProps

export {
    MaxOverflow
}

export type {
    MaxOverflowRef,
    MaxOverflowProps
}

export default MaxOverflow
