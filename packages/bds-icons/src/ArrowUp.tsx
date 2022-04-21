import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ArrowUp: React.MemoExoticComponent<React.ForwardRefExoticComponent<ArrowUpProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c.3304 0 .5654-.2287.5654-.559V5.0746l-.0444-1.353 1.8994 2.0836 1.4484 1.423c.1016.1016.2477.1524.4002.1524.3176 0 .5463-.2414.5463-.5526 0-.1525-.0508-.286-.1715-.413L8.4257 2.1906C8.305 2.0636 8.1589 2 8 2c-.1589 0-.305.0635-.4257.1906L3.3627 6.415c-.1207.127-.1779.2605-.1779.413 0 .3112.2287.5526.5463.5526.1525 0 .305-.0508.4003-.1524l1.4483-1.423 1.9058-2.09-.0508 1.3594v8.3664c0 .3303.235.559.5654.559Z" clipRule="evenodd" />
, 
    'ArrowUp'
)

type ArrowUpRef = PathIconRef

type ArrowUpProps = PathIconProps

export {
    ArrowUp
}

export type {
    ArrowUpRef,
    ArrowUpProps
}

export default ArrowUp
