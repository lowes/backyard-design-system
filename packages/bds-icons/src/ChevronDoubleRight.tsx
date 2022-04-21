import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ChevronDoubleRight: React.MemoExoticComponent<React.ForwardRefExoticComponent<ChevronDoubleRightProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M4.0771 13.8136c-.1174.1174-.2693.1864-.4488.1864C3.2693 14 3 13.7238 3 13.3648c0-.1726.069-.3314.1795-.4488L8.206 8 3.1795 3.084C3.069 2.9666 3 2.801 3 2.6352 3 2.2762 3.2693 2 3.6283 2c.1795 0 .3314.069.4557.1933l5.4684 5.3441c.1311.1174.2002.283.2002.4626 0 .1726-.069.3314-.2002.4626l-5.4753 5.351Z" /><path fillRule="evenodd" d="M7.8298 13.8136C7.7124 13.931 7.5605 14 7.381 14c-.359 0-.6283-.2762-.6283-.6352 0-.1726.069-.3314.1795-.4488L11.9587 8 6.9322 3.084c-.1105-.1174-.1795-.283-.1795-.4488 0-.359.2693-.6352.6283-.6352.1795 0 .3314.069.4557.1933l5.4683 5.3441c.1312.1174.2003.283.2003.4626 0 .1726-.0691.3314-.2003.4626l-5.4752 5.351Z" /></React.Fragment>
, 
    'ChevronDoubleRight'
)

type ChevronDoubleRightRef = PathIconRef

type ChevronDoubleRightProps = PathIconProps

export {
    ChevronDoubleRight
}

export type {
    ChevronDoubleRightRef,
    ChevronDoubleRightProps
}

export default ChevronDoubleRight
