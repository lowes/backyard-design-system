import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Minus: React.MemoExoticComponent<React.ForwardRefExoticComponent<MinusProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.3527 8.651c.3491 0 .6473-.2983.6473-.6546 0-.3564-.2982-.6473-.6473-.6473H2.6473C2.2982 7.349 2 7.64 2 7.9964c0 .3563.2982.6545.6473.6545h10.7054Z" clipRule="evenodd" />
, 
    'Minus'
)

type MinusRef = PathIconRef

type MinusProps = PathIconProps

export {
    Minus
}

export type {
    MinusRef,
    MinusProps
}

export default Minus
