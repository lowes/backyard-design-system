import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Pickup: React.MemoExoticComponent<React.ForwardRefExoticComponent<PickupProps>> = createPathIcon(
    <path fillRule="evenodd" d="m7.426 6.7218.1246-1.203c0-.2406.1247-.2406.3117-.0602l2.4312 3.2482c.1247.1804.0623.3007-.187.3007L5.9299 8.767c-.2494 0-.2494-.1203-.0624-.3007l.9974-.7218-3.5532-1.9249C3.1247 5.6993 3 5.5188 3 5.2782c0-.2406.1247-.421.3117-.5414L8.174 2.0902c.187-.1203.4364-.1203.6234 0l4.8 2.6466c.187.1203.3117.3008.3117.5414v5.4737c0 .2406-.1247.421-.3117.5413l-4.8 2.6466C8.6727 14 8.6104 14 8.4857 14c-.1247 0-.187 0-.3117-.0602l-4.8623-2.6466C3.1247 11.1729 3 10.9925 3 10.7519V7.6842c0-.3609.3117-.6015.6234-.6015.374 0 .6233.3008.6233.6015v2.7068l3.6156 1.9849V10.391c0-.3008.2494-.5414.561-.5414.3118 0 .5611.2406.5611.5414v2.0451l3.6156-1.985V6.3609l-1.6831.9023c-.0624.0601-.187.0601-.2494.0601-.187 0-.374-.1203-.4987-.3007-.1246-.2406-.0623-.6015.2494-.7218l1.6208-.9023-3.6156-1.985L4.87 5.3384 7.426 6.7218Z" />
, 
    'Pickup'
)

type PickupRef = PathIconRef

type PickupProps = PathIconProps

export {
    Pickup
}

export type {
    PickupRef,
    PickupProps
}

export default Pickup
