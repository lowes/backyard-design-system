import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const SearchIcon: React.MemoExoticComponent<React.ForwardRefExoticComponent<SearchIconProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.2425 14c.4103 0 .7007-.3156.7007-.7196 0-.1894-.0631-.3661-.202-.505L10.768 9.7959c.625-.8206.9974-1.837.9974-2.9416C11.7654 4.184 9.5813 2 6.9111 2 4.241 2 2.0568 4.1841 2.0568 6.8543c0 2.6702 2.1841 4.8543 4.8543 4.8543 1.0542 0 2.0263-.3409 2.8217-.909l2.9921 2.9921c.1389.1389.3219.2083.5176.2083Zm-6.3314-3.3393c-2.0831 0-3.8064-1.7233-3.8064-3.8064S4.828 3.0479 6.911 3.0479s3.8064 1.7233 3.8064 3.8064-1.7233 3.8064-3.8064 3.8064Z" clipRule="evenodd" />
, 
    'SearchIcon'
)

type SearchIconRef = PathIconRef

type SearchIconProps = PathIconProps

export {
    SearchIcon
}

export type {
    SearchIconRef,
    SearchIconProps
}

export default SearchIcon
