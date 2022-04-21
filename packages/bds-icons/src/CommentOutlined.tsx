import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const CommentOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<CommentOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M5.3485 13.6325c.2668 0 .4519-.1416.784-.4356l1.8784-1.6715h3.4955c1.6225 0 2.4936-.8984 2.4936-2.4936V4.8612c0-1.5953-.8711-2.4937-2.4936-2.4937H4.4937C2.871 2.3675 2 3.2605 2 4.8612v4.1706c0 1.6007.8711 2.4936 2.4936 2.4936h.2614v1.4156c0 .4193.2123.6915.5935.6915Zm.2232-.9964v-1.5789c0-.294-.1143-.4084-.4083-.4084h-.6697c-1.0998 0-1.617-.5608-1.617-1.6225V4.8612c0-1.0617.5172-1.6171 1.617-1.6171h7.0127c1.0944 0 1.6171.5554 1.6171 1.617v4.1652c0 1.0617-.5227 1.6225-1.6171 1.6225H7.9783c-.305 0-.4574.0436-.6643.2559l-1.7423 1.7314Zm5.1996-7.0726c.1742 0 .3158-.136.3158-.3158 0-.1742-.1416-.3103-.3158-.3103H5.2286c-.1742 0-.3158.1361-.3158.3103 0 .1797.1416.3158.3158.3158h5.5427Zm0 1.7695c.1742 0 .3158-.136.3158-.3158 0-.1687-.1416-.3157-.3158-.3157H5.2286c-.1742 0-.3158.147-.3158.3157 0 .1797.1416.3158.3158.3158h5.5427ZM8.833 9.108a.3068.3068 0 0 0 .3103-.3104c0-.1796-.136-.3212-.3103-.3212H5.2286c-.1742 0-.3158.1416-.3158.3212 0 .1743.1416.3104.3158.3104H8.833Z" clipRule="evenodd" />
, 
    'CommentOutlined'
)

type CommentOutlinedRef = PathIconRef

type CommentOutlinedProps = PathIconProps

export {
    CommentOutlined
}

export type {
    CommentOutlinedRef,
    CommentOutlinedProps
}

export default CommentOutlined
