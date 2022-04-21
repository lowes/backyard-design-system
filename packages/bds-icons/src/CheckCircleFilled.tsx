import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CheckCircleFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<CheckCircleFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M14 8c0 3.2824-2.7176 6-6 6-3.2765 0-6-2.7176-6-6 0-3.2765 2.7176-6 5.9941-6C11.2765 2 14 4.7235 14 8Zm-8.1464.308 1.212 1.212 3.3736-3.3735a.5001.5001 0 0 1 .7072.707L7.431 10.569a.4557.4557 0 0 1-.031.0285.5.5 0 0 1-.6887-.0175L5.1465 9.0151a.5.5 0 1 1 .707-.7071Z" clipRule="evenodd" />
, 
    'CheckCircleFilled'
)

type CheckCircleFilledRef = PathIconRef

type CheckCircleFilledProps = PathIconProps

export {
    CheckCircleFilled
}

export type {
    CheckCircleFilledRef,
    CheckCircleFilledProps
}

export default CheckCircleFilled
