import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const TakePayment: React.MemoExoticComponent<React.ForwardRefExoticComponent<TakePaymentProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M6.209 5.5947H3.704c-.1504 0-.2507-.1002-.2507-.2507 0-.1504.1003-.25.2507-.25h2.505c.1504 0 .2507.0996.2507.25 0 .1505-.1003.2507-.2507.2507ZM5.0316 6.722H3.7287c-.1498 0-.25-.1002-.25-.2506 0-.1504.1002-.25.25-.25h1.3277c.1504 0 .2507.0996.2507.25s-.125.2507-.2755.2507ZM6.0339 6.722h.1751c.1504 0 .2507-.1002.2507-.2506 0-.1504-.1003-.25-.2507-.25H6.034c-.1505 0-.2507.0996-.2507.25s.1002.2507.2507.2507Z" /><path fillRule="evenodd" d="M9.3654 6.797h1.1278c.2253 0 .4004-.175.4004-.4004v-.9774c0-.2252-.1751-.4004-.4004-.4004H9.3654c-.2253 0-.4005.1752-.4005.4005v.9773c0 .2253.1752.4005.4005.4005Zm1.0274-.5007H9.491V5.545h.9018v.7514Z" clipRule="evenodd" /><path fillRule="evenodd" d="M13.1984 5.4195h-1.0021v-.952c0-.401-.3256-.7514-.7514-.7514H2.7521c-.4011 0-.7521.3256-.7521.7514v5.2607c0 .4011.3262.7514.752.7514h.952v1.0021c0 .4512.3504.8022.8016.8022h8.6928c.4513 0 .8016-.351.8016-.8022V6.2211c0-.4513-.3503-.8016-.8016-.8016Zm-1.7535 4.5593H2.7521c-.1257 0-.2507-.1002-.2507-.2506V9.077h9.1688v.6512c.0254.1256-.1003.2506-.2253.2506ZM2.752 4.2168h8.6929c.125 0 .2506.1003.2506.2507v3.4322H2.5261V4.4675c0-.1504.1003-.2507.226-.2507Z" clipRule="evenodd" /></React.Fragment>
, 
    'TakePayment'
)

type TakePaymentRef = PathIconRef

type TakePaymentProps = PathIconProps

export {
    TakePayment
}

export type {
    TakePaymentRef,
    TakePaymentProps
}

export default TakePayment
