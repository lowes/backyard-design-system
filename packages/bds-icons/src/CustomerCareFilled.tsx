import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CustomerCareFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<CustomerCareFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M5.8603 13.3004c-.2559.2395-.4138.3484-.6261.3484-.3104 0-.4846-.2232-.4846-.5608v-1.5844h-.2559c-1.6225.0055-2.4936-.8874-2.4936-2.4882V4.8448c0-1.6007.8711-2.4936 2.4936-2.4936h7.0127c1.6225 0 2.4937.8984 2.4937 2.4936v4.1706c0 1.5953-.8712 2.4991-2.4937 2.4937l-3.6806-.0055-1.9655 1.7968Zm2.0139-5.3739c.1816 0 .2646-.1245.2646-.2906v-.0882c.0052-.3425.1272-.4852.5423-.7706.4463-.301.729-.6486.729-1.1494 0-.7784-.633-1.2246-1.4218-1.2246-.5863 0-1.1.2776-1.3206.7783-.0545.122-.0779.2413-.0779.34 0 .1478.0857.2516.244.2516.1323 0 .2205-.0778.2594-.205.1323-.493.4592-.6797.877-.6797.506 0 .9029.2854.9029.7368 0 .371-.231.5786-.563.8121-.4074.2828-.7058.5864-.7058 1.043v.1635c0 .166.0908.2828.2699.2828Zm0 1.4193c.2075 0 .371-.166.371-.3685 0-.205-.1635-.3684-.371-.3684a.3682.3682 0 0 0-.3685.3684c0 .2024.1661.3685.3685.3685Z" clipRule="evenodd" />
, 
    'CustomerCareFilled'
)

type CustomerCareFilledRef = PathIconRef

type CustomerCareFilledProps = PathIconProps

export {
    CustomerCareFilled
}

export type {
    CustomerCareFilledRef,
    CustomerCareFilledProps
}

export default CustomerCareFilled
