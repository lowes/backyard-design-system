import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ChevronDoubleLeft: React.MemoExoticComponent<React.ForwardRefExoticComponent<ChevronDoubleLeftProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M9.5769 12.9223a.6559.6559 0 0 1 .1796.449c0 .3593-.2695.6287-.6287.6287-.1796 0-.3316-.0691-.449-.1865L3.2003 8.4663C3.0692 8.3351 3 8.1762 3 8.0035c0-.1797.076-.3524.2073-.463l5.4715-5.354C8.7962 2.0691 8.9482 2 9.1278 2c.3592 0 .6287.2763.6287.6356 0 .1658-.0691.3316-.1796.449L4.5475 8.0035l5.0294 4.9188Z" /><path fillRule="evenodd" d="M13.7565 13.3713c0 .3593-.2695.6287-.6287.6287-.1796 0-.3316-.0691-.449-.1865L7.2003 8.4663C7.0692 8.3351 7 8.1762 7 8.0035c0-.1797.076-.3524.2073-.463l5.4715-5.354c.1174-.1174.2694-.1865.449-.1865.3592 0 .6287.2763.6287.6356 0 .1658-.0691.3316-.1796.449L8.5475 8.0035l5.0294 4.9188a.656.656 0 0 1 .1796.449Z" /></React.Fragment>
, 
    'ChevronDoubleLeft'
)

type ChevronDoubleLeftRef = PathIconRef

type ChevronDoubleLeftProps = PathIconProps

export {
    ChevronDoubleLeft
}

export type {
    ChevronDoubleLeftRef,
    ChevronDoubleLeftProps
}

export default ChevronDoubleLeft
