import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const MobileHome: React.MemoExoticComponent<React.ForwardRefExoticComponent<MobileHomeProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.7464 4.1464A.4998.4998 0 0 0 11.3929 4H4.6071a.5.5 0 0 0-.3536.1464l-2.107 2.1071A.5.5 0 0 0 2 6.6071V11.3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6.6071a.5003.5003 0 0 0-.1464-.3536l-2.1072-2.107ZM2.6 11.8h1.2v.7a.5.5 0 0 1-.5.5h-.2a.5.5 0 0 1-.5-.5v-.7Zm2.4 0h1.2v.7a.5.5 0 0 1-.5.5h-.2a.5.5 0 0 1-.5-.5v-.7Zm2.4 0h1.2v.7a.5.5 0 0 1-.5.5h-.2a.5.5 0 0 1-.5-.5v-.7Zm2.4 0H11v.7a.5.5 0 0 1-.5.5h-.2a.5.5 0 0 1-.5-.5v-.7Zm2.4 0h1.2v.7a.5.5 0 0 1-.5.5h-.2a.5.5 0 0 1-.5-.5v-.7ZM2.6 7.398a.5.5 0 0 1 .5-.5h5.6a.5.5 0 0 1 .5.5v3.2606a.5.5 0 0 1-.5.5H3.1a.5.5 0 0 1-.5-.5V7.398Zm10.8 3.2606a.5.5 0 0 1-.5.5h-2.6a.5.5 0 0 1-.5-.5V7.0892a.5.5 0 0 1 .1275-.3336l1.2202-1.3623a.5.5 0 0 1 .7258-.0202l1.3799 1.3784a.5003.5003 0 0 1 .1466.3538v3.5533Z" />
, 
    'MobileHome'
)

type MobileHomeRef = PathIconRef

type MobileHomeProps = PathIconProps

export {
    MobileHome
}

export type {
    MobileHomeRef,
    MobileHomeProps
}

export default MobileHome
