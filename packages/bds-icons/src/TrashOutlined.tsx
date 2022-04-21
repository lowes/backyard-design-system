import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const TrashOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<TrashOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.4733 14c.7705 0 1.2878-.5011 1.3255-1.2717l.3718-7.8347h.6466c.221 0 .3988-.1886.3988-.4095 0-.221-.1778-.4042-.3988-.4042h-2.4625v-.8082C10.3547 2.4957 9.832 2 9.0022 2H6.987c-.8299 0-1.3471.4957-1.3471 1.2717v.8082H3.1827c-.2155 0-.3987.1886-.3987.4042 0 .2209.1832.4095.3987.4095h.652l.3718 7.8401C4.2443 13.5043 4.7508 14 5.5321 14h4.9412ZM9.498 4.08H6.502v-.7545c0-.307.221-.5226.5496-.5226H8.943c.3286 0 .555.2155.555.5226V4.08Zm.8891 9.1063H5.6075c-.3071 0-.5388-.2317-.555-.5496l-.3772-7.7431h6.6332l-.3557 7.7431c-.0161.3233-.2424.5496-.5657.5496Zm-.7868-.9429c.1779 0 .3072-.1455.3126-.3503l.1616-5.6524c.0054-.1994-.1293-.3503-.3125-.3503-.167 0-.3072.1563-.3125.3503l-.1617 5.647c-.0054.1994.1293.3557.3125.3557Zm-3.1953 0c.1832 0 .318-.1563.3125-.3557l-.167-5.647c-.0054-.194-.1455-.3503-.3125-.3503-.1832 0-.318.151-.3126.3503l.1617 5.6524c.0054.2048.1347.3503.318.3503Zm1.595 0c.1778 0 .3287-.1563.3287-.3503V6.2407c0-.194-.1509-.3503-.3287-.3503-.1725 0-.3233.1563-.3233.3503v5.6524c0 .194.1508.3503.3233.3503Z" clipRule="evenodd" />
, 
    'TrashOutlined'
)

type TrashOutlinedRef = PathIconRef

type TrashOutlinedProps = PathIconProps

export {
    TrashOutlined
}

export type {
    TrashOutlinedRef,
    TrashOutlinedProps
}

export default TrashOutlined
