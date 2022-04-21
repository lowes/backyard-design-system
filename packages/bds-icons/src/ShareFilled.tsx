import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ShareFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<ShareFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.4299 9.7192a2.1404 2.1404 0 0 0-1.6652.809L6.6354 8.5719c.114-.368.114-.762 0-1.1301l3.1293-1.9564c.6558.812 1.8017 1.0327 2.7121.5221.9104-.5105 1.3198-1.6033.969-2.5864-.3509-.983-1.3597-1.5696-2.3876-1.3884-1.028.1813-1.7752 1.0776-1.7687 2.1214.002.1914.0308.3816.0856.565L6.2458 6.6755a2.1404 2.1404 0 1 0 0 2.6627l3.1293 1.9563a2.0515 2.0515 0 0 0-.0856.5651c0 1.1821.9583 2.1404 2.1404 2.1404 1.1822 0 2.1404-.9583 2.1404-2.1404 0-1.1821-.9582-2.1404-2.1404-2.1404Z" clipRule="evenodd" />
, 
    'ShareFilled'
)

type ShareFilledRef = PathIconRef

type ShareFilledProps = PathIconProps

export {
    ShareFilled
}

export type {
    ShareFilledRef,
    ShareFilledProps
}

export default ShareFilled
