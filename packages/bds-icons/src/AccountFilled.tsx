import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const AccountFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<AccountFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-4.9941c-1.1294-.0118-2.0176-.953-2.0176-2.2177C5.9764 5.6 6.8706 4.6118 8 4.6118s2.0176.9882 2.0176 2.1764c0 1.2647-.8882 2.2294-2.0176 2.2177Zm0 4.0706c-1.353 0-2.6941-.553-3.5941-1.5177l.0176-.0764c.506-.7059 1.7706-1.4765 3.5765-1.4765 1.8118 0 3.0706.7706 3.5765 1.4765l.0176.0764c-.9.9647-2.2412 1.5177-3.5941 1.5177Z" clipRule="evenodd" />
, 
    'AccountFilled'
)

type AccountFilledRef = PathIconRef

type AccountFilledProps = PathIconProps

export {
    AccountFilled
}

export type {
    AccountFilledRef,
    AccountFilledProps
}

export default AccountFilled
