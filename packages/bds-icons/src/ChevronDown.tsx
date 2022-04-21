import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ChevronDown: React.MemoExoticComponent<React.ForwardRefExoticComponent<ChevronDownProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.0035 11.3782c.1727 0 .3454-.069.4628-.2003l5.3472-5.4784C13.9309 5.582 14 5.43 14 5.2573c0-.3592-.2694-.6355-.6287-.6355a.6559.6559 0 0 0-.449.1796L8.0035 9.8307 3.0777 4.8014c-.1105-.1105-.2694-.1796-.449-.1796-.3593 0-.6287.2763-.6287.6355 0 .1727.069.3247.1865.449l5.3472 5.4716c.1312.1313.2901.2003.4698.2003Z" clipRule="evenodd" />
, 
    'ChevronDown'
)

type ChevronDownRef = PathIconRef

type ChevronDownProps = PathIconProps

export {
    ChevronDown
}

export type {
    ChevronDownRef,
    ChevronDownProps
}

export default ChevronDown
