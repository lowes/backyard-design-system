import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Dots: React.MemoExoticComponent<React.ForwardRefExoticComponent<DotsProps>> = createPathIcon(
    <path fillRule="evenodd" d="M3.2725 9.2725c.719 0 1.2917-.5662 1.2917-1.2725 0-.7063-.5727-1.2725-1.2917-1.2725C2.5726 6.7275 2 7.2937 2 8c0 .7063.5726 1.2725 1.2725 1.2725Zm4.7275 0A1.2681 1.2681 0 0 0 9.2726 8 1.2681 1.2681 0 0 0 8 6.7275c-.6999 0-1.2661.5662-1.2661 1.2725 0 .7063.5662 1.2725 1.2661 1.2725Zm4.7274 0A1.2682 1.2682 0 0 0 14 8a1.2682 1.2682 0 0 0-1.2726-1.2725c-.7189 0-1.2852.5662-1.2852 1.2725 0 .7063.5663 1.2725 1.2852 1.2725Z" clipRule="evenodd" />
, 
    'Dots'
)

type DotsRef = PathIconRef

type DotsProps = PathIconProps

export {
    Dots
}

export type {
    DotsRef,
    DotsProps
}

export default Dots
