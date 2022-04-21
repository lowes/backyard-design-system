import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ShippingOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<ShippingOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="m8.4595 13.8679 4.3251-2.4542c.5062-.2916.7703-.5777.7703-1.3646V5.6909c0-.5723-.2091-.9244-.6713-1.194L8.9877 2.2848c-.6658-.3797-1.3096-.3797-1.9755 0l-3.8904 2.212c-.4677.2697-.6768.6218-.6768 1.1941v4.3582c0 .7869.2696 1.073.7704 1.3646l4.3306 2.4542c.3082.1761.5998.1761.9135 0Zm2.1295-7.7863L6.3244 3.6714l1.0565-.5998c.4237-.242.8144-.2476 1.2436 0l3.6263 2.069-1.6618.941ZM8.0027 7.5453l-4.248-2.4046 1.7003-.974 4.248 2.4157-1.7003.963ZM7.568 12.883l-3.8574-2.1956c-.3191-.1816-.4292-.3632-.4292-.6658V5.867L7.568 8.3157v4.5673Zm.864 0V8.3157l4.2865-2.4487v4.1546c0 .3026-.11.4842-.4237.6658L8.4319 12.883Zm1.6806-5.5632v1.02c0 .371.395.6086.7226.4346a.3816.3816 0 0 0 .2027-.3371V6.8418l-.9253.478Z" clipRule="evenodd" />
, 
    'ShippingOutlined'
)

type ShippingOutlinedRef = PathIconRef

type ShippingOutlinedProps = PathIconProps

export {
    ShippingOutlined
}

export type {
    ShippingOutlinedRef,
    ShippingOutlinedProps
}

export default ShippingOutlined
