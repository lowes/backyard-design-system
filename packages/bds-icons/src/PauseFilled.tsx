import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const PauseFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<PauseFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm-1-3.8765h-.5353c-.2706 0-.3941-.1411-.3941-.3588V6.2412c0-.2118.1235-.3589.3941-.3589H7c.2647 0 .3882.1471.3882.3589v3.5235c0 .2177-.1235.3588-.3882.3588Zm2.5353 0H9c-.2647 0-.3941-.1411-.3941-.3588V6.2412c0-.2118.1294-.3589.3941-.3589h.5353c.2647 0 .3882.1471.3882.3589v3.5235c0 .2177-.1235.3588-.3882.3588Z" clipRule="evenodd" />
, 
    'PauseFilled'
)

type PauseFilledRef = PathIconRef

type PauseFilledProps = PathIconProps

export {
    PauseFilled
}

export type {
    PauseFilledRef,
    PauseFilledProps
}

export default PauseFilled
