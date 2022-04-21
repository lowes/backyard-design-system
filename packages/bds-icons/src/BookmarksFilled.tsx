import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const BookmarksFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<BookmarksFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.6514 14c.3055 0 .5469-.1872.5469-.6356V4.9639c0-1.0248-.5075-1.5422-1.5274-1.5422H4.9115c-1.02 0-1.5274.5174-1.5274 1.5422v8.4005c0 .4484.2414.6356.5469.6356.2513 0 .3892-.1429.8967-.6257l2.222-2.1285c.1085-.1035.1725-.133.2415-.133s.133.0345.2414.133l2.5128 2.4241c.1971.1872.3547.3301.606.3301Zm1.9645-2.0573c0 .4483-.2414.6356-.5469.6356-.2299 0-.3815-.1196-.5565-.2834v-8.339c0-.5524-.4477-1-1-1H4.871C5.0414 2.3201 5.5266 2 6.329 2h4.7595c1.0199 0 1.5274.5173 1.5274 1.5421v8.4006Z" clipRule="evenodd" />
, 
    'BookmarksFilled'
)

type BookmarksFilledRef = PathIconRef

type BookmarksFilledProps = PathIconProps

export {
    BookmarksFilled
}

export type {
    BookmarksFilledRef,
    BookmarksFilledProps
}

export default BookmarksFilled
