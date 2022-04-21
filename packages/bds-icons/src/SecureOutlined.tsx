import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const SecureOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<SecureOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.8027 14c.9179 0 1.3707-.459 1.3707-1.4564V8.3274c0-.869-.3488-1.328-1.0587-1.4258V5.4207C11.1147 3.1137 9.6033 2 8 2S4.8853 3.1137 4.8853 5.4207v1.4809c-.7099.0979-1.0587.5568-1.0587 1.4258v4.2162c0 .9974.4529 1.4564 1.3708 1.4564h5.6053Zm-.6732-7.1168h-4.259v-1.591c0-1.536.9852-2.3498 2.1295-2.3498 1.1443 0 2.1295.8138 2.1295 2.3498v1.591Zm.6426 6.1989h-5.538c-.2815 0-.4223-.1285-.4223-.4712V8.2662c0-.3427.1408-.465.4223-.465h5.538c.2815 0 .4161.1223.4161.465v4.3447c0 .3427-.1346.4712-.4161.4712Z" clipRule="evenodd" />
, 
    'SecureOutlined'
)

type SecureOutlinedRef = PathIconRef

type SecureOutlinedProps = PathIconProps

export {
    SecureOutlined
}

export type {
    SecureOutlinedRef,
    SecureOutlinedProps
}

export default SecureOutlined
