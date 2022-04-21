import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const GiftOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<GiftOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.0716 14c1.082 0 1.6717-.5668 1.6717-1.6489v-3.561c.5325-.103.8244-.5153.8244-1.1164V6.2309c0-.6985-.3835-1.1393-1.0877-1.1393h-1.2138c.3206-.3149.5096-.7271.5096-1.1908C11.7758 2.79 10.8941 2 9.7891 2c-.8187 0-1.4942.4523-1.792 1.2595C7.6994 2.4523 7.0296 2 6.211 2c-1.1107 0-1.9867.79-1.9867 1.9008 0 .4637.1832.876.5038 1.1908H3.52c-.6698 0-1.0878.4408-1.0878 1.1393v1.4428c0 .6011.2863 1.0133.8188 1.1164v3.561C3.251 13.4332 3.8464 14 4.9284 14h6.1432Zm-3.544-8.9084h-.8873c-.9447 0-1.4485-.5553-1.4485-1.1508 0-.6183.4637-.9847 1.0763-.9847.7042 0 1.2596.5439 1.2596 1.4542v.6813Zm1.8321 0h-.8931v-.6813c0-.9103.561-1.4542 1.2653-1.4542.6126 0 1.0706.3664 1.0706.9847 0 .5955-.5153 1.1508-1.4428 1.1508ZM7.4933 7.9485H3.7548c-.2863 0-.4008-.1203-.4008-.4065V6.3569c0-.2863.1145-.4008.4008-.4008h3.7385v1.9924Zm4.7577 0H8.5067V5.956h3.7443c.2862 0 .395.1145.395.4008v1.185c0 .2863-.1088.4066-.395.4066Zm-4.7577 5.1927H4.917c-.4752 0-.7443-.2691-.7443-.7443v-3.584h3.3206v4.3283Zm3.584 0H8.5067V8.813h3.3149v3.5839c0 .4752-.2691.7443-.7443.7443Z" clipRule="evenodd" />
, 
    'GiftOutlined'
)

type GiftOutlinedRef = PathIconRef

type GiftOutlinedProps = PathIconProps

export {
    GiftOutlined
}

export type {
    GiftOutlinedRef,
    GiftOutlinedProps
}

export default GiftOutlined
