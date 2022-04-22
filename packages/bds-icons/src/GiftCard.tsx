import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const GiftCard: React.MemoExoticComponent<React.ForwardRefExoticComponent<GiftCardProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.8 4.7h-1.308c.066-.186.108-.39.108-.6 0-.996-.804-1.8-1.8-1.8-.63 0-1.176.324-1.5.81l-.3.402-.3-.408c-.324-.48-.87-.804-1.5-.804-.996 0-1.8.804-1.8 1.8 0 .21.042.414.108.6H3.2c-.666 0-1.194.534-1.194 1.2L2 12.5c0 .666.534 1.2 1.2 1.2h9.6c.666 0 1.2-.534 1.2-1.2V5.9c0-.666-.534-1.2-1.2-1.2ZM9.805 3.155c.5225 0 .95.4275.95.95s-.4275.95-.95.95-.95-.4275-.95-.95.4275-.95.95-.95Zm-3.61 0c.5225 0 .95.4275.95.95s-.4275.95-.95.95-.95-.4275-.95-.95.4275-.95.95-.95Zm6.84 9.095a.5.5 0 0 1-.5.5h-9.07a.5.5 0 0 1-.5-.5v-.95h10.07v.95Zm0-2.35H2.965V6.315a.5.5 0 0 1 .5-.5h2.783l-.9053 1.2935a.6064.6064 0 0 0 .9855.7068L8 5.54 9.672 7.8153a.6064.6064 0 0 0 .9855-.7068L9.752 5.815h2.783a.5.5 0 0 1 .5.5V9.9Z" clipRule="evenodd" />
, 
    'GiftCard'
)

type GiftCardRef = PathIconRef

type GiftCardProps = PathIconProps

export {
    GiftCard
}

export type {
    GiftCardRef,
    GiftCardProps
}

export default GiftCard
