import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const DemoFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<DemoFilledProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M8 9.0944c-1.0774 0-1.938-.8628-1.938-1.9402 0-1.075.8583-1.9401 1.9356-1.9401 1.0774 0 1.9402.865 1.9425 1.9401.0022 1.0774-.8628 1.9402-1.9402 1.9402Zm.8194-1.8215-1.2212.7213c-.1004.0593-.2145.0137-.2145-.0913v-1.495c0-.1028.121-.1461.2145-.0913l1.2212.7258c.0867.0502.089.1757 0 .2305Z" clipRule="evenodd" /><path fillRule="evenodd" d="M12.8314 10.9284c.7775 0 1.1686-.3729 1.1686-1.1686V4.5487c0-.7958-.3911-1.1686-1.1686-1.1686H3.1686C2.3911 3.38 2 3.7529 2 4.5487v5.211c0 .7958.391 1.1687 1.1686 1.1687h4.0619l-.8437 1.0054c-.0546.0651-.0007.2016.1216.3043.1224.1027.2662.132.3208.0669l.882-1.0512v1.2129c0 .0849.129.1532.2888.1532.1597 0 .2888-.0683.2888-.1532v-1.2128l.883 1.0524c.0546.0651.1973.0345.3197-.0682.1224-.1027.1773-.2379.1227-.303l-.8447-1.0067h4.0619ZM8 9.4824c1.2736 0 2.3281-1.0545 2.3281-2.3282 0-1.2713-1.0567-2.3281-2.3304-2.3281-1.2713 0-2.3259 1.0568-2.3259 2.3281C5.6718 8.428 6.7286 9.4824 8 9.4824Z" clipRule="evenodd" /></React.Fragment>
, 
    'DemoFilled'
)

type DemoFilledRef = PathIconRef

type DemoFilledProps = PathIconProps

export {
    DemoFilled
}

export type {
    DemoFilledRef,
    DemoFilledProps
}

export default DemoFilled
