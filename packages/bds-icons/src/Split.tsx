import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Split: React.MemoExoticComponent<React.ForwardRefExoticComponent<SplitProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.0013 14c.376 0 .5842-.2484.5842-.7117V9.4341c0-1.5913 1.7525-3.9011 3.3841-4.9687l.5708.7789c.282.3894.6244.3021.7654-.1343l.846-2.471c.1209-.3626-.0738-.6177-.4431-.611l-2.6187.0403c-.4499.0067-.6379.3021-.3626.6849l.5439.7453c-1.578 1.1079-3.0618 3.082-3.2632 4.0958h-.0202c-.2014-1.0206-1.6786-2.988-3.2565-4.0958l.5304-.6849c.2887-.376.1074-.6782-.3424-.6983l-2.612-.1142c-.376-.0201-.5774.2283-.4633.5976l.7722 2.4911c.1343.4432.47.5439.7654.1612l.6178-.8058c1.6249 1.0408 3.4177 3.3774 3.4177 4.989v3.8541c0 .4633.2081.7117.5841.7117Z" clipRule="evenodd" />
, 
    'Split'
)

type SplitRef = PathIconRef

type SplitProps = PathIconProps

export {
    Split
}

export type {
    SplitRef,
    SplitProps
}

export default Split
