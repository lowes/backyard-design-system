import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const AccountOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<AccountOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm3.7294-2.6529c-.5941-.7059-1.9588-1.3412-3.7294-1.3412s-3.1294.6294-3.7294 1.3353C3.4823 10.4588 3.0059 9.2882 3.0059 8c0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 1.2941-.4765 2.4647-1.2706 3.3471ZM8 9.0059c1.1294.0117 2.0176-.953 2.0176-2.2177C10.0176 5.6 9.1294 4.6118 8 4.6118S5.9765 5.6 5.9824 6.7882C5.9882 8.053 6.8706 8.9942 8 9.006Z" clipRule="evenodd" />
, 
    'AccountOutlined'
)

type AccountOutlinedRef = PathIconRef

type AccountOutlinedProps = PathIconProps

export {
    AccountOutlined
}

export type {
    AccountOutlinedRef,
    AccountOutlinedProps
}

export default AccountOutlined
