import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Save: React.MemoExoticComponent<React.ForwardRefExoticComponent<SaveProps>> = createPathIcon(
    <path fillRule="evenodd" d="m13.855 4.645-2.5-2.5A.5.5 0 0 0 11 2H3c-.5523 0-1 .4477-1 1v10c0 .5523.4477 1 1 1h10c.5523 0 1-.4477 1-1V5a.4998.4998 0 0 0-.145-.355ZM6 3h4v2H6V3Zm4 10H6V9h4v4Zm1 0V9c0-.5523-.4477-1-1-1H6c-.5523 0-1 .4477-1 1v4H3V3h2v2c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1V3.205l2 2V13h-2Z" clipRule="evenodd" />
, 
    'Save'
)

type SaveRef = PathIconRef

type SaveProps = PathIconProps

export {
    Save
}

export type {
    SaveRef,
    SaveProps
}

export default Save
