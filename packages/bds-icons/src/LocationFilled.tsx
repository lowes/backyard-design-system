import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const LocationFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<LocationFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 2C5.6148 2 3.6857 3.9291 3.6857 6.3143c0 2.5701 2.7242 6.1141 3.8459 7.4638a.6118.6118 0 0 0 .943 0c1.1155-1.3497 3.8397-4.8937 3.8397-7.4638C12.3143 3.9291 10.3852 2 8 2Zm0 5.8552c-.8505 0-1.5408-.6903-1.5408-1.5409 0-.8505.6903-1.5408 1.5408-1.5408.8505 0 1.5408.6903 1.5408 1.5408 0 .8506-.6903 1.5409-1.5408 1.5409Z" clipRule="evenodd" />
, 
    'LocationFilled'
)

type LocationFilledRef = PathIconRef

type LocationFilledProps = PathIconProps

export {
    LocationFilled
}

export type {
    LocationFilledRef,
    LocationFilledProps
}

export default LocationFilled
