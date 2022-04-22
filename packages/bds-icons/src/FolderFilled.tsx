import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const FolderFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<FolderFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M14 6.1237v-.3972c0-1.0767-.5488-1.615-1.6411-1.615H7.2735c-.3554 0-.5644-.0889-.8258-.3084l-.3188-.2665C5.784 3.249 5.5122 3.1498 5 3.1498H3.4425C2.528 3.1498 2 3.6725 2 4.7282v1.3955h12Zm-1.4843 6.7265c.9407 0 1.4843-.5436 1.4843-1.6202V6.8345H2V11.23c0 1.0818.5488 1.6202 1.6411 1.6202h8.8746Z" clipRule="evenodd" />
, 
    'FolderFilled'
)

type FolderFilledRef = PathIconRef

type FolderFilledProps = PathIconProps

export {
    FolderFilled
}

export type {
    FolderFilledRef,
    FolderFilledProps
}

export default FolderFilled
