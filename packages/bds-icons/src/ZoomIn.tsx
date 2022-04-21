import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ZoomIn: React.MemoExoticComponent<React.ForwardRefExoticComponent<ZoomInProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.2425 14c.4103 0 .7006-.3156.7006-.7196 0-.1894-.0631-.3661-.202-.505L10.768 9.7959c.6249-.8206.9973-1.837.9973-2.9416C11.7653 4.184 9.5813 2 6.9111 2 4.2409 2 2.0568 4.1841 2.0568 6.8543c0 2.6702 2.184 4.8543 4.8543 4.8543 1.0541 0 2.0263-.3409 2.8216-.909l2.9921 2.9921c.1389.1389.322.2083.5177.2083Zm-6.3314-3.3393c-2.0832 0-3.8065-1.7233-3.8065-3.8064S4.828 3.0479 6.9111 3.0479c2.083 0 3.8064 1.7233 3.8064 3.8064s-1.7233 3.8064-3.8064 3.8064Zm0-1.4519c.265 0 .5176-.183.5176-.486v-1.395h1.275c.2526 0 .4735-.221.4735-.4735 0-.2525-.221-.4735-.4734-.4735H7.4287v-1.395c0-.303-.2525-.486-.5176-.486-.2652 0-.5177.183-.5177.486v1.395h-1.275c-.2589 0-.4735.221-.4735.4735 0 .2525.2146.4734.4734.4734h1.2751v1.395c0 .303.2525.4861.5177.4861Z" clipRule="evenodd" />
, 
    'ZoomIn'
)

type ZoomInRef = PathIconRef

type ZoomInProps = PathIconProps

export {
    ZoomIn
}

export type {
    ZoomInRef,
    ZoomInProps
}

export default ZoomIn
