import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const BookmarkFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<BookmarkFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.8118 14c.3465 0 .6204-.2124.6204-.721V3.7494C12.4322 2.587 11.8565 2 10.6996 2H5.3004c-1.157 0-1.7326.5869-1.7326 1.7494v9.5296c0 .5086.2738.721.6204.721.285 0 .4415-.1621 1.0172-.7098l2.5207-2.4146c.123-.1173.1956-.1509.2739-.1509.0782 0 .1509.0392.2738.1509l2.8505 2.7499c.2236.2124.4025.3745.6875.3745Z" clipRule="evenodd" />
, 
    'BookmarkFilled'
)

type BookmarkFilledRef = PathIconRef

type BookmarkFilledProps = PathIconProps

export {
    BookmarkFilled
}

export type {
    BookmarkFilledRef,
    BookmarkFilledProps
}

export default BookmarkFilled
