import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const FlagFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<FlagFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M3.0336 14c.257 0 .4649-.2018.4649-.4587v-3.4006c.1529-.0673.7278-.2875 1.6269-.2875 2.263 0 3.682 1.107 5.8348 1.107.9542 0 1.3089-.1039 1.7737-.3119.4221-.1896.6973-.5076.6973-1.0703V3.37c0-.3302-.2814-.5198-.6361-.5198-.2997 0-.8624.2568-1.9144.2568C8.7278 3.107 7.315 2 5.0459 2c-.9542 0-1.315.104-1.7798.312-.422.1895-.6973.5076-.6973 1.0642v10.1651c0 .2507.214.4587.4648.4587Z" clipRule="evenodd" />
, 
    'FlagFilled'
)

type FlagFilledRef = PathIconRef

type FlagFilledProps = PathIconProps

export {
    FlagFilled
}

export type {
    FlagFilledRef,
    FlagFilledProps
}

export default FlagFilled
