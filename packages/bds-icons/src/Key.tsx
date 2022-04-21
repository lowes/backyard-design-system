import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Key: React.MemoExoticComponent<React.ForwardRefExoticComponent<KeyProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.1315 2.0083c-2.1272 0-3.8517 1.7245-3.8517 3.8518-.0004.3786.0558.7551.1669 1.117L2 11.4238v2.5679h2.5678L9.0145 9.545a3.8517 3.8517 0 0 0 4.9688-3.3682 3.7536 3.7536 0 0 0-.7061-2.5678 3.852 3.852 0 0 0-3.1457-1.6007Zm0 6.8476a2.9959 2.9959 0 0 1-.8559-.1283l-.4922-.1498-1.7247 1.7247-.6035-.5906-.6034.6034.5906.5907-.6805.6804-.5906-.5906-.6034.6035.5906.5906-.9459.9458H2.856V11.779L7.05 7.572l.3638-.3638-.1241-.4065c-.4443-1.3972.1663-2.9131 1.4551-3.6121a2.9957 2.9957 0 0 1 4.3825 2.5678 2.8635 2.8635 0 0 1-.4665 1.712 2.996 2.996 0 0 1-2.5294 1.3865Zm.428-2.5678a.856.856 0 1 0 0-1.7119.856.856 0 0 0 0 1.7119Z" clipRule="evenodd" />
, 
    'Key'
)

type KeyRef = PathIconRef

type KeyProps = PathIconProps

export {
    Key
}

export type {
    KeyRef,
    KeyProps
}

export default Key
