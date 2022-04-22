import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ChevronLeft: React.MemoExoticComponent<React.ForwardRefExoticComponent<ChevronLeftProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.7496 14c.3593 0 .6287-.2694.6287-.6287a.656.656 0 0 0-.1796-.449L6.1693 8.0035l5.0294-4.9189c.1105-.1174.1796-.2832.1796-.449 0-.3593-.2694-.6356-.6287-.6356-.1796 0-.3316.069-.449.1865l-5.4715 5.354c-.1313.1106-.2073.2833-.2073.463 0 .1727.0691.3316.2004.4628l5.4784 5.3472c.1174.1174.2694.1865.449.1865Z" clipRule="evenodd" />
, 
    'ChevronLeft'
)

type ChevronLeftRef = PathIconRef

type ChevronLeftProps = PathIconProps

export {
    ChevronLeft
}

export type {
    ChevronLeftRef,
    ChevronLeftProps
}

export default ChevronLeft
