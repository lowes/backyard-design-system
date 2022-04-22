import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const MultipleOptionsOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<MultipleOptionsOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M3.3462 11.4923c.095 0 .206-.0317.3115-.1056v-5.649c0-.19.037-.2639.2006-.3536l4.894-2.8192C8.7734 2.2164 8.5464 2 8.2508 2c-.1373 0-.2851.037-.4435.132L3.3779 4.6766c-.5174.301-.5754.396-.5754.9978v5.0524c0 .454.2164.7655.5437.7655Zm2.1065 1.2195c.1003 0 .2059-.0316.3115-.1056V6.9573c0-.2059.0317-.2587.2059-.3537l4.894-2.8245c.0158-.3431-.2007-.5649-.5121-.5649-.132 0-.2799.0423-.4382.1268L5.4844 5.8909c-.5174.2956-.5808.4065-.5808.9978v5.0576c0 .4541.2323.7655.5491.7655ZM7.7176 14c.1847 0 .4065-.0739.6704-.2217l4.1391-2.3757c.4857-.2799.6704-.5702.6704-1.1615L13.187 5.458c0-.6335-.2218-.9556-.6177-.9556-.1795 0-.396.0686-.6441.2112L7.7756 7.1052c-.4962.2903-.6705.586-.6705 1.1614v4.7831c0 .6124.2112.9503.6124.9503Zm.285-1.0295c-.0316-.0053-.037-.0211-.037-.058l.037-4.63c0-.2007.0581-.3063.2323-.4066l3.9965-2.3493c.0211-.0105.037-.0105.0528-.0053.0264.0053.037.0211.037.0581l-.0159 4.6459c0 .1742-.0581.3062-.2323.4117l-4.0176 2.3282c-.021.0106-.037.0106-.0528.0053Z" clipRule="evenodd" />
, 
    'MultipleOptionsOutlined'
)

type MultipleOptionsOutlinedRef = PathIconRef

type MultipleOptionsOutlinedProps = PathIconProps

export {
    MultipleOptionsOutlined
}

export type {
    MultipleOptionsOutlinedRef,
    MultipleOptionsOutlinedProps
}

export default MultipleOptionsOutlined
