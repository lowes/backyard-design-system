import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CreditCard: React.MemoExoticComponent<React.ForwardRefExoticComponent<CreditCardProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.8 3.091H3.2c-.666 0-1.194.546-1.194 1.2272L2 11.6818c0 .6812.534 1.2273 1.2 1.2273h9.6c.666 0 1.2-.5461 1.2-1.2273V4.3182c0-.6812-.534-1.2273-1.2-1.2273Zm.3429 8.4376a.5.5 0 0 1-.5.5H3.3571a.5.5 0 0 1-.5-.5V6.7143H13.143v4.8143Zm0-6.5286H2.8571v-.3571a.5.5 0 0 1 .5-.5h9.2858a.5.5 0 0 1 .5.5V5Z" clipRule="evenodd" />
, 
    'CreditCard'
)

type CreditCardRef = PathIconRef

type CreditCardProps = PathIconProps

export {
    CreditCard
}

export type {
    CreditCardRef,
    CreditCardProps
}

export default CreditCard
