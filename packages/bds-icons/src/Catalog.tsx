import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Catalog: React.MemoExoticComponent<React.ForwardRefExoticComponent<CatalogProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M6.9317 5.3287h-.7045v.3522h.7045v-.3522ZM9.4802 6.1536l.6266-.322-.161-.3132-.6266.322.161.3132Z" /><path fillRule="evenodd" d="m13.977 10.9649-3.6988-7.2214c-.0587-.0587-.1174-.1174-.1761-.1174h-.1174l-1.9375.998v-.7045c0-.1174-.1174-.2348-.2348-.2348H5.4052c-.1174 0-.2348.1174-.2348.2348v8.1021c0 .1174.1174.2348.2348.2348h2.4072c.1174 0 .2348-.1174.2348-.2348V5.6809l3.4052 6.5756c.0587.0587.1174.1174.1761.1174h.1175l2.1136-1.1155c.1174-.0587.1761-.1761.1174-.2935Zm-6.693.5871H5.9336V4.5067H7.284v7.0453Zm1.3503-6.3407 3.2291 6.2233 1.1742-.5871-3.229-6.2234-1.1743.5871Z" clipRule="evenodd" /><path fillRule="evenodd" d="M3.0568 5.3287h.7045v.3522h-.7045v-.3522Z" /><path fillRule="evenodd" d="M2.2348 3.7435H4.642c.1174 0 .1761.1174.2348.2348v8.1021c0 .1174-.1174.2348-.2348.2348H2.2348c-.1174 0-.2348-.1174-.2348-.2348v-8.102c0-.1175.1174-.235.2348-.235Zm.4697 7.8085H4.055V4.5067H2.7045v7.0453Z" clipRule="evenodd" /></React.Fragment>
, 
    'Catalog'
)

type CatalogRef = PathIconRef

type CatalogProps = PathIconProps

export {
    Catalog
}

export type {
    CatalogRef,
    CatalogProps
}

export default Catalog
