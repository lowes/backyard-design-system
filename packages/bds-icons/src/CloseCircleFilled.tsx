import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CloseCircleFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<CloseCircleFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm2.1059-3.3882a.4976.4976 0 0 1-.353-.1471L7.9941 8.7l-1.753 1.7647c-.0882.0941-.2117.1471-.3529.1471-.2706 0-.494-.2236-.494-.5 0-.1353.0529-.253.147-.3412L7.3 8.0059 5.5412 6.2412c-.0941-.0824-.147-.206-.147-.3412 0-.2706.2235-.4882.494-.4882.1412 0 .253.053.3412.147l1.7647 1.7589 1.7765-1.7648c.1-.1058.2118-.1529.3412-.1529a.4933.4933 0 0 1 .4941.4941c0 .1353-.0412.247-.1471.3412L8.6941 8.0059l1.7588 1.753c.0942.094.1471.2117.1471.3529 0 .2764-.2176.5-.4941.5Z" clipRule="evenodd" />
, 
    'CloseCircleFilled'
)

type CloseCircleFilledRef = PathIconRef

type CloseCircleFilledProps = PathIconProps

export {
    CloseCircleFilled
}

export type {
    CloseCircleFilledRef,
    CloseCircleFilledProps
}

export default CloseCircleFilled
