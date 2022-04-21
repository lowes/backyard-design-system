import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const UnlockedFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<UnlockedFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.7473 14c.7934 0 1.187-.3936 1.187-1.2547V8.2307c0-.7504-.3013-1.1502-.9164-1.2363V5.309c0-1.5438.9903-2.3619 2.1405-2.3619 1.1501 0 2.1404.818 2.1404 2.3619v1.3654c0 .3752.2153.5597.4982.5597.2706 0 .4921-.166.4921-.5597V5.4382C14.2891 3.1194 12.7699 2 11.1584 2S8.0277 3.1194 8.0277 5.4382v1.5439l-5.0067.0123c-.7934 0-1.31.3875-1.31 1.2363v4.5146c0 .8611.3936 1.2547 1.187 1.2547h5.8493Z" clipRule="evenodd" />
, 
    'UnlockedFilled'
)

type UnlockedFilledRef = PathIconRef

type UnlockedFilledProps = PathIconProps

export {
    UnlockedFilled
}

export type {
    UnlockedFilledRef,
    UnlockedFilledProps
}

export default UnlockedFilled
