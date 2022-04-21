import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Truck: React.MemoExoticComponent<React.ForwardRefExoticComponent<TruckProps>> = createPathIcon(
    <path fillRule="evenodd" d="M2 6.1267c0-1.3807 1.1193-2.5 2.5-2.5h6.2551V5.932h1.4255L14 7.1659v3.5705h-.7731c0 .904-.7329 1.6369-1.6369 1.6369s-1.6369-.7329-1.6369-1.6369H6.0662c0 .904-.7328 1.6369-1.6368 1.6369s-1.637-.7329-1.637-1.6369H2V6.1267Zm7.953 3.8091H5.8575c-.2804-.499-.8148-.8363-1.428-.8363-.6133 0-1.1477.3372-1.4281.8363H2.802V5.9273c0-.8285.6715-1.5 1.5-1.5h5.651v5.5085Zm2.2049-3.4707h-1.4028v1.5216h2.7461v-.6054l-1.3433-.9162Zm-7.7285 5.1076a.8363.8363 0 1 0 0-1.6726.8363.8363 0 1 0 0 1.6726Zm7.1605 0a.8363.8363 0 0 0 .8363-.8363.8363.8363 0 1 0-.8363.8363Z" clipRule="evenodd" />
, 
    'Truck'
)

type TruckRef = PathIconRef

type TruckProps = PathIconProps

export {
    Truck
}

export type {
    TruckRef,
    TruckProps
}

export default Truck
