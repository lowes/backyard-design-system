import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Bullet: React.MemoExoticComponent<React.ForwardRefExoticComponent<BulletProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Z" clipRule="evenodd" />
, 
    'Bullet'
)

type BulletRef = PathIconRef

type BulletProps = PathIconProps

export {
    Bullet
}

export type {
    BulletRef,
    BulletProps
}

export default Bullet
