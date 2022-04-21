import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const HeartOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<HeartOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 13.5468c.1269 0 .3082-.0846.441-.1631C11.843 11.2085 14 8.6767 14 6.1027c0-2.139-1.4683-3.6495-3.426-3.6495-1.1178 0-2.0242.5317-2.574 1.3474-.5378-.8097-1.4562-1.3474-2.574-1.3474C3.4683 2.4532 2 3.9638 2 6.1027c0 2.574 2.1571 5.1058 5.565 7.281.1268.0785.3081.1631.435.1631Zm0-1.0211c-.0242 0-.0665-.0302-.1209-.0725-2.5317-1.6798-4.9063-4.1028-4.9063-6.3505 0-1.6072 1.0393-2.6767 2.441-2.6767 1.136 0 1.7886.707 2.1753 1.3112.1631.2417.2658.3081.4109.3081.145 0 .2356-.0725.4108-.3081.417-.5922 1.0453-1.3112 2.1753-1.3112 1.4018 0 2.4411 1.0695 2.4411 2.6767 0 2.2478-2.3747 4.6707-4.9004 6.3505-.0604.0423-.1027.0725-.1268.0725Z" clipRule="evenodd" />
, 
    'HeartOutlined'
)

type HeartOutlinedRef = PathIconRef

type HeartOutlinedProps = PathIconProps

export {
    HeartOutlined
}

export type {
    HeartOutlinedRef,
    HeartOutlinedProps
}

export default HeartOutlined
