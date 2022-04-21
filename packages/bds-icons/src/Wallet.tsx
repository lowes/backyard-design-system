import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Wallet: React.MemoExoticComponent<React.ForwardRefExoticComponent<WalletProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M10.5714 8.8571a.8572.8572 0 1 0 0-1.7143.8572.8572 0 0 0 0 1.7143Z" /><path fillRule="evenodd" d="M13.3684 3.3333v1.52A1.348 1.348 0 0 1 14 6v4c0 .4933-.2589.9133-.6316 1.1467v1.52C13.3684 13.4 12.8 14 12.1053 14H3.2632C2.5622 14 2 13.4 2 12.6667V3.3333C2 2.6 2.5621 2 3.2632 2h8.8421c.6947 0 1.2631.6 1.2631 1.3333ZM13.1 6a.5.5 0 0 0-.5-.5H8.5A.5.5 0 0 0 8 6v4a.5.5 0 0 0 .5.5h4.1a.5.5 0 0 0 .5-.5V6Zm-9.6 7a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8.5001a.5.5 0 0 1 .5.5v1.1667H8.3159c-.6948 0-1.2632.6-1.2632 1.3333v4c0 .7333.5684 1.3333 1.2632 1.3333H12.5V12.5a.5.5 0 0 1-.5.5h-8.5Z" clipRule="evenodd" /></React.Fragment>
, 
    'Wallet'
)

type WalletRef = PathIconRef

type WalletProps = PathIconProps

export {
    Wallet
}

export type {
    WalletRef,
    WalletProps
}

export default Wallet
