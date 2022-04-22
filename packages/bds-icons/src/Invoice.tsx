import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Invoice: React.MemoExoticComponent<React.ForwardRefExoticComponent<InvoiceProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M6.259 7.339a.3333.3333 0 1 0 0 .6667h3.482a.3334.3334 0 1 0 0-.6666H6.259ZM5.9258 9.228a.3333.3333 0 0 1 .3333-.3334h3.4818a.3334.3334 0 1 1 0 .6667H6.2591a.3333.3333 0 0 1-.3333-.3334ZM6.259 10.4502a.3333.3333 0 1 0 0 .6666h3.482a.3333.3333 0 1 0 0-.6666H6.259Z" /><path fillRule="evenodd" d="M9.3333 3.3333C9.3333 2.597 8.7363 2 8 2c-.7364 0-1.3333.597-1.3333 1.3333H4.5556c-.5523 0-1 .4478-1 1V13c0 .5523.4477 1 1 1h6.8888c.5523 0 1-.4477 1-1V4.3333c0-.5523-.4477-1-1-1h-2.111Zm-4.8888 9.5643v-8.489a.2.2 0 0 1 .2-.2h1.3777a.2.2 0 0 1 .2.2v.489a.2.2 0 0 0 .2.2h3.1556a.2.2 0 0 0 .2-.2v-.489a.2.2 0 0 1 .2-.2h1.3778a.2.2 0 0 1 .2.2v8.489a.2.2 0 0 1-.2.2H4.6444a.2.2 0 0 1-.2-.2ZM8.6667 3.321a.6667.6667 0 1 1-1.3334 0 .6667.6667 0 0 1 1.3334 0Z" clipRule="evenodd" /></React.Fragment>
, 
    'Invoice'
)

type InvoiceRef = PathIconRef

type InvoiceProps = PathIconProps

export {
    Invoice
}

export type {
    InvoiceRef,
    InvoiceProps
}

export default Invoice
