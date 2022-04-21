import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const HelpFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<HelpFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm-.1118-4.7235c-.3176 0-.494-.1647-.494-.4824v-.0823c0-.606.3293-.9353.7705-1.2412.547-.3706.8059-.5824.8059-1.0059 0-.4647-.3647-.7824-.9294-.7824-.4118 0-.7235.206-.9118.5412-.2.2353-.253.4177-.6059.4177-.2058 0-.4235-.147-.4235-.4236 0-.1058.0177-.2058.047-.3058.1589-.5706.8706-1.0647 1.9295-1.0647 1.053 0 1.9647.547 1.9647 1.5705 0 .7412-.4294 1.0942-1.0236 1.5-.4294.2883-.6352.5-.6352.8471v.0765c0 .2411-.1824.4353-.4942.4353Zm.0177 1.7706c-.3353 0-.6588-.2706-.6588-.6353 0-.3647.3176-.6353.6588-.6353.347 0 .6647.2647.6647.6353s-.3235.6353-.6647.6353Z" clipRule="evenodd" />
, 
    'HelpFilled'
)

type HelpFilledRef = PathIconRef

type HelpFilledProps = PathIconProps

export {
    HelpFilled
}

export type {
    HelpFilledRef,
    HelpFilledProps
}

export default HelpFilled
