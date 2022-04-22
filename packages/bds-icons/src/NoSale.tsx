import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const NoSale: React.MemoExoticComponent<React.ForwardRefExoticComponent<NoSaleProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.2006 4.5611a.375.375 0 0 0-.6512-.372L8.488 6.0464a2.243 2.243 0 0 0-.863-.1714c-1.2426 0-2.25 1.0073-2.25 2.25 0 .735.3525 1.3877.8976 1.7983l-.4741.8298a.3691.3691 0 0 0-.0485-.0031h-2.5a.5.5 0 0 1-.5-.5v-4.25a.5.5 0 0 1 .5-.5h4.375a.375.375 0 1 0 0-.75h-5.25A.375.375 0 0 0 2 5.125v6a.375.375 0 0 0 .375.375h2.9967l-.3223.5639a.375.375 0 0 0 .6512.3721l1.2386-2.1675c.2162.0691.4466.1065.6858.1065 1.2426 0 2.25-1.0074 2.25-2.25 0-.6673-.2904-1.2666-.7517-1.6787l.5681-.9943a.3733.3733 0 0 0 .1836.048h2.875a.5.5 0 0 1 .5.5v4.25a.5.5 0 0 1-.5.5H7.625a.375.375 0 0 0 0 .75h6a.375.375 0 0 0 .375-.375v-6a.375.375 0 0 0-.375-.375h-3.5324l.108-.189ZM8.0354 6.8386a1.3491 1.3491 0 0 0-.4104-.0635c-.7456 0-1.35.6044-1.35 1.35 0 .3999.1739.7591.4502 1.0063l1.3102-2.2928ZM7.403 9.4569l1.2566-2.199c.1969.2345.3154.537.3154.8672 0 .7455-.6044 1.35-1.35 1.35a1.3593 1.3593 0 0 1-.222-.0182ZM3.125 6.25a.375.375 0 0 1 .375-.375H5a.375.375 0 1 1 0 .75H3.5a.375.375 0 0 1-.375-.375ZM3.5 7a.375.375 0 1 0 0 .75h.75a.375.375 0 1 0 0-.75H3.5Z" clipRule="evenodd" />
, 
    'NoSale'
)

type NoSaleRef = PathIconRef

type NoSaleProps = PathIconProps

export {
    NoSale
}

export type {
    NoSaleRef,
    NoSaleProps
}

export default NoSale
