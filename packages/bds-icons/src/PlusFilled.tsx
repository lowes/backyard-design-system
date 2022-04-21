import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const PlusFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<PlusFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6Zm.5-2.9737c0 .2315-.3036.3487-.5.3487-.1964 0-.5-.1563-.5-.3487V8.5H5.0499c-.1924 0-.3568-.3036-.3568-.5 0-.1964.1644-.5.3568-.5H7.5V4.9737c0-.1924.3036-.3487.5-.3487.1964 0 .5.1563.5.3487V7.5h2.4501c.1924 0 .3568.3036.3568.5 0 .1964-.1644.5-.3568.5H8.5v2.5263Z" clipRule="evenodd" />
, 
    'PlusFilled'
)

type PlusFilledRef = PathIconRef

type PlusFilledProps = PathIconProps

export {
    PlusFilled
}

export type {
    PlusFilledRef,
    PlusFilledProps
}

export default PlusFilled
