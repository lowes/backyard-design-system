import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ExtendedItem: React.MemoExoticComponent<React.ForwardRefExoticComponent<ExtendedItemProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M2.646 3.5748a.2727.2727 0 0 1 .2727-.2727h1.0909a.2727.2727 0 1 1 0 .5455h-.8182v.8182a.2727.2727 0 1 1-.5454 0v-1.091ZM5.6964 4.393v5.815a2.1161 2.1161 0 0 0-.4392-.6913V4.393h.4392ZM4.5109 4.393v4.6166a2.0666 2.0666 0 0 0-.77-.1484V4.393h.77ZM7.6897 4.393v7.2552H6.4333V4.393h1.2564ZM8.9509 11.6482V4.393h-.803v7.2552h.803ZM10.6749 4.393v7.2552h-1.247V4.393h1.247ZM12.0353 11.6482V4.393h-.9778v7.2552h.9778ZM12.9091 4.393v7.2552h-.6329V4.393h.6329ZM3.1248 10.8094c0 .2628.2134.4763.4762.4763a.4766.4766 0 0 0 .4763-.4763.477.477 0 0 0-.4763-.4762.477.477 0 0 0-.4762.4762Z" /><path fillRule="evenodd" d="M5.4819 10.9569c0 .9528-.7951 1.741-1.741 1.741-.9527 0-1.7409-.7814-1.7409-1.741 0-.9527.7882-1.7409 1.741-1.7409.956 0 1.7409.7882 1.7409 1.7409Zm-.8665.6983c0 .1031-.078.1838-.183.1838-.0484 0-.0968-.017-.1318-.052l-.3381-.339a.73.73 0 0 1-.3615.096c-.4036 0-.7345-.331-.7345-.7346 0-.4027.331-.7345.7345-.7345.4036 0 .7346.3318.7346.7345a.7253.7253 0 0 1-.1077.3803l.3355.3354a.1808.1808 0 0 1 .052.1301Z" clipRule="evenodd" /><path fillRule="evenodd" d="M13.7273 4.9385A.2727.2727 0 0 0 14 4.6657V3.5749a.2727.2727 0 0 0-.2727-.2727h-1.0909a.2727.2727 0 1 0 0 .5455h.8181v.8182c0 .1506.1221.2727.2728.2727ZM12.6364 12.6979a.2727.2727 0 1 1 0-.5455h.8181v-.8181a.2728.2728 0 1 1 .5455 0v1.0909a.2727.2727 0 0 1-.2727.2727h-1.0909Z" /></React.Fragment>
, 
    'ExtendedItem'
)

type ExtendedItemRef = PathIconRef

type ExtendedItemProps = PathIconProps

export {
    ExtendedItem
}

export type {
    ExtendedItemRef,
    ExtendedItemProps
}

export default ExtendedItem
