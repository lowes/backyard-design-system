import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CartOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<CartOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.2946 10.5841c.2028 0 .3796-.1664.3796-.39 0-.2236-.1768-.39-.3796-.39H6.3154c-.2963 0-.4783-.208-.5251-.525l-.0832-.546h6.5979c.7591 0 1.1491-.468 1.2583-1.2114l.4159-2.7505c.0104-.0676.0208-.1508.0208-.1975 0-.2496-.1872-.4212-.4731-.4212H5.0364l-.0988-.6603c-.052-.4003-.1976-.6031-.7279-.6031h-1.825c-.208 0-.3847.182-.3847.39 0 .2131.1768.395.3847.395h1.7574l.8319 5.709c.1092.7382.4991 1.201 1.253 1.201h6.0676ZM5.5927 7.9532l-.442-3.0156h7.9654l-.3691 2.4905c-.0416.3223-.2132.5199-.52.5199l-6.6343.0052Zm1.045 5.1577c.468 0 .8424-.3691.8424-.8423a.8388.8388 0 0 0-.8423-.8423c-.4732 0-.8475.3744-.8475.8423 0 .4732.3743.8423.8475.8423Zm4.8614 0c.4732 0 .8475-.3691.8475-.8423 0-.4679-.3743-.8423-.8475-.8423-.4679 0-.8474.3744-.8474.8423 0 .4732.3795.8423.8474.8423Z" clipRule="evenodd" />
, 
    'CartOutlined'
)

type CartOutlinedRef = PathIconRef

type CartOutlinedProps = PathIconProps

export {
    CartOutlined
}

export type {
    CartOutlinedRef,
    CartOutlinedProps
}

export default CartOutlined
