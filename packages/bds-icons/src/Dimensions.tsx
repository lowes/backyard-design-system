import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Dimensions: React.MemoExoticComponent<React.ForwardRefExoticComponent<DimensionsProps>> = createPathIcon(
    <path fillRule="evenodd" d="M3.4516 3c0-.5523.4477-1 1-1H7c.5523 0 1 .4477 1 1v.4516h5c.5523 0 1 .4477 1 1V7c0 .5523-.4477 1-1 1H8v5c0 .5523-.4477 1-1 1H4.4516c-.5523 0-1-.4477-1-1V8H3c-.5523 0-1-.4477-1-1V4.4516c0-.5523.4477-1 1-1h.4516V3Zm.6566.2314a.5.5 0 0 1 .5-.5h2.2352a.5.5 0 0 1 .5.5v1.6568H6.1177a.3919.3919 0 0 0 0 .7837h1.2257v1.9362H5.2036a.3919.3919 0 1 0 0 .7838h2.1398v1.9362H6.1177a.3918.3918 0 1 0 0 .7837h1.2257v1.6568a.5.5 0 0 1-.5.5H4.6082a.5.5 0 0 1-.5-.5V3.2314Zm8.6604.8768a.5.5 0 0 1 .5.5v2.2352a.5.5 0 0 1-.5.5h-1.0393V6.1177a.392.392 0 0 0-.7838 0v1.2257h-1.177V5.2036a.3919.3919 0 1 0-.7837 0v2.1398H8V4.1082h4.7686Zm-9.546-.0042a.5.5 0 0 0-.5.5v2.2436a.5.5 0 0 0 .5.5h.229V4.104h-.229Z" clipRule="evenodd" />
, 
    'Dimensions'
)

type DimensionsRef = PathIconRef

type DimensionsProps = PathIconProps

export {
    Dimensions
}

export type {
    DimensionsRef,
    DimensionsProps
}

export default Dimensions
