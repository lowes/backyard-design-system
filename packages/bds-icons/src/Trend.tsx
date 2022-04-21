import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Trend: React.MemoExoticComponent<React.ForwardRefExoticComponent<TrendProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.6519 4.6373c-.2392.0153-.2934.2504-.0996.4442l1.1031 1.103L8.9907 9.039 7.4463 6.1686a.7184.7184 0 0 0-.1456-.2272c-.2056-.2173-.5005-.2604-.6493-.1031l-4.5622 4.8222c-.1488.1572-.108.4689.0975.6862.2056.2173.5046.2648.6534.1075l3.9787-4.2054 1.5285 2.8407a.838.838 0 0 0 .1681.2531c.2067.2162.4815.2881.6006.1605l3.3111-3.5468.9456.9456c.1937.1937.4332.1266.4441-.0997l.1826-2.9126c.0138-.2118-.2216-.4587-.4349-.4349l-2.9126.1826Z" />
, 
    'Trend'
)

type TrendRef = PathIconRef

type TrendProps = PathIconProps

export {
    Trend
}

export type {
    TrendRef,
    TrendProps
}

export default Trend
