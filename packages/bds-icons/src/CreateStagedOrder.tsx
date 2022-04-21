import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CreateStagedOrder: React.MemoExoticComponent<React.ForwardRefExoticComponent<CreateStagedOrderProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.625 10.6455h2.0264c.2251 0 .394.2251.3377.394 0 .2251-.1689.394-.394.394H2.3941c-.2252 0-.3941-.2252-.3941-.394 0-.2252.1689-.394.394-.394h2.0263v-.394H3.0694c-.1688 0-.3377-.1689-.3377-.3377 0-.169.1689-.3378.3377-.3378h1.351v-.2814h-.6755c-.2252 0-.3377-.1689-.3377-.3377 0-.2252.1688-.3377.3377-.3377h.6754v-2.364l.8443-1.5761c.0468-.0876.1126-.1126.1689-.1126h5.1784c.0563 0 .1236.0384.1688.1126l.8443 1.5197v2.4203h.6192c.2251 0 .3377.169.3377.3378 0 .2251-.1688.3377-.3377.3377h-.6192v.2814h1.3509c.1689 0 .3377.1689.3377.3377 0 .1689-.1688.3378-.3377.3378H11.625v.394Zm-.8443-4.6718-.4503-.7317H8.5856v.7317h2.1951Zm-4.897-.7317h1.6887v.7317H5.4335l.4503-.7317Zm4.8659 5.4035a.2.2 0 0 0 .2-.2V6.9617a.2.2 0 0 0-.2-.2H8.7293a.2.2 0 0 0-.2.2v.8946a.2.2 0 0 1-.2.2h-.5569a.2.2 0 0 1-.2-.2v-.8946a.2.2 0 0 0-.2-.2H5.4646a.2.2 0 0 0-.2.2v3.4838a.2.2 0 0 0 .2.2h5.285Z" clipRule="evenodd" />
, 
    'CreateStagedOrder'
)

type CreateStagedOrderRef = PathIconRef

type CreateStagedOrderProps = PathIconProps

export {
    CreateStagedOrder
}

export type {
    CreateStagedOrderRef,
    CreateStagedOrderProps
}

export default CreateStagedOrder
