import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Enlarge: React.MemoExoticComponent<React.ForwardRefExoticComponent<EnlargeProps>> = createPathIcon(
    <path fillRule="evenodd" d="M7.019 7.6352c.3584 0 .6226-.2327.6226-.5849 0-.1698-.0566-.3207-.1698-.434l-1.9434-1.937-1.7422-1.6541 2.2013.1257h.522c.3333 0 .5912-.2327.5912-.5723S6.849 2 6.5095 2H3.0189c-.6415 0-1.0126.371-1.0126 1.0126V6.503c0 .327.2453.585.5787.585.3333 0 .5723-.2516.5723-.585v-.5283l-.1258-2.195 1.654 1.7422 1.9372 1.9497c.107.1132.2453.1635.3962.1635ZM12.9748 14c.6415 0 1.0189-.3711 1.0189-1.0126V9.4969c0-.327-.2453-.585-.5849-.585-.3271 0-.5724.2516-.5724.585v.5283l.1321 2.1949-1.6604-1.7421-1.9308-1.9497c-.1069-.1132-.2516-.1635-.4025-.1635-.3522 0-.6226.2327-.6226.5849 0 .1698.0629.3207.176.434l1.9372 1.9371 1.7484 1.654-2.2013-.1257h-.5283c-.3333 0-.5912.2327-.5912.5723S9.151 14 9.4843 14h3.4906Z" clipRule="evenodd" />
, 
    'Enlarge'
)

type EnlargeRef = PathIconRef

type EnlargeProps = PathIconProps

export {
    Enlarge
}

export type {
    EnlargeRef,
    EnlargeProps
}

export default Enlarge
