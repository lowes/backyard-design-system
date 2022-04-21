import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const MapOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<MapOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M9.9672 14c.2087 0 .4173-.0537.5961-.155l3.1178-1.7705c.3576-.1967.5186-.4828.5186-.8822V2.924c0-.4411-.2444-.6856-.6736-.6856-.1491 0-.304.0477-.5008.155L9.8659 4.152l-3.237-1.985C6.4441 2.0595 6.2355 2 6.027 2c-.2147 0-.4293.0596-.614.167l-3.1 1.7645c-.3517.2026-.5126.4888-.5126.8882v8.2563c0 .4411.2444.6915.6736.6915.149 0 .304-.0536.4948-.1609l3.0343-1.6334 3.2965 1.848c.2147.1192.4471.1788.6677.1788Zm-7.1296-1.4665c-.0477 0-.0776-.0357-.0776-.0953v-7.386c0-.1431.0537-.2444.1968-.328l2.444-1.4306a6.9278 6.9278 0 0 0 .2147-.1192v7.8509L2.927 12.5037c-.0298.0119-.0596.0298-.0895.0298Zm6.5871.1848c-.0834-.0477-.1728-.0894-.2623-.1371l-2.5871-1.4605V3.2996l.1907.1073 2.6587 1.6214v7.69Zm.9598.1073V4.9687l2.6885-1.4665c.0298-.0179.0596-.0298.0835-.0298.0536 0 .0834.0358.0834.0954v7.386c0 .149-.0596.2504-.1967.3338l-2.3904 1.389c-.0895.0537-.1789.1073-.2683.149Z" clipRule="evenodd" />
, 
    'MapOutlined'
)

type MapOutlinedRef = PathIconRef

type MapOutlinedProps = PathIconProps

export {
    MapOutlined
}

export type {
    MapOutlinedRef,
    MapOutlinedProps
}

export default MapOutlined
