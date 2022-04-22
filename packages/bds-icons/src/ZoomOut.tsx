import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ZoomOut: React.MemoExoticComponent<React.ForwardRefExoticComponent<ZoomOutProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.2425 14c.4103 0 .7006-.3156.7006-.7196 0-.1894-.0631-.3661-.202-.505L10.768 9.7959c.6249-.8206.9973-1.837.9973-2.9416C11.7653 4.184 9.5813 2 6.9111 2 4.2409 2 2.0568 4.1841 2.0568 6.8543c0 2.6702 2.184 4.8543 4.8543 4.8543 1.0541 0 2.0263-.3409 2.8216-.909l2.9921 2.9921c.1389.1389.322.2083.5177.2083Zm-6.3314-3.3393c-2.0832 0-3.8065-1.7233-3.8065-3.8064S4.828 3.0479 6.9111 3.0479c2.083 0 3.8064 1.7233 3.8064 3.8064s-1.7233 3.8064-3.8064 3.8064Zm1.7927-3.333c.2525 0 .4734-.221.4734-.4734 0-.2525-.221-.4735-.4734-.4735H5.1183c-.2588 0-.4734.221-.4734.4735 0 .2525.2146.4734.4734.4734h3.5855Z" clipRule="evenodd" />
, 
    'ZoomOut'
)

type ZoomOutRef = PathIconRef

type ZoomOutProps = PathIconProps

export {
    ZoomOut
}

export type {
    ZoomOutRef,
    ZoomOutProps
}

export default ZoomOut
