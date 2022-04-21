import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ProtectionPlanOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<ProtectionPlanOutlinedProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M6.8549 8.8317 5.5202 7.4911l-.445.4468L6.855 9.7256l3.8135-3.8304-.4449-.4469-3.3686 3.3835Z" /><path fillRule="evenodd" d="M8.01 14c-.4724 0-.8857-.1176-1.181-.4118l-4.0156-3.2353C2.223 9.8824 1.8686 9 2.0458 8.2353l.8267-4.4706C3.0497 3 3.7583 2.2941 4.585 2.1765 4.644 2.1765 5.8842 2 8.01 2c2.1259 0 3.4251.1765 3.4251.1765.8267.1176 1.5353.8235 1.7125 1.5882l.8267 4.4706c.1181.7647-.1771 1.647-.7676 2.1176l-4.0156 3.2353c-.2953.2942-.7086.4118-1.181.4118Zm0-11.2941c-2.0668 0-3.3069.1764-3.366.1764-.4724.0589-1.0038.5295-1.0629 1L2.7544 8.353c-.1181.4706.118 1.1177.5315 1.4118L7.3014 13c.1772.1765.4134.2353.7086.2353.2953 0 .5315-.0588.7087-.2353l4.0155-3.2353c.4134-.2941.6496-.9412.5315-1.4118l-.8267-4.4705c-.1181-.4706-.5905-.9412-1.063-1-.059 0-1.2991-.1765-3.366-.1765Z" clipRule="evenodd" /></React.Fragment>
, 
    'ProtectionPlanOutlined'
)

type ProtectionPlanOutlinedRef = PathIconRef

type ProtectionPlanOutlinedProps = PathIconProps

export {
    ProtectionPlanOutlined
}

export type {
    ProtectionPlanOutlinedRef,
    ProtectionPlanOutlinedProps
}

export default ProtectionPlanOutlined
