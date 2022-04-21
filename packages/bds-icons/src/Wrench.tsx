import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Wrench: React.MemoExoticComponent<React.ForwardRefExoticComponent<WrenchProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.9253 4.1474c-.0657-.1314-.2628-.197-.3941-.0657l-1.5764 1.5764c-.3285.3285-.7883.3285-1.1167 0l-.4598-.4598c-.3284-.3284-.3284-.7882 0-1.1166l1.5765-1.5764c.1313-.1314.0656-.3284-.0657-.3941-1.1167-.3284-2.4303.0657-3.2185 1.248-.5255.8539-.5912 1.9048-.1314 2.8244l-6.24 6.24c-.394.3941-.394.9852 0 1.3137.197.197.3941.2627.6568.2627.2628 0 .4598-.0657.6569-.2627l6.24-6.24c1.0509.5255 2.3646.3284 3.2842-.5255.7882-.8539.9852-1.9048.7882-2.8244Z" clipRule="evenodd" />
, 
    'Wrench'
)

type WrenchRef = PathIconRef

type WrenchProps = PathIconProps

export {
    Wrench
}

export type {
    WrenchRef,
    WrenchProps
}

export default Wrench
