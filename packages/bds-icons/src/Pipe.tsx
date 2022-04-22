import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Pipe: React.MemoExoticComponent<React.ForwardRefExoticComponent<PipeProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.05 6.761a.2.2 0 0 1 .2.2v4.3997a.2.2 0 0 1-.2.2h-.8143a.2.2 0 0 1-.2-.2v-.9999H7.3929V13.8a.2.2 0 0 1-.2.2H5.1643a.2.2 0 0 1-.2-.2V9.161c0-.663.544-1.2 1.2143-1.2h4.8571v-1a.2.2 0 0 1 .2-.2h.8143ZM8.4071 2a.2.2 0 0 1 .2.2V3a.2.2 0 0 1-.2.2H7.393v3.5613H6.1786c-.4445 0-.8555.1271-1.2143.3335V3.2H3.95a.2.2 0 0 1-.2-.2V2.2a.2.2 0 0 1 .2-.2h4.4571Z" />
, 
    'Pipe'
)

type PipeRef = PathIconRef

type PipeProps = PathIconProps

export {
    Pipe
}

export type {
    PipeRef,
    PipeProps
}

export default Pipe
