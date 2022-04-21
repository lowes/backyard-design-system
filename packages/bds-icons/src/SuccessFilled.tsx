import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const SuccessFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<SuccessFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm-.8059-2.9824c-.2 0-.3588-.0882-.5235-.2882l-1.7-2.0941c-.0883-.1118-.1412-.253-.1412-.3824 0-.2764.2177-.4882.4824-.4882.1647 0 .3117.0647.447.247l1.406 1.8177L9.9 5.4471c.1118-.1824.2647-.2706.4235-.2706.2589 0 .5059.1706.5059.453 0 .1293-.0765.2705-.147.3881l-2.9942 4.7118c-.1294.1941-.294.2882-.494.2882Z" clipRule="evenodd" />
, 
    'SuccessFilled'
)

type SuccessFilledRef = PathIconRef

type SuccessFilledProps = PathIconProps

export {
    SuccessFilled
}

export type {
    SuccessFilledRef,
    SuccessFilledProps
}

export default SuccessFilled
