import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const BookmarkOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<BookmarkOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.8118 14c.3465 0 .6204-.2124.6204-.721V3.7494C12.4322 2.587 11.8565 2 10.6996 2H5.3004c-1.157 0-1.7326.5869-1.7326 1.7494v9.5296c0 .5086.2738.721.6204.721.285 0 .4583-.1453 1.0172-.7098l2.7163-2.7052c.028-.0224.0503-.0447.0783-.0447.0223 0 .0503.0223.0782.0447l2.7164 2.7052c.5477.5533.7322.7098 1.0172.7098Zm-7.3442-1.4085V3.7662c0-.559.2962-.8663.8775-.8663h5.3097c.5757 0 .8776.3074.8776.8663v8.8253c0 .1062-.0615.123-.1398.0503L8.2794 9.5622c-.1006-.1006-.2012-.1286-.2794-.1286-.0839 0-.1789.028-.2795.1286l-3.1132 3.0796c-.0782.0783-.1397.0559-.1397-.0503Z" clipRule="evenodd" />
, 
    'BookmarkOutlined'
)

type BookmarkOutlinedRef = PathIconRef

type BookmarkOutlinedProps = PathIconProps

export {
    BookmarkOutlined
}

export type {
    BookmarkOutlinedRef,
    BookmarkOutlinedProps
}

export default BookmarkOutlined
