import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const TagOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<TagOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="m10.0138 13.4151 3.4003-3.395c.7897-.7842.7736-1.5793.0054-2.3474l-5.2536-5.243C7.7629 2.027 7.5373 2 6.9733 2H4.9266c-.5694 0-.7413.1397-1.1495.5425L2.5416 3.7782c-.4083.4082-.5426.5855-.5426 1.155v2.0412c0 .564.0269.795.4297 1.198l5.2376 5.2482c.7682.7682 1.5578.7789 2.3475-.0054Zm-1.7674-.6446L3.0411 7.5598c-.1128-.1074-.1772-.2202-.1772-.3975V4.8954c0-.1665.059-.2793.1772-.3921L4.5023 3.042c.1128-.1128.2256-.1772.3921-.1772H7.156c.1827 0 .2955.0698.403.1772l5.216 5.2053c.3814.3814.3868.795-.0054 1.1872l-3.3359 3.3305c-.3921.3976-.8004.3922-1.1872.0054Zm-2.6913-6.473c.4244 0 .736-.3277.736-.736 0-.4136-.3116-.736-.736-.736-.419 0-.7359.3224-.7359.736 0 .4083.317.736.736.736Z" clipRule="evenodd" />
, 
    'TagOutlined'
)

type TagOutlinedRef = PathIconRef

type TagOutlinedProps = PathIconProps

export {
    TagOutlined
}

export type {
    TagOutlinedRef,
    TagOutlinedProps
}

export default TagOutlined
