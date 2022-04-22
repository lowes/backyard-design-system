import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const UnlockedOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<UnlockedOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.6762 14c.9179 0 1.3707-.459 1.3707-1.4564V8.3274c0-.8445-.3243-1.2973-.9913-1.4136V5.2922c0-1.536.9852-2.3498 2.1295-2.3498 1.1443 0 2.1295.8138 2.1295 2.3498v1.3585c0 .3733.2142.5569.4957.5569.2693 0 .4896-.1653.4896-.557V5.4208C14.2999 3.1137 12.7884 2 11.1851 2 9.5819 2 8.0704 3.1137 8.0704 5.4207v1.4625H3.077c-.9179 0-1.3768.4528-1.3768 1.4442v4.2162c0 .9974.459 1.4564 1.3768 1.4564h5.5992Zm-.0306-.9179h-5.538c-.2815 0-.4222-.1285-.4222-.4712V8.2662c0-.3427.1407-.465.4222-.465h5.538c.2876 0 .4161.1223.4161.465v4.3447c0 .3427-.1285.4712-.4161.4712Z" clipRule="evenodd" />
, 
    'UnlockedOutlined'
)

type UnlockedOutlinedRef = PathIconRef

type UnlockedOutlinedProps = PathIconProps

export {
    UnlockedOutlined
}

export type {
    UnlockedOutlinedRef,
    UnlockedOutlinedProps
}

export default UnlockedOutlined
