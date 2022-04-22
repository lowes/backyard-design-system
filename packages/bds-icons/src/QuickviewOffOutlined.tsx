import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const QuickviewOffOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<QuickviewOffOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.8924 11.9045c.1405-.1449.1318-.3425 0-.4786L4.551 4.0889c-.1317-.1317-.3512-.1317-.483 0-.1273.1273-.1273.3513 0 .4786l7.3458 7.337c.1318.1361.3425.1449.4786 0Zm-.1054-1.2031C13.1745 9.8014 14 8.6202 14 8.1021c0-.9001-2.4501-3.763-5.9978-3.763-.764 0-1.4578.1318-2.1032.347l.5796.5751c.483-.1449.9791-.2283 1.5236-.2283 2.8891 0 5.2294 2.5467 5.2294 3.0692 0 .3556-.7684 1.3128-1.9846 2.0592l.54.5401ZM8.0022 11.865c.8167 0 1.5631-.1449 2.2437-.3776l-.5752-.5752c-.5225.1624-1.0757.259-1.6685.259-2.8935 0-5.2338-2.45-5.2338-3.0691 0-.3074.8123-1.3304 2.1076-2.1076L4.3315 5.45C2.8694 6.3545 2 7.5708 2 8.102c0 .8958 2.4984 3.763 6.0022 3.763Zm2.2525-2.8013a2.2957 2.2957 0 0 0 .2107-.9616c0-1.3743-1.0977-2.4589-2.4632-2.4589-.3469 0-.6718.0747-.966.202l3.2185 3.2185Zm-2.2525 1.4972c.3864 0 .7508-.0966 1.0757-.2547l-3.293-3.293c-.1625.3249-.2547.6937-.2547 1.0889.0044 1.3392 1.0977 2.4588 2.472 2.4588Z" clipRule="evenodd" />
, 
    'QuickviewOffOutlined'
)

type QuickviewOffOutlinedRef = PathIconRef

type QuickviewOffOutlinedProps = PathIconProps

export {
    QuickviewOffOutlined
}

export type {
    QuickviewOffOutlinedRef,
    QuickviewOffOutlinedProps
}

export default QuickviewOffOutlined
