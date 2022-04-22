import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const HaulAwayOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<HaulAwayOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.9488 9.2907 10.826 3.6524a.4083.4083 0 0 0-.5549-.1592l-4.0791 2.26-1.5446-2.789a.408.408 0 0 0-.5548-.1593L2.2105 3.8476a.4081.4081 0 1 0 .3954.714l1.5252-.8449 1.544 2.788.0006.001 1.9956 3.6032c-.3982.6089-.4556 1.4132-.0793 2.0928a2.0278 2.0278 0 0 0 1.7734 1.0445c.3412 0 .68-.0878.9799-.2539.6796-.3765 1.0576-1.0888 1.0429-1.8164l2.4014-1.3305a.4081.4081 0 0 0 .1592-.5547Zm-3.999 2.9875a1.2088 1.2088 0 0 1-.5844.1518 1.2117 1.2117 0 0 1-1.0595-.6237c-.323-.5834-.1113-1.321.472-1.6442a1.209 1.209 0 0 1 .5845-.1518c.4403 0 .8461.239 1.0592.6237.3232.5835.1115 1.321-.4719 1.6442Zm1.2432-1.9273a2.085 2.085 0 0 0-.0573-.1124 2.0277 2.0277 0 0 0-1.7733-1.0444c-.3412 0-.6801.0878-.9801.254a2.0604 2.0604 0 0 0-.108.0648L6.5874 6.4673 8.3154 5.51l.5967 1.0773a.408.408 0 1 0 .714-.3955l-.5967-1.0774 1.2803-.7093 2.7274 4.9242-1.8441 1.0217Z" clipRule="evenodd" />
, 
    'HaulAwayOutlined'
)

type HaulAwayOutlinedRef = PathIconRef

type HaulAwayOutlinedProps = PathIconProps

export {
    HaulAwayOutlined
}

export type {
    HaulAwayOutlinedRef,
    HaulAwayOutlinedProps
}

export default HaulAwayOutlined
