import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Checkmark: React.MemoExoticComponent<React.ForwardRefExoticComponent<CheckmarkProps>> = createPathIcon(
    <path fillRule="evenodd" d="M5.6338 10.9115 3.141 8.4188a.6684.6684 0 0 0-.9453.9453l2.9495 2.9495a.6661.6661 0 0 0 .4885.1956.6661.6661 0 0 0 .4884-.1956l7.682-7.682a.6685.6685 0 0 0-.9453-.9452l-7.2252 7.2251Z" />
, 
    'Checkmark'
)

type CheckmarkRef = PathIconRef

type CheckmarkProps = PathIconProps

export {
    Checkmark
}

export type {
    CheckmarkRef,
    CheckmarkProps
}

export default Checkmark
