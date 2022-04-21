import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const PropaneTank: React.MemoExoticComponent<React.ForwardRefExoticComponent<PropaneTankProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.375 4.4V3.2c0-.66-.5284-1.2-1.1875-1.2h-2.375c-.6531 0-1.1875.54-1.1875 1.2v1.2C4.3128 4.4 3.25 5.474 3.25 6.8V11c0 1.116.76 2.046 1.7813 2.316v.484a.2.2 0 0 0 .2.2h5.5375a.2.2 0 0 0 .2-.2v-.484C11.99 13.052 12.75 12.116 12.75 11V6.8c0-1.326-1.0628-2.4-2.375-2.4ZM6.2933 2.8994a.3.3 0 0 1 .3-.3H9.421a.3.3 0 0 1 .3.3V4.1a.3.3 0 0 1-.3.3H6.5933a.3.3 0 0 1-.3-.3V2.8994ZM12.1355 11c0 1.0926-1.1074 1.8393-1.7605 1.8393h-4.75c-.6531 0-1.7246-.5504-1.7246-1.8393V6.8c0-.66.6234-1.7646 1.7246-1.7646h4.75c1.1619 0 1.7605 1.1046 1.7605 1.7646V11Z" />
, 
    'PropaneTank'
)

type PropaneTankRef = PathIconRef

type PropaneTankProps = PathIconProps

export {
    PropaneTank
}

export type {
    PropaneTankRef,
    PropaneTankProps
}

export default PropaneTank
