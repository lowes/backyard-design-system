import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const TriangleUp: React.MemoExoticComponent<React.ForwardRefExoticComponent<TriangleUpProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.1865 11.7077c.7132 0 1.046-.5626.6339-1.0577L8.7968 4.63c-.3486-.4614-1.236-.439-1.6006 0l-5.0236 6.02c-.3962.4613-.0793 1.0577.6339 1.0577h10.38Z" clipRule="evenodd" />
, 
    'TriangleUp'
)

type TriangleUpRef = PathIconRef

type TriangleUpProps = PathIconProps

export {
    TriangleUp
}

export type {
    TriangleUpRef,
    TriangleUpProps
}

export default TriangleUp
