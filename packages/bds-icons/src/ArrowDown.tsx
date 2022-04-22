import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ArrowDown: React.MemoExoticComponent<React.ForwardRefExoticComponent<ArrowDownProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c.1589 0 .305-.0635.4257-.1906l4.2181-4.2244c.1207-.127.1715-.2605.1715-.413 0-.3112-.2287-.5526-.5463-.5526-.1525 0-.2986.0508-.4002.1524l-1.4484 1.423-1.8994 2.0837.0444-1.3531V2.559c0-.3303-.235-.559-.5653-.559-.3304 0-.5654.2287-.5654.559v8.3664l.0508 1.3594-1.9058-2.09-1.4483-1.423c-.0953-.1016-.2478-.1524-.4003-.1524-.3176 0-.5463.2414-.5463.5526 0 .1525.0572.286.1779.413l4.2117 4.2244c.1207.1271.2668.1906.4257.1906Z" clipRule="evenodd" />
, 
    'ArrowDown'
)

type ArrowDownRef = PathIconRef

type ArrowDownProps = PathIconProps

export {
    ArrowDown
}

export type {
    ArrowDownRef,
    ArrowDownProps
}

export default ArrowDown
