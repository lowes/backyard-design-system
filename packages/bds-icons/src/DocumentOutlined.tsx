import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const DocumentOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<DocumentOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M9.1145 14c.9776 0 1.4357-.4959 1.4357-1.4829v-.8737h.9209c.9775 0 1.464-.4958 1.464-1.4828V6.2078c0-.5809-.1134-.9492-.4676-1.3129l-2.3848-2.4274C9.7427 2.1228 9.3507 2 8.8453 2H6.9138c-.9728 0-1.464.4959-1.464 1.4829v.8737H4.529c-.9728 0-1.464.4958-1.464 1.4828v6.6777c0 .9918.4865 1.4829 1.464 1.4829h4.5856Zm2.3188-3.1169h-.8831V8.7107c0-.6044-.0661-.869-.4439-1.2561L7.4994 4.8052c-.3542-.3684-.6517-.4486-1.1853-.4486H6.21v-.8643c0-.4628.2504-.732.7415-.732h1.993v2.47c0 .543.2644.8075.8075.8075h2.4226v4.1133c0 .4676-.2503.732-.7414.732Zm.5903-5.53h-2.163c-.1652 0-.2313-.071-.2313-.2362V2.9114l2.3943 2.4416Zm-2.9752 7.8866H4.562c-.4864 0-.7367-.2645-.7367-.7367V5.8489c0-.4628.2503-.732.7414-.732h1.6435v2.739c0 .5951.3022.8879.8878.8879h2.6918v3.7592c0 .4722-.2502.7367-.7414.7367Zm.595-5.209H7.1877c-.1889 0-.2644-.0756-.2644-.2597V5.2633l2.7201 2.7674Z" clipRule="evenodd" />
, 
    'DocumentOutlined'
)

type DocumentOutlinedRef = PathIconRef

type DocumentOutlinedProps = PathIconProps

export {
    DocumentOutlined
}

export type {
    DocumentOutlinedRef,
    DocumentOutlinedProps
}

export default DocumentOutlined
