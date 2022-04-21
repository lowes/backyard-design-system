import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const DotsVertical: React.MemoExoticComponent<React.ForwardRefExoticComponent<DotsVerticalProps>> = createPathIcon(
    <path fillRule="evenodd" d="M9.2726 12.7275c0-.719-.5663-1.2917-1.2725-1.2917-.7063 0-1.2726.5727-1.2726 1.2917 0 .6999.5663 1.2725 1.2726 1.2725.7062 0 1.2725-.5726 1.2725-1.2725Zm0-4.7275a1.2681 1.2681 0 0 0-1.2725-1.2726A1.2681 1.2681 0 0 0 6.7275 8c0 .6999.5663 1.2661 1.2726 1.2661.7062 0 1.2725-.5662 1.2725-1.2661Zm0-4.7274A1.2681 1.2681 0 0 0 8.0001 2a1.2681 1.2681 0 0 0-1.2726 1.2726c0 .719.5663 1.2852 1.2726 1.2852.7062 0 1.2725-.5663 1.2725-1.2852Z" clipRule="evenodd" />
, 
    'DotsVertical'
)

type DotsVerticalRef = PathIconRef

type DotsVerticalProps = PathIconProps

export {
    DotsVertical
}

export type {
    DotsVerticalRef,
    DotsVerticalProps
}

export default DotsVertical
