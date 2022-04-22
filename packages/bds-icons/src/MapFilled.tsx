import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const MapFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<MapFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M9.5916 14V3.952L6.6246 2.132A1.1544 1.1544 0 0 0 6.2884 2v10.1862l3.027 1.6937c.0901.054.1862.0901.2763.1201Zm-7.1531-.1802c.1501 0 .3063-.048.5045-.1561l2.5225-1.3574V2.1081c-.1081.054-.2282.1141-.3363.1742L2.2823 3.9159c-.3604.1982-.5285.4865-.5285.8889v8.3243c0 .4445.2522.6907.6847.6907Zm7.9699.1682c.0601-.018.1262-.0421.1802-.0841l3.1291-1.7778c.3604-.1982.5286-.4865.5286-.8889V2.9069c0-.4444-.2523-.6907-.6847-.6907-.1562 0-.3063.048-.5045.1562l-2.6487 1.4714V13.988Z" clipRule="evenodd" />
, 
    'MapFilled'
)

type MapFilledRef = PathIconRef

type MapFilledProps = PathIconProps

export {
    MapFilled
}

export type {
    MapFilledRef,
    MapFilledProps
}

export default MapFilled
