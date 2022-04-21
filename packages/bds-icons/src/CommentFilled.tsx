import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CommentFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<CommentFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M5.2342 13.6488c.2123 0 .3702-.1089.6261-.3484l1.9655-1.7968 3.6806.0055c1.6225.0054 2.4937-.8984 2.4937-2.4937V4.8448c0-1.5953-.8712-2.4936-2.4937-2.4936H4.4937c-1.6225 0-2.4936.8929-2.4936 2.4936v4.1706c0 1.6008.8711 2.4937 2.4936 2.4882h.256v1.5844c0 .3376.1741.5608.4845.5608Zm5.8148-8.2486H4.951c-.1906 0-.3484-.1525-.3484-.354 0-.1796.1578-.3375.3484-.3375h6.098c.1906 0 .3485.158.3485.3376 0 .2014-.1579.3539-.3485.3539Zm0 1.9492H4.951a.3474.3474 0 0 1-.3484-.3485c0-.1851.1578-.343.3484-.343h6.098c.1906 0 .3485.1579.3485.343a.3474.3474 0 0 1-.3485.3485ZM8.9202 9.304H4.951c-.1906 0-.3484-.1579-.3484-.3485 0-.2014.1578-.3484.3484-.3484h3.9691c.1852 0 .343.147.343.3484 0 .1906-.1578.3485-.343.3485Z" clipRule="evenodd" />
, 
    'CommentFilled'
)

type CommentFilledRef = PathIconRef

type CommentFilledProps = PathIconProps

export {
    CommentFilled
}

export type {
    CommentFilledRef,
    CommentFilledProps
}

export default CommentFilled
