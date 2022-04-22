import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const SecureFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<SecureFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.9277 14c.7935 0 1.181-.3936 1.181-1.2547V8.2307c0-.775-.3199-1.1748-.978-1.2425v-1.55C11.1307 3.1194 9.6115 2 8 2S4.8693 3.1194 4.8693 5.4382V7.019c-.6028.0922-.978.4859-.978 1.2117v4.5146c0 .8611.3875 1.2547 1.181 1.2547h5.8554ZM5.8595 6.9882V5.3091c0-1.5438.9903-2.3619 2.1405-2.3619s2.1404.818 2.1404 2.3619v1.673l-4.2809.0061Z" clipRule="evenodd" />
, 
    'SecureFilled'
)

type SecureFilledRef = PathIconRef

type SecureFilledProps = PathIconProps

export {
    SecureFilled
}

export type {
    SecureFilledRef,
    SecureFilledProps
}

export default SecureFilled
