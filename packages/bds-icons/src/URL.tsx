import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const URL: React.MemoExoticComponent<React.ForwardRefExoticComponent<URLProps>> = createPathIcon(
    <path fillRule="evenodd" d="m7.9294 10.3258.751-.7622c-.7453-.0564-1.2309-.2823-1.5979-.6493-.988-.988-.9824-2.3883-.0056-3.365l1.8406-1.8407c.988-.9824 2.377-.988 3.365 0 .9881.9881.9768 2.3827 0 3.3595l-1.1066 1.1066c.1581.3613.192.7791.1355 1.1461l1.66-1.6543c1.3494-1.355 1.3607-3.269-.0057-4.641-1.372-1.372-3.2916-1.3607-4.6467-.0057l-1.9253 1.931c-1.355 1.355-1.3663 3.2747.0057 4.641.3556.3557.8073.6098 1.53.734Zm-.254 2.6593 1.931-1.9366c1.355-1.355 1.3663-3.2747-.0057-4.641-.3557-.3557-.8074-.6098-1.5301-.734l-.751.7622c.7453.0621 1.2309.2823 1.5979.6493.988.988.9824 2.3883.0056 3.365L7.077 12.2907c-.9824.9824-2.3714.988-3.3594.0056-.988-.9937-.9824-2.3826 0-3.365L4.824 7.8246c-.158-.3557-.1976-.7791-.1355-1.1461l-1.66 1.6543c-1.3494 1.355-1.3606 3.2747.0057 4.641 1.372 1.372 3.2916 1.3607 4.641.0113Z" clipRule="evenodd" />
, 
    'URL'
)

type URLRef = PathIconRef

type URLProps = PathIconProps

export {
    URL
}

export type {
    URLRef,
    URLProps
}

export default URL
