import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const WarningFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<WarningFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.9741 14c.9499 0 1.5451-.6839 1.5451-1.5451 0-.2596-.0633-.5193-.2026-.7599L9.333 2.7789C9.048 2.2659 8.5224 2 8.003 2c-.5255 0-1.0511.266-1.3361.7789l-4.9773 8.9224c-.1393.2407-.209.494-.209.7536 0 .8612.5953 1.5451 1.5451 1.5451h9.9483Zm-4.971-4.3377c-.3356 0-.5192-.19-.5319-.532l-.0886-3.1282c-.0127-.342.2533-.5952.6142-.5952.3546 0 .627.2596.6143.6015l-.0887 3.122c-.0127.3482-.2026.5319-.5193.5319Zm0 2.3366c-.3672 0-.7092-.2912-.7092-.6839 0-.3926.3356-.6839.7092-.6839.3673 0 .7093.285.7093.6839 0 .399-.3483.6839-.7093.6839Z" clipRule="evenodd" />
, 
    'WarningFilled'
)

type WarningFilledRef = PathIconRef

type WarningFilledProps = PathIconProps

export {
    WarningFilled
}

export type {
    WarningFilledRef,
    WarningFilledProps
}

export default WarningFilled
