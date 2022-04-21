import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const VideoFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<VideoFilledProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M6.062 7.1542c0 1.0774.8606 1.9402 1.938 1.9402 1.0773 0 1.9423-.8628 1.94-1.9402a1.9375 1.9375 0 0 0-1.9423-1.9401c-1.0774 0-1.9356.865-1.9356 1.9401Zm1.5362.84 1.2212-.7213c.089-.0548.0867-.1803 0-.2305l-1.2212-.7258c-.0935-.0548-.2145-.0115-.2145.0912v1.495c0 .105.1141.1507.2145.0914Z" clipRule="evenodd" /><path fillRule="evenodd" d="M14 9.7598c0 .7957-.3911 1.1686-1.1686 1.1686H3.1686C2.3911 10.9284 2 10.5555 2 9.7598V4.5487C2 3.7529 2.391 3.38 3.1686 3.38h9.6628C13.6089 3.38 14 3.7529 14 4.5487v5.211Zm-3.6719-2.6056c0 1.2737-1.0545 2.3282-2.3281 2.3282-1.2714 0-2.3282-1.0545-2.3282-2.3282 0-1.2713 1.0546-2.3281 2.326-2.3281 1.2736 0 2.3303 1.0568 2.3303 2.3281Z" clipRule="evenodd" /><path fillRule="evenodd" d="M11.3036 12.1925c0 .2365-.1865.4274-.4184.4274H5.1058c-.232 0-.423-.1909-.423-.4274 0-.2365.191-.4274.423-.4274h5.7794c.2319 0 .4184.1909.4184.4274Z" /></React.Fragment>
, 
    'VideoFilled'
)

type VideoFilledRef = PathIconRef

type VideoFilledProps = PathIconProps

export {
    VideoFilled
}

export type {
    VideoFilledRef,
    VideoFilledProps
}

export default VideoFilled
