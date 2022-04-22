import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ReminderFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<ReminderFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7235 6-6 0-3.2824-2.7235-6-6.0059-6C4.7176 2 2 4.7176 2 8c0 3.2765 2.7235 6 6 6Zm2.6412-3.9706H5.3588c-.3 0-.4823-.153-.4823-.3882 0-.3353.3411-.6235.6235-.9235.2235-.2412.2706-.7177.3-1.106.0235-1.2646.3647-2.1352 1.2412-2.4529.1294-.4294.4764-.7706.9588-.7706s.8294.3412.9588.7706c.8765.3177 1.2177 1.1883 1.2412 2.453.0294.3882.0706.8647.3 1.1059l.1778.1768c.2349.2366.4457.4784.4457.7467 0 .2353-.1823.3882-.4823.3882ZM8 11.3882c-.5588 0-.9706-.4-1.0118-.8823h2.0236c-.0412.4823-.453.8823-1.0118.8823Z" clipRule="evenodd" />
, 
    'ReminderFilled'
)

type ReminderFilledRef = PathIconRef

type ReminderFilledProps = PathIconProps

export {
    ReminderFilled
}

export type {
    ReminderFilledRef,
    ReminderFilledProps
}

export default ReminderFilled
