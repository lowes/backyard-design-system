import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const HelpOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<HelpOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2235 5-5 5Zm-.1235-3.7823c.3 0 .4764-.1824.4764-.4177v-.0706c0-.3294.1942-.5353.6-.8059.5706-.3764.9765-.7235.9765-1.4235 0-.9824-.8706-1.5059-1.8647-1.5059-1.0118 0-1.6765.4765-1.8412 1.0177-.0294.1-.047.194-.047.294 0 .259.2058.406.4.406.3353 0 .3882-.1824.5764-.4.1942-.3236.4765-.5177.8706-.5177.5353 0 .8883.3.8883.753 0 .4-.253.594-.7647.947-.4236.2941-.7353.6059-.7353 1.1824v.0764c0 .3118.1647.4648.4647.4648Zm-.0118 1.7588c.3412 0 .6353-.2706.6353-.6118 0-.3471-.2882-.6118-.6353-.6118-.347 0-.6353.2706-.6353.6118 0 .3353.2941.6118.6353.6118Z" clipRule="evenodd" />
, 
    'HelpOutlined'
)

type HelpOutlinedRef = PathIconRef

type HelpOutlinedProps = PathIconProps

export {
    HelpOutlined
}

export type {
    HelpOutlinedRef,
    HelpOutlinedProps
}

export default HelpOutlined
