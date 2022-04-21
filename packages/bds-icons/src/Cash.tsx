import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Cash: React.MemoExoticComponent<React.ForwardRefExoticComponent<CashProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M8.0264 10.7753c-.793 0-1.4802-.6343-1.4802-1.4801 0-.8459.6344-1.4802 1.4802-1.4802s1.4802.6343 1.4802 1.4802c0 .8458-.6872 1.4801-1.4802 1.4801Zm0-2.1674c-.37 0-.6872.3172-.6872.6873 0 .37.3172.6872.6873.6872.37 0 .6872-.3172.6872-.6872 0-.423-.3172-.6873-.6872-.6873Z" clipRule="evenodd" /><path fillRule="evenodd" d="M3.4802 7.445c-.1586 0-.3172.1057-.3172.3171.022.3172.3172.3172.3172.3172h.9515c.1586 0 .3172-.1057.3172-.3172 0-.1586-.1057-.3172-.3172-.3172h-.9515ZM3.163 8.7137c0-.2115.1586-.3172.3172-.3172h.4757c.2115 0 .3172.1586.3172.3172 0 .2114-.1586.3171-.3172.3171h-.4757c-.1187 0-.3077-.0857-.3172-.3171Z" /><path fillRule="evenodd" d="M2.5 12.3084a.5.5 0 0 1-.5-.5V6.4405a.2115.2115 0 0 1 .2115-.2114.2115.2115 0 0 0 .2114-.2115v-.8458a.2115.2115 0 0 1 .2115-.2115.2115.2115 0 0 0 .2114-.2114v-.5573a.5.5 0 0 1 .5-.5h9.3084a.5.5 0 0 1 .5.5v.5573c0 .1168.0947.2115.2114.2115a.2115.2115 0 0 1 .2115.2114v.8458c0 .1168.0947.2115.2114.2115A.2115.2115 0 0 1 14 6.4405v5.3679a.5.5 0 0 1-.5.5h-11Zm10.26-.7401a.5.5 0 0 0 .5-.5V7.5749a.5.5 0 0 0-.5-.5H3.293a.5.5 0 0 0-.5.5v3.4934a.5.5 0 0 0 .5.5h9.467Zm.1298-5.5243a.2379.2379 0 0 1-.2379.238H3.4537a.2379.2379 0 0 1 0-.4758h9.1982a.2379.2379 0 0 1 .2379.2379Zm-.7136-1.0308a.2379.2379 0 1 0 0-.4758H3.8766a.2379.2379 0 1 0 0 .4758h8.2996Z" clipRule="evenodd" /></React.Fragment>
, 
    'Cash'
)

type CashRef = PathIconRef

type CashProps = PathIconProps

export {
    Cash
}

export type {
    CashRef,
    CashProps
}

export default Cash
