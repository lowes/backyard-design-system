import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Bolt: React.MemoExoticComponent<React.ForwardRefExoticComponent<BoltProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.9171 2.0254c-.3946-.1026-.5915.121-.7527.396L4.8196 8.4065l-.0315.0487-.0296.0547c-.0447.0868-.0783.1763-.0955.2738l-.0087.0637c-.04.4191.2762.7274.7622.7274l1.4595-.0002-.4975 3.5532c-.0404.2882.0856.8107.6614.8682.5087.0509.7207-.4163.8055-.5676l3.401-6.0533.0293-.0683c.2314-.5866-.1085-1.032-.6766-1.032l-1.4658-.0004.2134-3.4201c0-.433-.0528-.731-.4296-.829Zm-.1248.7456-.2054 3.7903-.0046.0537c-.0076.2657.1066.3282.3794.3282h1.7261l-3.7063 6.4853.6097-4.155.0045-.0536c.0076-.2657.061-.3724-.2118-.3724H5.3296L8.7923 2.771Z" />
, 
    'Bolt'
)

type BoltRef = PathIconRef

type BoltProps = PathIconProps

export {
    Bolt
}

export type {
    BoltRef,
    BoltProps
}

export default Bolt
