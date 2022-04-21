import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Download: React.MemoExoticComponent<React.ForwardRefExoticComponent<DownloadProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.5842 14c.354 0 .599-.2586.599-.6126 0-.3539-.245-.6058-.599-.6058H8.1395a.6979.6979 0 0 0 .32-.1974l4.4991-4.506c.1361-.1429.2042-.2926.2042-.456 0-.3403-.2519-.599-.5922-.599-.1634 0-.3267.0613-.4356.1702l-1.5247 1.5043-2.0488 2.2393.0477-1.4566V2.6058c0-.354-.2519-.6058-.6058-.6058-.3608 0-.6126.2518-.6126.6058v6.8746l.0545 1.4634-2.0488-2.2461-1.5247-1.5043c-.1157-.1089-.2723-.1701-.4356-.1701-.3472 0-.5922.2586-.5922.599 0 .1633.068.313.1974.456l4.506 4.5059c.0884.1021.1973.1634.313.1974H3.4021c-.3471 0-.5853.2519-.5853.6058 0 .354.2382.6126.5853.6126h9.1821Z" clipRule="evenodd" />
, 
    'Download'
)

type DownloadRef = PathIconRef

type DownloadProps = PathIconProps

export {
    Download
}

export type {
    DownloadRef,
    DownloadProps
}

export default Download
