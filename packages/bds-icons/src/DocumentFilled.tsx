import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const DocumentFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<DocumentFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.4711 11.6434c.9775 0 1.464-.4958 1.464-1.4828V5.608h-2.8005c-.4912 0-.7698-.2786-.7698-.7697V2h-2.451c-.9728 0-1.464.4959-1.464 1.4829v.2314h.614c.6658 0 1.1948.1889 1.7237.7178l2.6824 2.6871c.5289.5337.7273 1.0815.7273 1.7238v2.8004h.2739Zm1.2373-6.6257c-.0283-.1511-.1275-.2833-.2975-.4486l-2.0071-2.0496c-.1653-.1653-.3023-.2692-.4487-.2928L9.96 4.7438c0 .1936.0755.274.2691.274h2.4794ZM9.0909 14c.9729 0 1.4593-.4959 1.4593-1.4829V8.7155H7.1358c-.6092 0-.8926-.2881-.8926-.8926V4.3566H4.529c-.9728 0-1.464.4958-1.464 1.4828v6.6777c0 .9918.4865 1.4829 1.464 1.4829h4.562Zm1.2137-5.9315c-.0519-.1842-.1794-.3542-.3872-.5715L7.4569 4.9988c-.203-.2125-.3872-.34-.5714-.392v3.2208c0 .1606.085.2409.2456.2409h3.1735Z" clipRule="evenodd" />
, 
    'DocumentFilled'
)

type DocumentFilledRef = PathIconRef

type DocumentFilledProps = PathIconProps

export {
    DocumentFilled
}

export type {
    DocumentFilledRef,
    DocumentFilledProps
}

export default DocumentFilled
