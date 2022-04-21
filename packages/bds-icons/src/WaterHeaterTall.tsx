import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const WaterHeaterTall: React.MemoExoticComponent<React.ForwardRefExoticComponent<WaterHeaterTallProps>> = createPathIcon(
    <path fillRule="evenodd" d="M9.92 2a.48.48 0 0 1 .48.48h.48a.96.96 0 0 1 .96.96v8.16l-.0004.0173.0004 1.4227a.96.96 0 0 1-.96.96H5.12a.96.96 0 0 1-.96-.96v-9.6a.96.96 0 0 1 .96-.96h.48a.48.48 0 0 1 .96 0h2.88A.48.48 0 0 1 9.92 2Zm1.1061 9.9567a.0987.0987 0 0 0-.0976-.1164H5.08c-.0618 0-.109.0556-.0961.1161.1336.6311.5212 1.3615 1.4915 1.3592l.0846.0024h2.88c1.1951 0 1.4635-.7093 1.5861-1.3613Zm-3.766-8.7286H5.1224a.2.2 0 0 0-.2.2005l.019 7.2519a.2.2 0 0 0 .2.1995h5.7247a.2.2 0 0 0 .2-.2005l-.0189-7.252a.2.2 0 0 0-.2-.1994H8.7001L8.72 4.4a.48.48 0 0 1-.48.48h-.48a.48.48 0 0 1-.48-.48l-.02-1.172ZM8 5.84a.72.72 0 1 1 0 1.44.72.72 0 0 1 0-1.44Z" />
, 
    'WaterHeaterTall'
)

type WaterHeaterTallRef = PathIconRef

type WaterHeaterTallProps = PathIconProps

export {
    WaterHeaterTall
}

export type {
    WaterHeaterTallRef,
    WaterHeaterTallProps
}

export default WaterHeaterTall
