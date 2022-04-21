import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ArrowRight: React.MemoExoticComponent<React.ForwardRefExoticComponent<ArrowRightProps>> = createPathIcon(
    <path fillRule="evenodd" d="M9.0889 12.8982c.155 0 .2907-.0581.42-.1809L13.806 8.433C13.9354 8.3102 14 8.1616 14 8c0-.1616-.0646-.3102-.1939-.433L9.5218 3.2956c-.1422-.1421-.2779-.1938-.433-.1938-.3166 0-.5621.2326-.5621.5557 0 .1551.0517.3037.155.4071l1.4475 1.4734 2.1713 1.9838-1.5574-.097H2.5687C2.2327 7.4249 2 7.664 2 8c0 .336.2326.5751.5687.5751h8.1744l1.5638-.097-2.1777 1.9839-1.4475 1.4734c-.1033.0969-.155.252-.155.4071 0 .3231.2455.5557.5622.5557Z" clipRule="evenodd" />
, 
    'ArrowRight'
)

type ArrowRightRef = PathIconRef

type ArrowRightProps = PathIconProps

export {
    ArrowRight
}

export type {
    ArrowRightRef,
    ArrowRightProps
}

export default ArrowRight
