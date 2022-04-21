import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const NotesOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<NotesOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.972 14c1.1586 0 1.7351-.5877 1.7351-1.7519v-5.082c0-.722-.084-1.0355-.5317-1.4945l-3.084-3.1399C8.666 2.0952 8.3134 2 7.6866 2H5.028c-1.153 0-1.735.5933-1.735 1.7575v8.4906C3.293 13.4179 3.8693 14 5.028 14h5.944Zm-.0448-.9011h-5.86c-.5765 0-.8732-.3079-.8732-.8676v-8.457c0-.5542.2967-.8732.8788-.8732h2.4906V6.153c0 .7052.3526 1.0522 1.0523 1.0522h3.1903v5.0261c0 .5597-.2967.8676-.8788.8676Zm.7053-6.7388h-2.916c-.224 0-.308-.0896-.308-.3135v-2.972l3.224 3.2855Zm-1.5728 3.0727c.1959 0 .3414-.151.3414-.347 0-.1903-.1455-.3414-.3414-.3414H5.8116c-.2015 0-.3527.1511-.3527.3414 0 .196.1512.347.3527.347h4.2481Zm0 1.9534c.1959 0 .3414-.1455.3414-.3358 0-.1959-.1455-.3526-.3414-.3526H5.8116c-.2015 0-.3527.1567-.3527.3526 0 .1903.1512.3358.3527.3358h4.2481Z" clipRule="evenodd" />
, 
    'NotesOutlined'
)

type NotesOutlinedRef = PathIconRef

type NotesOutlinedProps = PathIconProps

export {
    NotesOutlined
}

export type {
    NotesOutlinedRef,
    NotesOutlinedProps
}

export default NotesOutlined
