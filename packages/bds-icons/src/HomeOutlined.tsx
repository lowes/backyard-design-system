import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const HomeOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<HomeOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.375 13.4015c.7295 0 1.1558-.4109 1.1558-1.1352V7.5762l.6627.6062c.1027.1027.2209.1746.3699.1746.2414 0 .4366-.149.4366-.3955 0-.1541-.0616-.2517-.1541-.339L12.0634 5.994V2.9683c0-.226-.149-.3698-.3699-.3698h-.673c-.226 0-.375.1438-.375.3698v1.7363l-2.029-1.8493C8.4365 2.691 8.2208 2.5985 8 2.5985c-.2209 0-.4366.0924-.6164.2568L2.154 7.6224c-.0925.0874-.1541.185-.1541.339 0 .2466.1952.3956.4366.3956.1439 0 .2672-.0719.37-.1746l.6626-.601v4.6849c0 .7243.4264 1.1352 1.1558 1.1352h6.75Zm-4.8596-.827H4.8048c-.3288 0-.5086-.1798-.5086-.5137V6.8262l3.524-3.2106c.0514-.0514.113-.0822.1798-.0822.0668 0 .1284.0257.185.0822l3.5188 3.2106v5.2346c0 .3339-.1798.5137-.5086.5137H9.4795v-3.411c0-.2363-.1541-.3853-.3904-.3853H6.911c-.2363 0-.3956.149-.3956.3853v3.411Z" clipRule="evenodd" />
, 
    'HomeOutlined'
)

type HomeOutlinedRef = PathIconRef

type HomeOutlinedProps = PathIconProps

export {
    HomeOutlined
}

export type {
    HomeOutlinedRef,
    HomeOutlinedProps
}

export default HomeOutlined
