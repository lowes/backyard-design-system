import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ReminderOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<ReminderOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2235 5-5 5Zm2.6412-2.9588c.3 0 .4823-.153.4823-.3883 0-.3353-.3294-.6294-.6235-.9235-.2294-.2412-.2706-.7176-.3-1.1059-.0235-1.2647-.3647-2.1353-1.2412-2.453C8.8294 4.7413 8.4824 4.4 8 4.4s-.8294.3412-.9588.7706c-.8765.3176-1.2177 1.1882-1.2412 2.453-.0294.3882-.0765.8646-.3 1.1058-.2824.3-.6235.5883-.6235.9235 0 .2353.1823.3883.4823.3883h5.2824ZM8 11.4c.5588 0 .9706-.4 1.0118-.8824H6.9882C7.0294 11 7.4412 11.4 8 11.4Z" clipRule="evenodd" />
, 
    'ReminderOutlined'
)

type ReminderOutlinedRef = PathIconRef

type ReminderOutlinedProps = PathIconProps

export {
    ReminderOutlined
}

export type {
    ReminderOutlinedRef,
    ReminderOutlinedProps
}

export default ReminderOutlined
