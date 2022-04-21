import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const TrashFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<TrashFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.607 14c.6792 0 1.0899-.3779 1.1173-1.0571l.3505-8.0018h.8216c.2245 0 .4053-.1917.4053-.4162 0-.2246-.1808-.4108-.4053-.4108h-2.4975v-.8215C10.3989 2.5039 9.8676 2 9.0242 2H6.9758c-.8434 0-1.3692.5039-1.3692 1.2926v.8215h-2.503c-.219 0-.4053.1917-.4053.4108 0 .2245.1862.4162.4053.4162h.8325l.3505 8.0018C4.314 13.6221 4.7193 14 5.3984 14h5.2086ZM9.528 4.1141H6.483v-.7668c0-.3122.2245-.5312.5586-.5312H8.964c.3341 0 .5642.219.5642.5312v.7668Zm-3.4669 8.3797c-.1971 0-.3395-.1643-.345-.4053l-.2465-5.9698c-.011-.23.1534-.3998.3615-.3998.1917 0 .356.1807.367.3998l.2245 5.9698c.0055.2246-.1479.4053-.3615.4053Zm1.9389 0c-.1972 0-.367-.1807-.367-.4053l-.0054-5.9698c0-.2191.1752-.3998.3724-.3998.2026 0 .3779.1807.3779.3998v5.9698c0 .2246-.1807.4053-.378.4053Zm1.9388 0c-.208 0-.356-.1807-.3505-.4053l.2246-5.9698c.0054-.2191.1697-.3998.3669-.3998.2027 0 .367.1697.3615.3998l-.2465 5.9698c-.0054.241-.1533.4053-.356.4053Z" clipRule="evenodd" />
, 
    'TrashFilled'
)

type TrashFilledRef = PathIconRef

type TrashFilledProps = PathIconProps

export {
    TrashFilled
}

export type {
    TrashFilledRef,
    TrashFilledProps
}

export default TrashFilled
