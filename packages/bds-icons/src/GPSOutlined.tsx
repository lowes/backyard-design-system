import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const GPSOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<GPSOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.3743 14c.4514 0 .695-.422.9089-.8915l4.5505-9.8069c.1128-.2318.1663-.4398.1663-.6122C14 2.2973 13.7089 2 13.3109 2c-.1782 0-.3861.0476-.6178.1605l-9.802 4.5468C2.4396 6.9153 2 7.1649 2 7.6226c0 .4576.4396.7191 1.0218.7191l4.497.0179c.0832 0 .1248.0357.1248.1248l.0118 4.4874c0 .5646.2496 1.0282.7189 1.0282Zm.1544-1.4502.0357-4.7014c0-.2436-.1664-.416-.4218-.416l-4.699.0356c-.0476 0-.0535-.0594 0-.0832l9.4099-4.321c.0713-.0356.1188 0 .0772.0833l-4.3188 9.4146c-.0238.0535-.0832.0356-.0832-.0119Z" clipRule="evenodd" />
, 
    'GPSOutlined'
)

type GPSOutlinedRef = PathIconRef

type GPSOutlinedProps = PathIconProps

export {
    GPSOutlined
}

export type {
    GPSOutlinedRef,
    GPSOutlinedProps
}

export default GPSOutlined
