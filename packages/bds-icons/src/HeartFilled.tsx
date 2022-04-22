import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const HeartFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<HeartFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 13.5468c.1269 0 .3082-.0846.441-.1631C11.843 11.2085 14 8.6767 14 6.1027c0-2.139-1.4683-3.6495-3.3656-3.6495-1.1782 0-2.0846.6525-2.6344 1.6495-.5378-.991-1.4562-1.6495-2.6344-1.6495C3.4683 2.4532 2 3.9638 2 6.1027c0 2.574 2.1571 5.1058 5.565 7.281.1268.0785.3081.1631.435.1631Z" clipRule="evenodd" />
, 
    'HeartFilled'
)

type HeartFilledRef = PathIconRef

type HeartFilledProps = PathIconProps

export {
    HeartFilled
}

export type {
    HeartFilledRef,
    HeartFilledProps
}

export default HeartFilled
