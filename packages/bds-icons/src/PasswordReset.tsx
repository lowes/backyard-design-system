import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const PasswordReset: React.MemoExoticComponent<React.ForwardRefExoticComponent<PasswordResetProps>> = createPathIcon(
    <path fillRule="evenodd" d="M7.4305 14c1.9824 0 3.7589-1 4.853-2.5118.2-.2588.1353-.5823-.1-.7294-.2471-.147-.5294-.0706-.7059.1647-.9 1.253-2.3706 2.0706-4.047 2.0765-2.7765.0059-5-2.2294-5-5 0-2.7765 2.2235-4.9941 5-4.9941 2.3882 0 4.3646 1.6353 4.8764 3.8588h-.8529c-.4177 0-.5236.2882-.3.6059l1.3176 1.8765c.1883.2706.4706.2764.6647 0l1.3118-1.8706c.2353-.3236.1235-.6118-.2941-.6118h-.8294C12.7835 4.1117 10.3247 2 7.4305 2c-3.2764 0-6 2.7176-6 6 0 3.2765 2.7236 6 6 6ZM8.96 10.8353c.406 0 .6-.2.6-.6412v-2.353c0-.3882-.147-.5882-.4588-.6352v-.7c0-1.147-.694-1.8882-1.6706-1.8882-.9764 0-1.6706.7411-1.6706 1.8882v.7059c-.3117.047-.4588.247-.4588.6294v2.3529c0 .4412.1942.6412.6.6412H8.96ZM8.4894 7.2H6.3717v-.7588c0-.7412.4236-1.2294 1.0588-1.2294.6353 0 1.0589.4882 1.0589 1.2294V7.2Z" clipRule="evenodd" />
, 
    'PasswordReset'
)

type PasswordResetRef = PathIconRef

type PasswordResetProps = PathIconProps

export {
    PasswordReset
}

export type {
    PasswordResetRef,
    PasswordResetProps
}

export default PasswordReset
