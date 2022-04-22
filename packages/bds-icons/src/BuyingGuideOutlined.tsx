import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const BuyingGuideOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<BuyingGuideOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.3898 13.169c.3196 0 .6102-.1685.6102-.6102V4.4407c-.3196-.7787-1.6271-1.6097-3.2368-1.6097-1.2203 0-2.3186.494-2.7661 1.0518C7.5555 3.325 6.457 2.831 5.231 2.831c-1.6097 0-2.9114.831-3.231 1.6097v8.1181c0 .4417.2847.6102.6044.6102.2498 0 .401-.0755.5578-.1976.3313-.2847.9995-.6683 2.0688-.6683 1.075 0 1.8247.372 2.1153.6335.151.122.3312.2324.6508.2324.3196 0 .4998-.122.6508-.2324.3138-.2441 1.046-.6335 2.1153-.6335 1.0751 0 1.7433.3894 2.0746.6683.1569.1221.3022.1976.552.1976ZM2.9356 12.0939V4.7196c.1336-.3603.9763-1.0111 2.2954-1.0111 1.325 0 2.185.6566 2.3012 1.0111v7.3511c-.552-.4126-1.3947-.645-2.3012-.645-.9007 0-1.7433.2324-2.2954.6682Zm10.1288 0c-.5579-.4358-1.3947-.6682-2.3012-.6682-.9065 0-1.7433.2324-2.2954.645v-7.351c.1162-.3546.9763-1.0112 2.2954-1.0112 1.3249 0 2.1676.6508 2.3012 1.0111v7.3743Z" clipRule="evenodd" />
, 
    'BuyingGuideOutlined'
)

type BuyingGuideOutlinedRef = PathIconRef

type BuyingGuideOutlinedProps = PathIconProps

export {
    BuyingGuideOutlined
}

export type {
    BuyingGuideOutlinedRef,
    BuyingGuideOutlinedProps
}

export default BuyingGuideOutlined
