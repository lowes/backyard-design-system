import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Apple: React.MemoExoticComponent<React.ForwardRefExoticComponent<AppleProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.2881 8.3413c-.0053-.9832.4319-1.7253 1.3168-2.2718-.4951-.7207-1.2431-1.1172-2.2307-1.1949-.935-.075-1.9568.5546-2.3308.5546-.395 0-1.301-.5278-2.012-.5278C4.5617 4.9255 3 6.0936 3 8.47c0 .702.1264 1.427.3792 2.1754.3371.9832 1.5539 3.3944 2.8233 3.3542.6637-.0161 1.1325-.4795 1.9963-.4795.8375 0 1.272.4795 2.0121.4795 1.28-.0187 2.3808-2.2102 2.7021-3.1961-1.7171-.8225-1.6249-2.4112-1.6249-2.462Zm-1.4907-4.399c.719-.868.6532-1.6583.6321-1.9423-.6347.0375-1.3695.4394-1.7882.935-.461.5305-.7322 1.1868-.6742 1.9262.6873.0536 1.3141-.3054 1.8303-.9189Z" />
, 
    'Apple'
)

type AppleRef = PathIconRef

type AppleProps = PathIconProps

export {
    Apple
}

export type {
    AppleRef,
    AppleProps
}

export default Apple
