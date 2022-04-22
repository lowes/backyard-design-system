import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const WaterHeaterSmall: React.MemoExoticComponent<React.ForwardRefExoticComponent<WaterHeaterSmallProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.625 2c.3624 0 .6562.2985.6562.6667h.6563c.7249 0 1.3125.597 1.3125 1.3333v6.6667l-.0007.022.0007 1.978c0 .7363-.5876 1.3333-1.3125 1.3333l-1.9403-.0001L9.9688 14H6.0313l-.0283-.0007L4.0625 14c-.7249 0-1.3125-.597-1.3125-1.3333V4c0-.7364.5876-1.3333 1.3125-1.3333h.6563c0-.3682.2938-.6667.6562-.6667s.6563.2985.6563.6667h3.9375c0-.3682.2938-.6667.6562-.6667Zm1.884 9.3004c.0052-.1656-.1299-.2999-.2956-.2999h-8.444a.2985.2985 0 0 0-.299.3004c.0122 1.2297.1796 1.9196 2.4736 1.9196l.1157.0033h3.9375c2.0423-.0031 2.4667-.49 2.5118-1.9234Zm-5.4934-7.9H3.9695a.5.5 0 0 0-.5.5v5.7663h9.0439V3.9004a.5.5 0 0 0-.5-.5h-3.029v1.933c0 .3681-.2938.6666-.6563.6666H7.672c-.3625 0-.6563-.2985-.6563-.6667v-1.933ZM8 6.6667c.5437 0 .9844.4477.9844 1 0 .5522-.4407 1-.9844 1-.5437 0-.9844-.4478-.9844-1 0-.5523.4407-1 .9844-1Z" />
, 
    'WaterHeaterSmall'
)

type WaterHeaterSmallRef = PathIconRef

type WaterHeaterSmallProps = PathIconProps

export {
    WaterHeaterSmall
}

export type {
    WaterHeaterSmallRef,
    WaterHeaterSmallProps
}

export default WaterHeaterSmall
