import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const FlagOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<FlagOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M3.0336 14c.257 0 .4649-.2018.4649-.4587v-3.4006c.1529-.0673.7278-.2875 1.6269-.2875 2.263 0 3.682 1.107 5.8348 1.107.9542 0 1.3089-.1039 1.7737-.3119.4221-.1896.6973-.5076.6973-1.0703V3.37c0-.3302-.2814-.5198-.6361-.5198-.2997 0-.8624.2568-1.9144.2568C8.7278 3.107 7.315 2 5.0459 2c-.9542 0-1.315.104-1.7798.312-.422.1895-.6973.5076-.6973 1.0642v10.1651c0 .2507.214.4587.4648.4587Zm7.9266-3.9633c-2.0366 0-3.48-1.107-5.8348-1.107-.6728 0-1.2844.0795-1.627.2202V3.4067c.0857-.2018.5933-.4831 1.5475-.4831 2.1529 0 3.5902 1.107 5.8348 1.107.6667 0 1.2172-.0795 1.6269-.1957v5.7186c-.0856.2019-.5932.4832-1.5474.4832Z" clipRule="evenodd" />
, 
    'FlagOutlined'
)

type FlagOutlinedRef = PathIconRef

type FlagOutlinedProps = PathIconProps

export {
    FlagOutlined
}

export type {
    FlagOutlinedRef,
    FlagOutlinedProps
}

export default FlagOutlined
