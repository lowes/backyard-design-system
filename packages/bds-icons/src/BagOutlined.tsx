import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const BagOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<BagOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.543 14c1.0509 0 1.6674-.6106 1.6674-1.82V6.1037c0-1.2094-.6224-1.82-1.8435-1.82h-.9393C10.3982 3.051 9.3239 2 7.997 2 6.6702 2 5.596 3.0509 5.5665 4.2838h-.9334c-1.227 0-1.8435.6046-1.8435 1.82V12.18c0 1.2153.6164 1.82 1.8435 1.82h6.9099ZM9.4824 4.2838H6.5117c.0294-.7691.6576-1.3914 1.4853-1.3914.8278 0 1.456.6223 1.4854 1.3914Zm2.043 8.771H4.6448c-.587 0-.91-.3112-.91-.9217V6.1507c0-.6106.323-.9217.91-.9217h6.7045c.5812 0 .9159.3111.9159.9217v5.9824c0 .6105-.3347.9217-.7398.9217Z" clipRule="evenodd" />
, 
    'BagOutlined'
)

type BagOutlinedRef = PathIconRef

type BagOutlinedProps = PathIconProps

export {
    BagOutlined
}

export type {
    BagOutlinedRef,
    BagOutlinedProps
}

export default BagOutlined
