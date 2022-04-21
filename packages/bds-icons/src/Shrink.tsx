import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Shrink: React.MemoExoticComponent<React.ForwardRefExoticComponent<ShrinkProps>> = createPathIcon(
    <path fillRule="evenodd" d="M6.56 7.3928c.6133 0 .968-.3607.968-.974V3.0882c0-.3127-.2345-.5591-.5531-.5591-.3186 0-.547.2404-.547.559v.505l.1262 2.0983L4.9669 4.026 3.1212 2.1623C3.019 2.0541 2.8807 2 2.7364 2c-.3427 0-.5952.2285-.5952.5651 0 .1563.0602.3066.1684.4149l1.8517 1.8517 1.6653 1.5811-2.0982-.1202h-.505c-.3186 0-.5651.2224-.5651.547 0 .3187.2405.5532.5651.5532h3.3367ZM13.2696 14c.3367 0 .5892-.2285.5892-.5651 0-.1563-.0541-.3066-.1624-.4149l-1.8937-1.8937-1.6714-1.5812 2.1042.1202h.5712c.3186 0 .5651-.2224.5651-.541 0-.3247-.2405-.5532-.5651-.5532H9.4038c-.6133 0-.968.3548-.968.968v3.3968c0 .3186.2285.5591.5531.5591.3187 0 .5471-.2345.5471-.5591v-.5712l-.1262-2.0922 1.5871 1.6654 1.8878 1.8998c.1022.1082.2345.1623.3848.1623Z" clipRule="evenodd" />
, 
    'Shrink'
)

type ShrinkRef = PathIconRef

type ShrinkProps = PathIconProps

export {
    Shrink
}

export type {
    ShrinkRef,
    ShrinkProps
}

export default Shrink
