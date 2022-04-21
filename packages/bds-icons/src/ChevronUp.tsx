import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ChevronUp: React.MemoExoticComponent<React.ForwardRefExoticComponent<ChevronUpProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.3713 11.3782c.3593 0 .6287-.2694.6287-.6286 0-.1797-.0691-.3385-.1865-.4491L8.4663 4.829a.6288.6288 0 0 0-.4628-.2072c-.1797 0-.3455.076-.4698.2072l-5.3472 5.4715c-.1174.1106-.1865.2694-.1865.4491 0 .3592.2694.6286.6287.6286.1796 0 .3454-.0621.449-.1796l4.9258-5.0293 4.9188 5.0293c.1105.1175.2763.1796.449.1796Z" clipRule="evenodd" />
, 
    'ChevronUp'
)

type ChevronUpRef = PathIconRef

type ChevronUpProps = PathIconProps

export {
    ChevronUp
}

export type {
    ChevronUpRef,
    ChevronUpProps
}

export default ChevronUp
