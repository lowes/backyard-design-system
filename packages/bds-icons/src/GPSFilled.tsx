import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const GPSFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<GPSFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.3743 14c.4514 0 .695-.422.9089-.8915l4.5505-9.8069c.1128-.2318.1663-.4398.1663-.6122C14 2.2973 13.7089 2 13.3109 2c-.1782 0-.3861.0476-.6178.1605l-9.802 4.5468C2.4396 6.9153 2 7.1649 2 7.6226c0 .4576.4396.7191 1.0218.7191l4.497.0179c.0832 0 .1248.0357.1248.1248l.0118 4.4874c0 .5646.2496 1.0282.7189 1.0282Z" clipRule="evenodd" />
, 
    'GPSFilled'
)

type GPSFilledRef = PathIconRef

type GPSFilledProps = PathIconProps

export {
    GPSFilled
}

export type {
    GPSFilledRef,
    GPSFilledProps
}

export default GPSFilled
