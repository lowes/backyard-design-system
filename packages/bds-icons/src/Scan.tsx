import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Scan: React.MemoExoticComponent<React.ForwardRefExoticComponent<ScanProps>> = createPathIcon(
    <path fillRule="evenodd" d="M1.5 3.5h2.3333v1H2.5v1.3333h-1V3.5ZM4.8111 11.037V5.3333h-.7v5.7037h.7ZM9.05 11.037V5.3333h-.7v5.7037h.7ZM6.25 11.037v-.8033h-.7v.8033h.7ZM7.65 11.037v-.8033h-.7v.8033h.7ZM10.45 11.037v-.8033h-.7v.8033h.7ZM11.8889 11.037V5.3333h-.7v5.7037h.7ZM6.25 9.5107V5.3333h-.7v4.1774h.7ZM7.65 9.5107V5.3333h-.7v4.1774h.7ZM10.45 9.5107V5.3333h-.7v4.1774h.7ZM14.5 3.5v2.3333h-1V4.5h-1.3333v-1H14.5ZM13.5 11.8704h-1.3333v1H14.5V10.537h-1v1.3334ZM2.5 11.8704V10.537h-1v2.3334h2.3333v-1H2.5Z" />
, 
    'Scan'
)

type ScanRef = PathIconRef

type ScanProps = PathIconProps

export {
    Scan
}

export type {
    ScanRef,
    ScanProps
}

export default Scan
