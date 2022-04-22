import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const PlayFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<PlayFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm-1.653-3.9765v-4.047c0-.2706.3236-.3883.5824-.2412l3.3 1.9588c.2412.1412.2471.4765 0 .6236l-3.3 1.9529c-.2765.1647-.5823.0353-.5823-.2471Z" clipRule="evenodd" />
, 
    'PlayFilled'
)

type PlayFilledRef = PathIconRef

type PlayFilledProps = PathIconProps

export {
    PlayFilled
}

export type {
    PlayFilledRef,
    PlayFilledProps
}

export default PlayFilled
