import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ArrowLeft: React.MemoExoticComponent<React.ForwardRefExoticComponent<ArrowLeftProps>> = createPathIcon(
    <path fillRule="evenodd" d="M6.9112 12.8982c.3166 0 .5686-.2326.5686-.5557 0-.1551-.0582-.3102-.1615-.4071L5.8708 10.462 3.693 8.4782l1.5639.097h8.1744C13.7674 8.5751 14 8.336 14 8c0-.336-.2326-.5751-.5687-.5751H5.2569l-1.5574.097 2.1713-1.984 1.4475-1.4733c.1033-.1034.1615-.252.1615-.407 0-.3232-.252-.5558-.5686-.5558-.1551 0-.2908.0517-.433.1938L2.2003 7.567C2.0711 7.6898 2 7.8384 2 8c0 .1616.071.3102.2003.433l4.2908 4.2843c.1293.1228.265.1809.42.1809Z" clipRule="evenodd" />
, 
    'ArrowLeft'
)

type ArrowLeftRef = PathIconRef

type ArrowLeftProps = PathIconProps

export {
    ArrowLeft
}

export type {
    ArrowLeftRef,
    ArrowLeftProps
}

export default ArrowLeft
