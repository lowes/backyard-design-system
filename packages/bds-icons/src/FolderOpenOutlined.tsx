import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const FolderOpenOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<FolderOpenOutlinedProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M6.0207 9.9013c0 .0001 0-.0001 0 0a.3639.3639 0 0 1 .3636-.3639h3.236a.3639.3639 0 0 1 .3636.3639c0-.0001 0 .0001 0 0a.3636.3636 0 0 1-.3636.3633h-3.236a.3636.3636 0 0 1-.3636-.3633Z" clipRule="evenodd" /><path fillRule="evenodd" d="M5.1702 8.1967a.3636.3636 0 0 1 .3636-.3636h4.9371a.3636.3636 0 1 1 0 .7272H5.5338a.3636.3636 0 0 1-.3636-.3636Z" /><path fillRule="evenodd" d="M12.2789 5.2204v-.3966c0-.7674-.3912-1.151-1.1697-1.151H7.4845c-.2533 0-.4023-.0634-.5886-.2199l-.2272-.19c-.2459-.2048-.4396-.2756-.8047-.2756h-1.11c-.652 0-1.0282.3725-1.0282 1.125v.9727h.81c-1.4815 0-2.638 1.2812-2.487 2.755l.3003 2.9277c.1307 1.2753 1.205 2.245 2.487 2.245h6.3167c1.2783 0 2.3507-.9644 2.4859-2.2356l.3114-2.9277c.1269-1.1925-.6034-2.2615-1.6712-2.629Zm0 3.5367V5.9219c.5964.2425.9967.8569.9276 1.541l-.3509 3.4734c-.0774.7662-.7223 1.3493-1.4924 1.3493H4.6968c-.7645 0-1.4068-.5751-1.4909-1.335l-.3844-3.4734c-.0983-.8884.5971-1.665 1.4909-1.665h7.4017c.2004 0 .3909.039.5648.1097v2.8352Zm0-3.5367a2.4984 2.4984 0 0 0-.8148-.1354h.8148v.1354Zm-.5998-.1395H4.3255V4.142c0-.3688.1937-.555.5513-.555h.8308c.2496 0 .3986.0595.5885.2235l.2273.1862c.2421.2012.4396.2757.8084.2757h3.7699c.3688 0 .5774.1974.5774.5848v.2236Z" clipRule="evenodd" /></React.Fragment>
, 
    'FolderOpenOutlined'
)

type FolderOpenOutlinedRef = PathIconRef

type FolderOpenOutlinedProps = PathIconProps

export {
    FolderOpenOutlined
}

export type {
    FolderOpenOutlinedRef,
    FolderOpenOutlinedProps
}

export default FolderOpenOutlined
