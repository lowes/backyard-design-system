import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const MinusFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<MinusFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6Zm4-6.0028c0 .2737-.1988.5028-.4315.5028h-7.137C4.1988 8.5 4 8.271 4 7.9972c0-.2737.1988-.4972.4315-.4972h7.137c.2327 0 .4315.2235.4315.4972Z" clipRule="evenodd" />
, 
    'MinusFilled'
)

type MinusFilledRef = PathIconRef

type MinusFilledProps = PathIconProps

export {
    MinusFilled
}

export type {
    MinusFilledRef,
    MinusFilledProps
}

export default MinusFilled
