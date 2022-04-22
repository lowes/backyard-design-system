import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const BookmarksOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<BookmarksOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.5515 14c.3037 0 .5438-.1862.5438-.632V5.0153c0-1.019-.5046-1.5333-1.5187-1.5333H4.8442c-1.014 0-1.5186.5144-1.5186 1.5333v8.3527c0 .4458.24.632.5437.632.2499 0 .4018-.1274.8917-.6222l2.3808-2.3711c.0245-.0195.0441-.0391.0686-.0391.0196 0 .0441.0196.0686.0391L9.66 13.3778c.4801.485.6418.6222.8916.6222Zm-6.4372-1.2345V5.03c0-.4899.2596-.7593.7691-.7593h4.654c.5046 0 .7692.2694.7692.7593v7.7355c0 .093-.0539.1077-.1225.0441l-2.7287-2.6994c-.0882-.0881-.1764-.1126-.245-.1126-.0735 0-.1567.0245-.245.1126l-2.7286 2.6994c-.0686.0685-.1225.0489-.1225-.0441Zm8.0164-.2475c.3037 0 .5438-.1861.5438-.6319V3.5334c0-1.019-.5046-1.5334-1.5187-1.5334H6.4234c-.7266 0-1.1917.2641-1.397.7887h5.8593c.5523 0 1 .4477 1 1v8.6711a.5165.5165 0 0 0 .245.0582Z" clipRule="evenodd" />
, 
    'BookmarksOutlined'
)

type BookmarksOutlinedRef = PathIconRef

type BookmarksOutlinedProps = PathIconProps

export {
    BookmarksOutlined
}

export type {
    BookmarksOutlinedRef,
    BookmarksOutlinedProps
}

export default BookmarksOutlined
