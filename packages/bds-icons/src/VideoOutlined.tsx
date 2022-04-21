import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const VideoOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<VideoOutlinedProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M7.9932 9.4824c1.2736 0 2.3281-1.0545 2.3281-2.3282 0-1.2713-1.0568-2.3281-2.3304-2.3281-1.2713 0-2.3259 1.0568-2.3259 2.3281 0 1.2737 1.0568 2.3282 2.3282 2.3282Zm-.6414-1.543V6.369c0-.105.1255-.1506.226-.0935l1.2805.76a.1385.1385 0 0 1 0 .242l-1.2805.7578c-.1073.0639-.226.0137-.226-.0959Z" clipRule="evenodd" /><path fillRule="evenodd" d="M14 9.7598c0 .7957-.3911 1.1686-1.1686 1.1686H3.1686C2.3911 10.9284 2 10.5555 2 9.7598V4.5487C2 3.7529 2.391 3.38 3.1686 3.38h9.6628C13.6089 3.38 14 3.7529 14 4.5487v5.211Zm-10.8177.4365h9.6354c.3138 0 .4502-.1273.4502-.4456V4.5623c0-.3228-.1364-.4501-.4502-.4501H3.1823c-.3138 0-.4502.1273-.4502.4501v5.1884c0 .3183.1364.4456.4502.4456Z" clipRule="evenodd" /><path fillRule="evenodd" d="M11.3036 12.1925c0 .2364-.1865.4274-.4184.4274H5.1058c-.232 0-.423-.191-.423-.4274 0-.2365.191-.4274.423-.4274h5.7794c.2319 0 .4184.1909.4184.4274Z" /></React.Fragment>
, 
    'VideoOutlined'
)

type VideoOutlinedRef = PathIconRef

type VideoOutlinedProps = PathIconProps

export {
    VideoOutlined
}

export type {
    VideoOutlinedRef,
    VideoOutlinedProps
}

export default VideoOutlined
