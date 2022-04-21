import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CircleArrowRightFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<CircleArrowRightFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M14 8c0 3.2824-2.7176 6-6 6-3.2765 0-6-2.7176-6-6 0-3.2765 2.7176-6 5.9941-6C11.2765 2 14 4.7235 14 8Zm-7.1821 2.0645V5.5016c0-.32.2482-.4544.4648-.2752L9.9134 7.428c.194.16.185.544 0 .704l-2.6307 2.2078c-.2031.1728-.4648.0448-.4648-.2752Z" clipRule="evenodd" />
, 
    'CircleArrowRightFilled'
)

type CircleArrowRightFilledRef = PathIconRef

type CircleArrowRightFilledProps = PathIconProps

export {
    CircleArrowRightFilled
}

export type {
    CircleArrowRightFilledRef,
    CircleArrowRightFilledProps
}

export default CircleArrowRightFilled
