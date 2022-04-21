import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const LocationOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<LocationOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M3.6857 6.3143C3.6857 3.9291 5.6147 2 8 2c2.3852 0 4.3143 1.9291 4.3143 4.3143 0 2.5701-2.7242 6.1141-3.8397 7.4638a.6118.6118 0 0 1-.943 0c-1.1217-1.3497-3.846-4.8937-3.846-7.4638Zm.7672.1291C4.453 4.4458 6.039 2.8302 8 2.8302c1.961 0 3.5471 1.6156 3.5471 3.6132 0 2.1525-2.2398 5.1205-3.157 6.2509a.4972.4972 0 0 1-.7752 0c-.9222-1.1304-3.162-4.0984-3.162-6.2509ZM8 7.8552c-.8505 0-1.5408-.6903-1.5408-1.5409 0-.8505.6903-1.5408 1.5408-1.5408.8505 0 1.5408.6903 1.5408 1.5408 0 .8506-.6903 1.5409-1.5408 1.5409Z" clipRule="evenodd" />
, 
    'LocationOutlined'
)

type LocationOutlinedRef = PathIconRef

type LocationOutlinedProps = PathIconProps

export {
    LocationOutlined
}

export type {
    LocationOutlinedRef,
    LocationOutlinedProps
}

export default LocationOutlined
