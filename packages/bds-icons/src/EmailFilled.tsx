import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const EmailFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<EmailFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.0127 8.7323c.26 0 .5009-.1204.7799-.3994l5.5163-5.4593c-.2346-.2282-.6721-.336-1.2998-.336H2.8007c-.5326 0-.9067.1014-1.116.3107l5.548 5.4846c.2727.2726.5137.3994.78.3994Zm-6.8542 3.7093 4.4828-4.432-4.4955-4.4322C1.0508 3.755 1 4.0595 1 4.4969v7c0 .4502.0507.7672.1585.9448Zm13.6893-.0064c.1015-.1838.1522-.4945.1522-.9384v-7c0-.4248-.0507-.7291-.1395-.9003l-4.4828 4.413 4.4701 4.4257Zm-1.6485 1.0272c.5326 0 .9003-.1014 1.1096-.3043L9.7373 8.6309l-.4185.4248c-.4375.4185-.8496.6087-1.3061.6087-.4629 0-.875-.1902-1.3062-.6087l-.4248-.4248-4.5589 4.5208c.241.2093.6594.3107 1.2681.3107h10.2084Z" clipRule="evenodd" />
, 
    'EmailFilled'
)

type EmailFilledRef = PathIconRef

type EmailFilledProps = PathIconProps

export {
    EmailFilled
}

export type {
    EmailFilledRef,
    EmailFilledProps
}

export default EmailFilled
