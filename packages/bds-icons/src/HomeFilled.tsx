import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const HomeFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<HomeFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.5634 8.357c.2414 0 .4366-.149.4366-.3955 0-.1541-.0616-.2517-.1541-.339l-1.7774-1.6182v-3.036c0-.226-.149-.3698-.3699-.3698h-.6729c-.226 0-.375.1438-.375.3698V4.715L8.6164 2.8553c-.1849-.1695-.4007-.2517-.6164-.2517-.2157 0-.4315.0822-.6164.2517L2.154 7.6224c-.0925.0874-.1541.185-.1541.339 0 .2466.1952.3956.4366.3956.1439 0 .2672-.0719.37-.1746l5.0136-4.5668c.0565-.0565.1182-.077.1798-.077.0668 0 .1233.0205.185.077l5.0085 4.5668c.1027.1027.2209.1746.3699.1746Zm-6.858 5.0445V9.7491c0-.2363.1542-.3904.3905-.3904h1.8133c.2415 0 .3905.1541.3905.3904v3.6524h2.0753c.7243 0 1.1558-.4161 1.1558-1.1301V8.5111L8.1644 4.5813c-.0514-.0513-.1182-.077-.1747-.077-.0565 0-.1181.0257-.1746.0822L3.469 8.5368v3.7346c0 .714.4316 1.1301 1.1559 1.1301h2.0805Z" clipRule="evenodd" />
, 
    'HomeFilled'
)

type HomeFilledRef = PathIconRef

type HomeFilledProps = PathIconProps

export {
    HomeFilled
}

export type {
    HomeFilledRef,
    HomeFilledProps
}

export default HomeFilled
