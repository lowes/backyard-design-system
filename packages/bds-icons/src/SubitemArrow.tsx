import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const SubitemArrow: React.MemoExoticComponent<React.ForwardRefExoticComponent<SubitemArrowProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.4774 11.7826v1.5216c0 .7043.4755.8803 1.0188.4989l3.0856-2.1911c.4463-.3228.4366-.7923 0-1.1053l-3.0953-2.1812c-.5336-.3815-1.0091-.1956-1.0091.489v1.6638H3.8043a.5.5 0 0 1-.5-.5l-.0001-7.3261C3.3042 2 2.6522 2 2.6522 2S1.9999 2 2 2.6522V9.826c0 1.3043.6522 1.9565 1.9565 1.9565h6.5209Z" />
, 
    'SubitemArrow'
)

type SubitemArrowRef = PathIconRef

type SubitemArrowProps = PathIconProps

export {
    SubitemArrow
}

export type {
    SubitemArrowRef,
    SubitemArrowProps
}

export default SubitemArrow
