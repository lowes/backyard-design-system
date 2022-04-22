import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Mobile: React.MemoExoticComponent<React.ForwardRefExoticComponent<MobileProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.1819 2H5.8182c-.7527 0-1.3636.611-1.3636 1.3636v9.2728c0 .7527.6109 1.3636 1.3636 1.3636h4.3637c.7527 0 1.3636-.6109 1.3636-1.3636V3.3636C11.5455 2.611 10.9346 2 10.1819 2ZM8 13.4545a.817.817 0 0 1-.8181-.8181A.817.817 0 0 1 8 11.8182a.817.817 0 0 1 .8182.8182.817.817 0 0 1-.8182.8181Zm2.4546-2.1818H5.5455V3.6364h4.9091v7.6363Z" clipRule="evenodd" />
, 
    'Mobile'
)

type MobileRef = PathIconRef

type MobileProps = PathIconProps

export {
    Mobile
}

export type {
    MobileRef,
    MobileProps
}

export default Mobile
