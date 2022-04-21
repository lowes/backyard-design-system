import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const PhotosOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<PhotosOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.402 12.6845c1.0687 0 1.598-.5293 1.598-1.5776V4.8931c0-1.0483-.5293-1.5776-1.598-1.5776H3.598C2.5344 3.3155 2 3.8397 2 4.8931v6.2138c0 1.0534.5343 1.5776 1.598 1.5776h8.804Zm.7787-2.1323-2.7277-2.565c-.229-.2035-.4937-.3104-.7685-.3104-.2799 0-.5292.0967-.7633.3054l-2.3003 2.056-.9415-.855c-.2137-.1883-.4478-.29-.687-.29-.229 0-.4428.0966-.6565.285L2.8194 10.547V4.9338c0-.5292.2799-.799.7888-.799h8.7837c.5038 0 .7888.2698.7888.799v5.6184Z" clipRule="evenodd" />
, 
    'PhotosOutlined'
)

type PhotosOutlinedRef = PathIconRef

type PhotosOutlinedProps = PathIconProps

export {
    PhotosOutlined
}

export type {
    PhotosOutlinedRef,
    PhotosOutlinedProps
}

export default PhotosOutlined
