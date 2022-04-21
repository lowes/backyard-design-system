import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const RSS: React.MemoExoticComponent<React.ForwardRefExoticComponent<RSSProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.9992 11.972c-.1026-2.5334-1.1789-4.9717-3.0753-6.8681-1.8965-1.8965-4.3347-2.9874-6.8682-3.0753-.6004-.0293-1.0105.3807-.9665.8933.0293.4979.4466.7688 1.0104.8054 2.0795.0879 4.0492.9885 5.6307 2.57 1.5743 1.5743 2.4603 3.5587 2.5701 5.6308.0366.5638.3002.9739.8055 1.0105.5052.0366.9152-.3735.8933-.9666Zm-4.1444-.0585A6.4573 6.4573 0 0 0 7.995 8.0327C6.9187 6.9564 5.5348 6.3194 4.1143 6.173c-.5931-.0805-1.0251.3661-.9885.886.0293.4979.454.7176 1.0031.8127.9812.1172 1.9111.5931 2.6726 1.3546.7615.7615 1.2448 1.6841 1.3546 2.6726.0879.5419.3148.9739.8127 1.0032.5126.0292.9593-.4028.886-.9885ZM4.5683 13.539c.5857-.5858.5784-1.5596 0-2.1381a1.507 1.507 0 0 0-2.1381 0c-.5785.5785-.5711 1.5816.0073 2.16.5565.5565 1.5596.5492 2.1307-.0219Z" clipRule="evenodd" />
, 
    'RSS'
)

type RSSRef = PathIconRef

type RSSProps = PathIconProps

export {
    RSS
}

export type {
    RSSRef,
    RSSProps
}

export default RSS
